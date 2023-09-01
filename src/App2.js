import React, { useState } from "react"; // rfce
// remember: export at the end
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  // declare all states at the begining of component
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn React fundamental", status: 0 },
    { id: "task_2", title: "Code a Todo list - Level 2", status: 0 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(true);

  const [newTask, setNewTask] = useState("");

  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // render
  return (
    // dat states truc tiep vao trong element html
    // dat even handles truc tiep vao trong element html
    <div className="container">
      {/* components */}
      <Header title="Todo List" subTitle="Get things done" />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />
      <AddTaskForm
        newTask={newTask}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
