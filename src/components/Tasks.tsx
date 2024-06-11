import styles from "./Tasks.module.css"

import { Task } from "./Task";
import { NoTasks } from "./NoTasks";

export function Tasks() {

    const tasks = 0

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.tasks}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.completed}>
                    <p>Concluidas</p>
                    <span>0</span>
                </div>
            </div>
            <div className={styles.container}>
                {tasks > 0 ? <NoTasks/> : <Task/>}               
            </div>
        </>
    )
}