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
    render() {
        return (
            <form className="form-inline">
                <input type="text" className="form-control" value={this.state.abc} onChange={this.handleChange} />
            </form>
        )
    }
    handleChange = (e) => {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.product.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({ 
            abc: e.target.value,
            // items: updatedList 
        });
        this.props.onChangeFilter(updatedList)
    }
}