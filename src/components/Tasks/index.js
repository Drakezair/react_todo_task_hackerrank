import React from "react";
import "./index.css";
import useTasks from "../../hooks/useTask";

function Tasks() {
  const {
    tasks,
    task,
    priority,
    handleTaskChange,
    handlePriorityChange,
    handleAddTask,
    handleDeleteTask,
  } = useTasks();

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-task-name"
          className="large mx-8"
          placeholder="Task Title"
          type="text"
          value={task}
          onChange={handleTaskChange}
        />
        <input
          data-testid="input-task-priority"
          className="large mx-8"
          value={priority}
          placeholder="Task Priority"
          type="number"
          onChange={handlePriorityChange}
        />
        <button onClick={handleAddTask} data-testid="submit-button">
          Add Task
        </button>
      </section>
      <div className="card w-40 pt-30 pb-8 mt-20">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody data-testid="tasksList">
            {tasks.map(({ task, priority }, index) => (
              <tr>
                <td>{task}</td>
                <td>{priority}</td>
                <td>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
