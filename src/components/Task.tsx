import styles from "./Task.module.css"

import dump from "../assets/Layer 2.svg";
import { TaskType } from "../App";
import { ChangeEvent } from "react";

interface TaskProps {
    task: TaskType;
    checkedTask: (task:TaskType) => void
    deleteTask: (taskId:number) => void
}

export function Task({task, checkedTask, deleteTask}: TaskProps) {

    function handlerCheckButtom(event: ChangeEvent<HTMLInputElement>) {
        const eventCheckedStatus = event.target.checked
        checkedTask({...task, checked: eventCheckedStatus})
    }

    function handlerDeleteTask(taskId: number) {
        deleteTask(taskId)
    }

    const checkedTaskStyle = {
        textDecoration: task.checked ? 'line-through' : 'none',
        color: task.checked ? 'var(--gray-300)' : 'var(--gray-100)'
      }

    return (
        <div className={styles.container}>
            <input 
                type="checkbox" 
                onChange={handlerCheckButtom}
                id={task.id.toString()}
                checked={task.checked}
            />
            <span></span>
            <p style={checkedTaskStyle}>{task.content}</p>
            <img src={dump} onClick={() => handlerDeleteTask(task.id)} />
        </div>
    )
}