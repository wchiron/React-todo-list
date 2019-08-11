import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { NONAME } from 'dns';

export class TodoItem extends Component {
    getStyle = () => { // style a div with a method, good for flexible styling, eg item completed and not
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.everyTodo.completed ? // if the item is completed, there will be line-through. the code after the question mark means else, so if it's not completed, there will be no line-through
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.everyTodo; // this is the destructuring method, pulling out the id and the tile from the this.props.everyTodo and put then in the variable. So in the l21,instead of writing bind(this.props.everyTodo.id), we could just write (this,id) to pass the id of every todo item from the Todos.js l7
        
        return ( //using style tage to bind style to this div, set up the style above. {''} in the input line is just to add a space between the checkbox and the text of the todo item for a better look. If the check box is ticked, markComplete function will be trigger to change that item's completed to true. Howevery, since the list of items are in app.js, so we can't just change the status of the state in the component. To change the status of the item, we should pass it with props, to pass the markComplete to Todos, then pass from Todos to the app.js. The id of the item which clicked will be passed also with the bind(this, id), so the markComplete function will know which one to change in the array of items according to the id that passed. Same logic for the delete button
            <div style={this.getStyle()}> 
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '} 
                { title }
                <button onClick={this.props.delTodo.bind(this,id)} style={closeBtnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// Proptypes
TodoItem.prototypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const closeBtnStyle = {
    background: '#ffffff',
    color: '#292E2D',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '5px',
    padding: '1px',
    width: '20px',
    height: '20px',
}
export default TodoItem
