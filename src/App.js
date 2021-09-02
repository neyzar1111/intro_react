import React, { useState, useRef, useEffect } from 'react';
import HeaderWithButton from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {

    const [tasks,setTasks] = useState([
        {
            id:1,
            text: "Make a exercise",
            day: 'Aug 31 at 8:00pm',
            reminder:true,
            checked: false,
        },
        {
            id:2,
            text: "Make a yoga",
            day: 'Aug 31 at 8:00pm',
            reminder:true,
            checked: false,

        },
        {
            id:3,
            text: "Read book",
            day: 'Aug 31 at 8:00pm',
            reminder:false,
            checked:false
        }
    ]);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTasks(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])
    const addTask = (task) =>{
        console.log(task)
        const id=Math.floor(Math.random()*10000)+1;
        const newTask = {id, ...task};
        setTasks([...tasks,newTask])
    }

    const checkTask = (chOrNot,id) =>{
        setTasks(tasks.map(task=> task.id === id ? {...task, checked:!task.checked}:task))
    }

    const clearTask = (e)=>{
        e.preventDefault();
        setTasks(tasks.filter((task)=>task.checked !== true))
    }
  return (
      <div>
          <HeaderWithButton />
          <Form onAdd={addTask} clear={clearTask}  />
          <Tasks tasks={tasks} checkTask={checkTask} />
      </div>

  );
}

export default App;
