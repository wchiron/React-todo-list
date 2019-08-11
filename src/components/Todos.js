import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((everyTodo) => ( // retaking the state from the app.js to loop through the loop, by using map (similar to v-for in Vue.js) to show each element in the props. receiving markComplete from TodoItem.js when a item's checkbox is clicked. we need to pass the function in the props to be able to pass it from TodoItem to App.js
            <TodoItem key={everyTodo.id} everyTodo={everyTodo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

// Proptypes
Todos.prototypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
export default Todos;

