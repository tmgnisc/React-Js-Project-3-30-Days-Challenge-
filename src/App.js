import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";
function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>

    <div className="flex flex-col items-center justify-center">
      <h1>To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div>
        {taskList.map((task, index)=>
      <Board key={index}
      index={index}
       task={task}
       taskList={taskList}
       setTaskList={setTaskList}/>
        )}

    
      </div>
    </>
  );
}

export default App;
