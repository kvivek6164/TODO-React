import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ListView from './ListView';
import Crud from './Crud';
import About from './About';
import User from './user';
import Home from './Home';
import Modal from './modal';

const userDetail = true;
const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        userDetail ?
            (
                <Redirect to={{
                    pathname: '/users/vivek',
                    state: { from: props.location }
                }} />
            )
            // (React.createElement(component, props))
            : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )
    )} />
)

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            strLength: ''
        }
    }
    
    filterValue = (strLen) => {
        this.setState({
            strLength: strLen
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Brand</a>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/users/Vivek">Users</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <PrivateRoute path="/about" component={About} />
                    <Route path="/users/:alias" component={User} />



                    <Modal />
                    <div className='container'>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h1>My TODO App</h1>
                            </div>
                            <div className="panel-body">
                                <label>Search: </label>
                                <Crud onChangeFilter={this.filterValue} /><br />
                                <ListView filteredItem={this.state.strLength} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}