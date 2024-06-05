
import styles from "./Input.module.css"

import plus from "../assets/plus.svg"

export function Input() {
    return(
        <div className={styles.wrapper}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button>Criar
                <img src={plus} alt="" />
            </button>
        </div>
    )
}