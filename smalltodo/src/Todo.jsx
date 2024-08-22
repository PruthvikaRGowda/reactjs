import React, { useState } from 'react'

function Todo() {
    const [tasks,setTasks]=useState([])
    const [input,setInput]=useState("")
    const [editId,setEditId]=useState(null)

    //TO ADD THE TAKS
    const addTask=()=>{
        if(!input.trim()){
            alert("Write your task befor adding")
        }else{
            //CREATEING THE OJECT TO ADD TASK
            if(!editId)
            {
                let obj={
                    task:input,
                    id:Math.trunc(Math.random()*1000)
                }
                setTasks([...tasks,obj])
                //TO CLEAR THE INPUT WHATEVER WE ENTER LAST INPUT
                setInput("")
            }
            else{
                let newTasks = tasks.map(ele => {
                    if(ele.id == editId){
                        ele.task=input
                    }return ele
                })
                setTasks(newTasks)
                setInput("")
                setEditId(null)
            }
        }
    }

    //TO DELETE THE TASK WHICH ARE ADDED
    const deleteTask=(id)=>{
        let newTasks=tasks.filter(ele => ele.id !=id)
        setTasks(newTasks)
    }

    //TO EDIT THE TASK 
    const editTask = (id) => {
       setEditId(id)
       let editTask=tasks.find(ele => ele.id == id)
       setInput(editTask.task)
    }

  return (
    <>
    
        <div className="inputs">
            <input type="text"
            placeholder='Write your task here.....' value={input} 
            onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addTask}>{editId?"UPDATE":"ADD"}</button>
        </div>

        <div className="tasks">
        {tasks.map((e) => {
    return ( <div className='task'>
        <h4>{e.task}</h4>
        <div className='buttons'>
            <button id='del' onClick={()=>deleteTask(e.id)}>DEL</button>
            <button id='edit' onClick={()=>editTask(e.id)}>EDIT</button>
        </div>
    </div>)
})}
        </div>
    </>
  )
}

export default Todo