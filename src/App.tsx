
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from "./App.module.css";

import './global.css'
import { Tasks } from "./components/Tasks";

export function App() {

  return (
    <div>
      <Header/>
      <Input/>

      <Tasks/>      

    </div>
  )
}
