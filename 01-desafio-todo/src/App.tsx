import styles from './App.module.css'

export function App() {
  return (
    <main>
      <h1>Header</h1>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <h2>Tasks</h2>
        </div>

        <div className={styles.tasksList}>
          <h2>List</h2>

        </div>

      </section>
    </main>
  )
}
