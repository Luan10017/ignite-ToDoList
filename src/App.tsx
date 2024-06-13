
import { Header } from "./components/Header";
import { Input } from "./components/Input";


import './global.css'
import { Tasks } from "./components/Tasks";
import { useState } from "react";

export interface TaskType {
  id: number
  content: string
  checked: boolean
}

export function App() {

  const [tasksList, setTasks] = useState<TaskType[]>([])

  function createTask(inputTask: TaskType) {
    setTasks([...tasksList, inputTask])
  }

  function checkedTask(changedTask: TaskType) {
    const tasksListWithoutChangedTask = tasksList.filter( ({id}) => id !== changedTask.id )

    setTasks([...tasksListWithoutChangedTask, changedTask])
  }

  function deleteTask(deletedTaskId: number) {
    const tasksListWithoutDeletedTask = tasksList.filter(({id}) => id !== deletedTaskId)

    setTasks(tasksListWithoutDeletedTask)
  }

  return (
    <div>
      <Header/>
      <Input createTask={createTask}/>

      <Tasks tasksList={tasksList} checkedTask={checkedTask} deleteTask={deleteTask}/>      

    </div>
  )
}
