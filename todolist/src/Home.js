import React, { Component } from "react";
import { TodoData } from "./ToDoData";
import AddTodo from "./AddTodo";
import Todos from "./Todo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = TodoData;
  }

  handleAddTodo = (getItem, currentList) => {
    currentList.push(getItem);
    this.setState({ newlist: currentList });
  };

  handleToggleTodo = (getTodo) => {
    const updateDone = !getTodo.done;
    getTodo.done = updateDone;
    this.setState(getTodo);
  };

  render() {
    let d = new Date();
    let day = new Array(7);
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";

    let n = day[d.getDay()];
    let todo;
    if (n === "Monday") {
      todo = (
        <Todos
          todolists={this.state.TodoList1}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList1;
    } else if (n === "Tuesday") {
      todo = (
        <Todos
          todolists={this.state.TodoList2}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList2;
    } else if (n === "Wednesday") {
      todo = (
        <Todos
          todolists={this.state.TodoList3}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList3;
    } else if (n === "Thursday") {
      todo = (
        <Todos
          todolists={this.state.TodoList4}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList4;
    } else if (n === "Friday") {
      todo = (
        <Todos
          todolists={this.state.TodoList5}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList5;
    } else if (n === "Saturday") {
      todo = (
        <Todos
          todolists={this.state.TodoList6}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList6;
    } else if (n === "Sunday") {
      todo = (
        <Todos
          todolists={this.state.TodoList7}
          updateTodo={this.handleToggleTodo}
        />
      );
      this.currentList = this.state.TodoList7;
    }
    console.log('Home view')
    return (
      <div className="App">
        <h1>
          <span className="d-flex justify-content-center text-warning">
            {n}'s
          </span>
          Todo List
        </h1>
        {todo}
        <AddTodo addItem={this.handleAddTodo} currentList={this.currentList} />
      </div>
    );
  }
}

export default Home;
