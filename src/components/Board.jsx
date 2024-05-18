const Board = ({ task, index, setTaskList, taskList }) => {
  const handleDelete = () => {
    let remove = taskList.indexOf(task);
    taskList.splice(remove, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === remove)
    );
  };
  return (
    <>
      <div>
        <p>{task}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};
export default Board;
