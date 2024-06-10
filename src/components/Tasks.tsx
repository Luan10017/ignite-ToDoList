
import styles from "./Tasks.module.css"

import clipboard from "../assets/Clipboard.svg";
import { Task } from "./Task";

export function Tasks() {
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
                <Task/>
                <div className={styles.no_task}>
                    <img src={clipboard} alt="" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </>
    )
}