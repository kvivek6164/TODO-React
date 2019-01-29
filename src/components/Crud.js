import React, { Component } from 'react';
import data from '../assets/demo';

export default class Crud extends Component {
    constructor() {
        super();
        this.state = {
            abc: '',
            initialItems: data
        }
    }
    handleChange = (e) => {
        this.setState({
            abc: e.target.value
        });
        this.props.onChangeFilter(e.target.value)
    }
    render() {
        return (
            <form className="form-inline">
                <input type="date" />
                <input type="text" className="form-control" value={this.state.abc} onChange={this.handleChange} />
            </form>
        )
    }
}