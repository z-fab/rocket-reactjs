import styles from "./App.module.css";
import { TaskBar } from "./components/TaskBar/TaskBar";
import { TaskList } from "./components/TaskList/TaskList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function App() {
  type Task = {
    id: string;
    content: string;
    isComplete: boolean;
  };

  const [inputTask, setInputTask] = useState("");

  const [taskList, setTasks] = useState<Task[]>([]);

  function updateInputTask(value: string) {
    setInputTask(value);
  }

  function addTask() {
    if (!inputTask) return;
    const newTask = {
      id: uuidv4(),
      content: inputTask,
      isComplete: false,
    };
    setInputTask("");
    setTasks([...taskList, newTask]);
  }

  return (
    <main>
      <header>
        <h1>Logo Header</h1>
      </header>

      <section className={styles.content}>
        <TaskBar addTask={addTask} updateInputTask={updateInputTask} />
        <TaskList taskList={taskList} setTasks={setTasks} />
      </section>
    </main>
  );
}
