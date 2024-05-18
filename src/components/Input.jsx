import { useState } from "react";

const Input = ({taskList, setTaskList})=>{
    const [input, setInput] = useState("")

    const handleAddTask = (e) =>{
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }
    return(
        <>
       <form>
        <input className="border rounded px-2" type="text" placeholder="Add a Task" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button className="bg-violet-400 text-white py-2 px-3.5 rounded-lg" onClick={handleAddTask}>Add</button>
       </form>

        </>
    )
}
export default Input;