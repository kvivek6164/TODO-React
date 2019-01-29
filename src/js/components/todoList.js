import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
// import TodoList from './todo'
import { VisibilityFilters } from '../actions'

// const getVisibleTodos = (todos, filter) => {
//   console.log('getvisible todos', todos, filter)
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }
class TodoList extends Component {
    render() {
        console.log('fetched>>>>>', this.props)
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <li key={index}>{todo.text}</li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return state;
}
// ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(TodoList)

