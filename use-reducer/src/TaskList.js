import {useState} from 'react';
/**
 * 
 * @param {*} 
 * @description 
 * create a list of tasks
 * - calls: Task //decides output
 *  */
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
 * NOTE: EVERY TASK HAS A SEPERATE STATE
 * @param {object} task - task object from tasks array
 * @param {handleChangeTask} onChange - function from parent App
 * @param {handleDeleteTask} onDelete - function from parent App
 * @returns 
 * @description 
 * to decide task output
 * - uses useState to check for edit option
 * - conditional taksContent: text, edit/save button //is linked with edit state
 *    if edit is true: taskContent is changed to input and button is "Save: -> toggle edit"
 *    if edit is false: taskContent is text and button is "Edit: -> toggle edit"
 * - renders
 *  -- checkbox, taskContent, delete 
 *   -- taskContent: text, edit button
 */
function Task({task, onChange, onDelete}) {
  const [edit, setEdit] = useState(false);
  let taskContent;
  if (edit) {
    console.log("edit is true");
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
        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    console.log("edit is false");
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setEdit(true)}>Edit</button>
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
