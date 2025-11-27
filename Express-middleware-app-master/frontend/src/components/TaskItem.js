import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div>
      <p>{task.text}</p>
    </div>
  );
};

export default TaskItem;
