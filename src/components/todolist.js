import React, {useState} from 'react'

const ToDoList = () => {
    const [taskList, setTaskList] = useState([])
    const [inputTask, setInputTask] = useState("")
    return <div className="formbox">
        <form>
        <h1 className="title"> To Do List </h1>
            <h1> {taskList.map((task) => {
                const { id, inputTask } = task
                return <div className="items" key={id}>
                    <p className="tasks"> {inputTask} </p>
                </div>
            })} </h1>
            <input type="text" name="task" className="inputTask" value={inputTask} placeholder="Add a Task" onChange={ (e) => {
                setInputTask(e.target.value)
            }}/>
            <button type="submit" onClick={ (e) => {
                e.preventDefault()

                if (inputTask) {
                    const toDo = {
                        id: new Date().getTime().toString(),
                        inputTask
                    }
                    setTaskList((taskList) => {
                        return [...taskList, toDo]
                    })
                    setInputTask("")
                } else {
                    console.log(`Please try again.`)
                }

            }}> Add </button>
        </form>
    </div>

}

export default ToDoList