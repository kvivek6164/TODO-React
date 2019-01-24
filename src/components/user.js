import React, {Component} from 'react';

export default class User extends Component {
    render() {
        // console.log(this.props.match)
        return (
            <div>User detail {this.props.match.params.alias}</div>
        )
    }
}