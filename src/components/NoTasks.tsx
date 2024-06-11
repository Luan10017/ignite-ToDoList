import styles from "./NoTasks.module.css"

import clipboard from "../assets/Clipboard.svg";

export function NoTasks() {
    return (
        <div className={styles.no_task}>
            <img src={clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}