import {useState, useEffect} from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    console.log("in handleChangeTask");
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  /**
   * @description filters other tasks to seTask setter function
   * @param {number} taskId 
   */
  function handleDeleteTask(taskId) {
    console.log("in handleDeleteTask");
    setTasks(tasks.filter((t) => t.id !== taskId));
    /**
     * below code is not giving proper output here
     console.log("updated tasks:");
     console.log(tasks);
     * 
     */
  }
  useEffect(()=>{console.log("in useEffect:");console.log(tasks);},[tasks]);

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
}

const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
let nextId = initialTasks.length;
