import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Header from './components/siteLayout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios'; // it's a http library to replace the js http request such as fetch

const linkToAPIHeroku = "https://todo-list-api-wchiron.herokuapp.com";

class App extends Component {
  state = { // put the todos in the state/data in the app.js, so all the component files could have access to this state. Like data in the app in the components in Vue.jsß
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Feed the kitties',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Dinner with hubby',
      //   completed: false
      // },
    ]
  }

  componentDidMount() { //is invoked immediately after a component is mounted (inserted into the tree)
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5') // without the query parameter ?_limit=5, it will get the whole list of 200 todolist
    axios.get(linkToAPIHeroku + "/todo") // use the api on the port 3000 on my own laptop
      .then(res => this.setState({ todos: res.data })) // receive result from l25 in index.js, send the todos received from jsonplaceholder/api to the array
  }

  // toggle complete everyTodo
  markComplete = (id) => { // receive this markComplete through the props from TodoItem.js then Todos.js as the array of items are in this file. 
    const itemToToggle = this.state.todos.find( todo => todo.id === id);
    axios.patch(`${linkToAPIHeroku}/todo/${id}`, {
      completed: !itemToToggle.completed, //for the item of this id, toggle it's completed value in the database
    })
      .then(res => {
        this.setState({ todos: this.state.todos.map(todo => { //  setState updates a component’s state object. When state changes, the component responds by re-rendering.

          if(todo.id === id) { // check the id of the item equals the id that gets passed from the component, if yes, it means the item has been clicked and toggle the completed value
            todo.completed = res.data.completed;
            // return res.data; it's another way to do the line above
          }
          return todo;
        })})
      })
  }

  // delete todo, same logic as the markComplete, get the function through the props from TodoItem.js with id as parameter
  delTodo = (id) => {
    axios.delete(`${linkToAPIHeroku}/todo/${id}`) // using back ticks here instead of single quote to be able to use the dollar sign for the id
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  // add todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,  // this here actually means title: title. In ES6, if the title value equals title, can only write title all short
    //   completed: false,
    // }
    axios.post(linkToAPIHeroku + "/todo", {
      // id: uuid.v4(), // this is not working as jsonplacefolder will erase my id and replace it with 201, which is their id, that's the reason to change the id when receive the response
      title,
    })
      .then(res => {
        // res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => ( // adding exact means this route will only be showed when the path is / . Otherwise in the route path /about, it will also show the / path, as it will content with / path plus the content of /about.
              <React.Fragment>
                <div className="dotoBody">
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </div>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
