import React from "react";
import "./index.css";

function Tasks() {

    return (
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <input data-testid="input-task-name" className="large mx-8"
                       placeholder="Task Title"/>
                <input data-testid="input-task-priority" className="large mx-8"
                       placeholder="Task Priority"/>
                <button data-testid="submit-button">Add Task</button>
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
                            <tr>
                                <td>Task</td>
                                <td>1</td>
                                <td><button className="danger">Delete</button></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tasks