import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gettingValue } from '../actions'

const mapDispatchToProps = {
    gettingValue
};
const mapStateToProps = state => {
    const temp = {...state};
    return temp;
}
class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            newDate: new Date,
            comments: '',
            isEmailUpdate: false
        }
    }

    formHandler = (e) => {
        e.preventDefault();
        this.state.newDate = Date.now();
        this.props.gettingValue(this.state);
        this.handleReset();
    }

    handleReset = () =>{
        this.setState({
            email: '',
            newDate: new Date,
            comments: '',
            isEmailUpdate: false
        })
    }
    handleChange = (val, e) => {
        if(val == 'email'){
            this.setState({email:e.target.value})
        } else {
            this.setState({comments: e.target.value})
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        props.todos.map(item=>{
            if(item.isEmailUpdate){
                this.setState({
                    email: item.email,
                    comments: item.commentsList[item.commentsList.length-1],
                    isEmailUpdate: true
                })
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formHandler}>
                    <div className="form-group">
                        <label>Email: &nbsp;</label>
                        <input type="email" className="form-control" name="email" value={this.state.email} readOnly={this.state.isEmailUpdate} placeholder="Please enter your email." required onChange={(e)=>this.handleChange("email",e)}/> 
                    </div>
                    <div className="form-group">
                        <label>Comment: &nbsp;</label>
                        <textarea className="form-control" name="comments" value={this.state.comments} placeholder="We expect the feedback from you." required onChange={(e)=>this.handleChange("comments",e)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">
                        (+) Add
                </button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)