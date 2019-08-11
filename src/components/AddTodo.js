import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
export class AddTodo extends Component {
    state = {  // like data in Vue.js
        title: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title); // get the value of the input, and pass it as props so App.js can receive it
        this.setState({ title: ''}); // clear the input area
    }
    // onChange = (e) => this.setState({ title: e.target.value }); // The reason using the line below instead of this line is because, when having several inputs at the same time, like name, email, we will have to create an onChange event for each one, so replace title with an array, as long as e.target.name, name correspond with the name in line 21, this will work. It would also allow to monitor several inputs with just one onChange code
    onChange = (e) => this.setState({ [e.target.name]: e.target.value }); // e.title.name, the 'name' has to be the same as the name='title' in line14
    render() {
        return (  // template
            <form onSubmit={this.onSubmit} style={addTodoArea}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px', textAlign: 'center'}} 
                    placeholder="What needs to be done ?" 
                    value={this.state.title} // link the value to the title in the state in line 6 to pass the input value
                    onChange={this.onChange} // when the value changes, activate the onChange function. 
                />

                <input 
                    type="submit" 
                    value="submit" 
                    className="btnAdd" 
                    style={{flex: 1}}
                />
            </form>
        )
    }
}

// component style
const addTodoArea = {
    display: 'flex',
    color: '#A78585',
    textAlign:'center',

}

// Proptypes
AddTodo.prototypes = {
    addTodo: PropTypes.func.isRequired
} 
export default AddTodo
