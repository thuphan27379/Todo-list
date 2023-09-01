import React, { useState } from "react"; // rfce
// remember: export at the end
import "./App.css";

function App() {
  // declare states at the begining of component
  const [tasks, setTasks] = useState([
    //1
    { id: "task_1", title: "Learn React fundamental", status: 0 },
    { id: "task_2", title: "Code a Todo list - Level 2", status: 1 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(true);
  //2

  const [newTask, setNewTask] = useState("");
  //3

  // functions
  const handleSubmit = (e) => {
    //*4*
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
    //5
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    //6
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
    //7
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // render
  return (
    // dat states truc tiep vao trong element html
    // dat even handles truc tiep vao trong element html
    <div className="container">
      <h1 className="title">
        ToDo List <span>Get things done, one item at a time.</span>
      </h1>
      <ul className="task-list">
        {tasks //1
          .filter((task) => (showIncomplete ? task.status !== 1 : true))
          .map((task) => (
            <li key={task.id} className={task.status ? "done" : ""}>
              <span className="label">{task.title}</span>
              <div className="actions">
                <input
                  type="checkbox"
                  className="btn-action btn-action-done"
                  checked={Boolean(task.status)}
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)} //6
                />
                <button
                  onClick={(e) => removeTask(task.id)} //7
                  className="btn-action btn-action-delete"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" class="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete} //2
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
      <form onSubmit={handleSubmit} className="form">
        {/* 4 */}
        <label htmlFor="newitem">Add to the Todo list</label>
        <input
          type="text"
          id="newitem"
          value={newTask} //3
          onChange={handleInputChange} //5
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
