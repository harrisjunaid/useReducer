import {useState} from 'react';

export default function AddTask({handleAddTask}) {
  console.log("in AddTaks:");
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTask(text);
          setText('');
        }}>
        Add
      </button>
    </>
  );
}
