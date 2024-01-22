import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

type Task = {
  id: string;
  content: string;
  isComplete: boolean;
};

type TaskListProps = {
  taskList: Task[];
  setTasks: (tasks: Task[]) => void;
};

export function TaskList(props: TaskListProps) {
  function completeTask(id: string) {
    console.log(id);
    const updatedTasks = props.taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }

      return task;
    });

    props.setTasks(updatedTasks);
  }

  function removeTask(id: string) {
    const updatedTasks = props.taskList.filter((task) => task.id !== id);

    props.setTasks(updatedTasks);
  }

  return (
    <div className={styles.tasksList}>
      <div className={styles.tasksInfo}>
        <p className={styles.numberTask}>
          Tarefas criadas <span>{props.taskList.length}</span>
        </p>
        <p className={styles.numberComplete}>
          Concluídas{" "}
          <span>
            {props.taskList.reduce((acc, task) => {
              return task.isComplete ? acc + 1 : acc;
            }, 0)}{" "}
            de {props.taskList.length}
          </span>
        </p>
      </div>
      <div className={styles.tasksContainer}>
        {props.taskList.length > 0 ? (
          props.taskList.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              isComplete={task.isComplete}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          ))
        ) : (
          <EmptyTask />
        )}
        {}
      </div>
    </div>
  );
}
