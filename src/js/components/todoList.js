import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Comments } from './comments';

import { deleteValue, editValue } from '../actions';
class TodoList extends Component {
    handleSelected = (index) => {
        console.log(index);
    }

    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <h4>User's Email
                    <span className="pull-right">
                                <Link to='/users/all'>All</Link>
                            </span>
                        </h4>
                        <ul className="list-group">
                            {this.props.temp.map((todo, index) => {
                                if (todo.email !== '') {
                                    return <Link to={`/users/${index}`} key={index} onClick={() => this.handleSelected(index)}>
                                        <li className="list-group-item">{todo.email}</li>
                                    </Link>

                                }
                            }
                            )}
                        </ul>
                    </div>

                    <Route path="/users/:id" component={Comments} />
                </div>
            </Router>

        )
    }
}

const mapStateToProps = state => {
    const temp = [...state.todos]
    return { temp }
}

export default connect(
    mapStateToProps,
)(TodoList)

