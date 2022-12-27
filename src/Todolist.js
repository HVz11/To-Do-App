import React, { Components } from "react";
import Todo from "./Todo";

class TodoList extends Components {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk the fish" }, { task: "Groom Chikens" }],
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    <div>
      <h1>Todo Lis t!</h1>
      <ul>{todos}</ul>
    </div>;
  }
}

export default TodoList;
