import "./AddTaskForm.css"

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg "
              placeholder="Add Your Tasks " style={{fontSize:"18px"}}
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn"
            >Add Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;