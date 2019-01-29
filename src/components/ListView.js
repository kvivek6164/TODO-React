import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListView extends Component {
    constructor() {
        super();
        this.state = {
            detail: []
        }
    }
    handleClick = (val, name) => {
        const detailed = this.state.detail;
        switch (name) {
            case 'minus': {
                if (detailed[val].qty > 1) {
                    detailed[val].qty = (Number(detailed[val].qty) - 1) + '';
                    detailed[val].inTotal = this.calc(detailed[val], 'min');
                    this.setState({
                        detail: detailed
                    })
                }
            }
                break;
            case 'plus': {
                detailed[val].qty = (Number(detailed[val].qty) + 1) + '';
                detailed[val].inTotal = this.calc(detailed[val], 'add');
                this.setState({
                    detail: detailed
                })
            }
                break;
            case 'delete': {
                const newArr = detailed.splice(val, 1);
                this.setState({
                    detail: newArr
                })
            }
                break;
        }
    }
    calc = (val, calledFrom) => {
        if (calledFrom === 'min') {
            const calculated = parseFloat(val.price.split('₹')[1]) * (Number(val.qty) - 1);
            return '₹' + calculated.toFixed(2);
        } else {
            const calculated = parseFloat(val.price.split('₹')[1]) * (Number(val.qty) + 1);
            return '₹' + calculated.toFixed(2);
        }
    }
    componentDidMount() {
        fetch('http://my-json-server.typicode.com/kvivek6164/fakePlaceholder/posts')
            .then(res => res.json())
            .then(data => {
                this.fetchData = data;
                this.setState({
                    detail: data
                })
            }
            )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filteredItem !== this.props.filteredItem) {
            let updatedList = this.fetchData.filter((item) => {
                if (item.product.toLowerCase().startsWith(this.props.filteredItem.toLowerCase())) {
                    return true;
                }
                return false
            });
            this.setState({
                detail: updatedList
            })
            if (this.props.filteredItem === '') {
                this.setState({
                    detail: this.fetchData
                })
            }
        }
    }

    hello = () => {
        console.log('>>>> hello')
        console.log(this.state.detail)
    }

    render() {
        return (
            <div>
                <button onClick={this.hello}>hello</button>
                <table className='table table-responsive table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.detail.map((item, index) => {
                            item['index'] = index;
                            item['inTotal'] = '₹ ' + (item.price.split('₹')[1] * Number(item.qty)).toFixed(2);
                            return <Row key={index} detail={item} onChange={this.handleClick} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export class Row extends Component {

    handleEdit = (val, e) => {
        this.props.onChange(val, e.target.name);
    }

    render() {
        const obj = this.props.detail;
        return (
            <tr>
                <td>{obj.index + 1}</td>
                <td>{obj.product}</td>
                <td>{obj.qty}</td>
                <td>{obj.inTotal}</td>
                <td>
                    <button style={{ 'marginRight': '10px' }} className={`btn btn-success btn-xs ` + obj.minus} name='minus' onClick={(e) => this.handleEdit(obj.index, e)}></button>
                    <button className={`btn btn-success btn-xs ` + obj.plus} name='plus' onClick={(e) => this.handleEdit(obj.index, e)}></button>
                </td>
                <td><button className={`btn btn-danger btn-xs ` + obj.delete} name="delete" onClick={(e) => this.handleEdit(obj.index, e)}></button></td>
            </tr>
        )
    }
}

export class newRow extends Component {
    render() {
        return(
            <form></form>
        )
    }
}


ListView.propTypes = {
    abc: PropTypes.string
}