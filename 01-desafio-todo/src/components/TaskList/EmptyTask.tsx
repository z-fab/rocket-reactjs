import { ClipboardText } from "@phosphor-icons/react";
import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.emptyTask}>
      <ClipboardText size={56} weight="regular" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <sub>Crie tarefas e organize seus itens a fazer</sub>
    </div>
  );
}
