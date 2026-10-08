// Markér opgaver som færdige
// Lav en liste med tre opgaver. Tilføj en knap ved hver opgave, der skifter mellem “Ikke færdig” og “Færdig”.
// Hint: Gem status for hver opgave i state

import { useState } from "react"
import "./checklist.css"

export default function Checklist() {

    const [tasks, setTasks] = useState([
        { id: 1, text: 'Læse React-koden', done: false },
        { id: 2, text: 'Øve useState', done: false },
        { id: 3, text: 'Bygge en lille app', done: false },
    ])
    function toggleTask(taskId) {

        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                let newDoneStatus

                if (task.done === true) {
                    newDoneStatus = false
                } else {
                    newDoneStatus = true
                }
                // spread ...task og opdater værdien af done med newDoneStatus 
                return { ...task, done: newDoneStatus }
            }

            return task
        })

        setTasks(updatedTasks)
    }
    return (
        <section>
            <h2>Markér opgaver som færdige</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => toggleTask(task.id)}>
                            {task.done ? 'Færdig' : 'Ikke færdig'}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )

}