import { FormEvent, useState } from "react";

import styles from "./Tasks.module.css"

import { Task } from "./Task";
import { NoTasks } from "./NoTasks";
import { TaskType } from "../App";

interface tasksListPros {
    tasksList: TaskType[]
    checkedTask: (task: TaskType) => void
    deleteTask: (taskId: number) => void
}

export function Tasks({tasksList , checkedTask, deleteTask}:tasksListPros) {

    const checkedCount = tasksList.filter((item) => item.checked).length;

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.tasks}>
                    <p>Tarefas criadas</p>
                    <span>{tasksList.length}</span>
                </div>
                <div className={styles.completed}>
                    <p>Concluidas</p>
                    <span>{tasksList.length > 0 ? `${checkedCount} de ${tasksList.length}` : 0}</span>
                </div>
            </div>
            <div className={styles.container}>
                {tasksList.length > 0 ? tasksList.map(task => {return(<Task key={task.id} task={task} checkedTask={checkedTask} deleteTask={deleteTask}/>)}) : <NoTasks/> }               
            </div>
        </>
    )
}