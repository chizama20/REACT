import { useState } from "react";

function Card(){
    const [task, setTask] = useState(["apple", "orange"]);


    function handleTask(){
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";
        setTask(t => [...t, newTask]);
    }

    function removeTask(index){
        setTask(task.filter((_, i) => i !== index));
    }

    function shiftUp(){
        
    }
    function shiftUp(){

    }

    return(

        <div>
            <h1>To-Do-List</h1>
            <div>
                <input  id="taskInput" type="text" placeholder="Enter a task..."></input>
                <button onClick={handleTask}>Add</button>
            </div>

            <div>
                <ol>
                    {task.map((task, index) => 
                        <li key={index} >
                            {task} <button onClick={() => removeTask(index)}> Delete</button>  
                                    <button onClick={() => shiftUp()}>⬆️</button>  
                                    <button onClick={() => shiftDown()}>⬇️</button>
                        </li>)}

                </ol>
            </div>

        </div>
    )
}

export default Card