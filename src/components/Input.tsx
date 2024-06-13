
import styles from "./Input.module.css"

import plus from "../assets/plus.svg"
import { ChangeEvent, FormEvent, useState } from "react"
import { TaskType } from "../App"

interface InputProps {
    createTask: (text: TaskType) => void
}

export function Input({createTask}:InputProps) {

    const [newInputText, setNewInputText] = useState('')

    function handlerCreateTask(event: FormEvent) {
        event.preventDefault()

        const randomId = Math.round(Math.random() * 100000)

        createTask({
            id: randomId,
            content: newInputText,
            checked: false
        })
        setNewInputText('')
    }

    function handlerNewInputText(event: ChangeEvent<HTMLInputElement>) {
        setNewInputText(event.target.value)
    }

    return(
        <form onSubmit={handlerCreateTask} className={styles.wrapper}>
            <input 
                onChange={handlerNewInputText} 
                name="input-task" 
                value={newInputText} 
                type="text" 
                placeholder="Adicione uma nova tarefa
            "/>
            <button>Criar
                <img src={plus} alt="" />
            </button>
        </form>
    )
}