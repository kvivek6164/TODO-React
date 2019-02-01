import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteValue, editValue } from '../actions';
import {toastr} from 'react-redux-toastr';



export class Comments extends Component {
    handleDelete = (ind) => {
        toastr.confirm('Are you sure about that!', {
            onOk: () => {this.props.deleteValue(ind)},
            onCancel: () => console.log('CANCEL: clicked')
          });
    }

    handleEdit = (value, ind) => {
        const editedValue = { ...value };
        editedValue.index = ind;
        this.props.editValue(editedValue);
    }
    render() {
        const ind = this.props.match.params.id;
        const user = this.props.temp;
        const isIndex = isNaN(ind);
        return (
            <div className="col-md-8 col-sm-8">
                <h4>User's Comments</h4>
                <ul className="list-group">
                    {!isIndex && user[ind] ? user[ind].commentsList.map((item, index) => {
                        return <li className="list-group-item" key={index}>
                            <span className="glyphicon glyphicon-trash pull-right text-danger" onClick={() => this.handleDelete(ind)}></span>
                            <span className="glyphicon glyphicon-pencil pull-right text-info" onClick={() => this.handleEdit(user[ind], ind)} style={{ paddingRight: '15px' }}></span>
                            {user[ind].email} @ {user[ind].date}<br></br>
                            {item}</li>
                    })
                        : user.map((todo, index) => {
                            if (todo.email !== '') {
                                return <li className="list-group-item" key={index}>
                                    <span className="glyphicon glyphicon-trash pull-right text-danger" onClick={() => this.handleDelete(index)}></span>
                                    <span className="glyphicon glyphicon-pencil pull-right text-info" onClick={() => this.handleEdit(todo, index)} style={{ paddingRight: '15px' }}></span>
                                    {todo.email} @ {todo.date}<br></br>
                                    {todo.commentsList[todo.commentsList.length - 1]}
                                </li>
                            }
                        }
                        )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const temp = [...state.todos];
    return { temp }
}

const mapDispatchToProps = {
    deleteValue, editValue
}

export default Comments = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Comments))