import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// const AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => input = node} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

const mapDispatchToProps = {
    addTodo
};
class AddTodo extends Component {
    render() {
        let input;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.addTodo(input.value)
                    // dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                    <input ref={node => input = node} />
                    <button type="submit">
                        Add Todo
                </button>
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)