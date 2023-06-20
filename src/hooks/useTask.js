import { useEffect, useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleAddTask = () => {
    if (!task || !priority)
      window.alert("Please enter both title and task priority");
    setTasks(
      [...tasks, { task, priority }].sort((a, b) => a.priority - b.priority)
    );
    setTask("");
    setPriority("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return {
    tasks,
    task,
    priority,
    handleTaskChange,
    handlePriorityChange,
    handleAddTask,
    handleDeleteTask,
  };
}
