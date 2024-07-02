import { PlusCircle } from "@phosphor-icons/react";
import styles from "./TaskBar.module.css";

type TaskListProps = {
  addTask: () => void;
  updateInputTask: (value: string) => void;
};

export function TaskBar(props: TaskListProps) {
  return (
    <div className={styles.formAddTask}>
      <input
        onChange={(e) => props.updateInputTask(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={() => props.addTask()} type="button">
        <p>Criar</p>{" "}
        <PlusCircle className={styles.iconButton} size={16} weight="bold" />
      </button>
    </div>
  );
}
