import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

type TaskProps = {
  id: string;
  content: string;
  isComplete: boolean;
  completeTask: (id: string) => void;
  removeTask: (id: string) => void;
};

export function Task(props: TaskProps) {
  return (
    <div className={props.isComplete ? styles.taskCompleted : styles.taskTodo}>
      <button
        onClick={() => props.completeTask(props.id)}
        className={styles.check}
      >
        {props.isComplete ? (
          <CheckCircle size={24} weight="fill" />
        ) : (
          <Circle size={24} weight="bold" />
        )}
      </button>
      <p>{props.content}</p>
      <button
        onClick={() => props.removeTask(props.id)}
        className={styles.trash}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
