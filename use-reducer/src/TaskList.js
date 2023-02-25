import {useState} from 'react';

export default function TaskList({tasks, handleChangeTask, handleDeleteTask}) {
  console.log("in TaskList:");
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={handleChangeTask} onDelete={handleDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
/**
 * 
 * @param {object} task - task object from tasks array
 * @param {handleChangeTask} onChange - function from parent App
 * @param {handleDeleteTask} onDelete - function from parent App
 * @returns 
 */
function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
