import React, { useState } from "react";
import Todo from "./Todo";

const HomeCenter = ({ setIsTask, todos, id }) => {
  return (
    <div className="center">
      <div className="row">
        <h1>Today</h1>
        <h3>5</h3>
      </div>

      <div className="task_container">
        <div className="add_task" onClick={() => setIsTask(true)}>
          <span className="material-symbols-outlined icon">add</span>
          <p>Add New Task</p>
        </div>

        {!id && <a href="/login">login</a>}
        {id && <a href="/">logout</a>}

        {todos.map((todo) => (
          <Todo todo={todo} key={todo?._id} />
        ))}
      </div>
    </div>
  );
};

export default HomeCenter;
