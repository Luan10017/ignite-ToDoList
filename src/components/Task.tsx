import styles from "./Task.module.css"

import dump from "../assets/Layer 2.svg";

export function Task() {
    return (
        <div className={styles.container}>
            <input type="checkbox" />
            <span></span>
            <p>Exemplo de task dsagklfsdklhg fslk gklhsfdklg kldfs hlkghfs adssssssssssss</p>
            <img src={dump} alt="" />
        </div>
    )
}