import React from "react";

function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={Boolean(task.status)}
          onChange={(e) => setTaskStatus(task.id, e.target.checked)}
        />
        <button
          onClick={(e) => removeTask(task.id)}
          className="btn-action btn-action-delete"
        >
          ✕
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
