import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"
import './styles.css'

export default function Sidebar() {
    const { filter, setFilter } = useContext(TaskContext)
    return (
        <aside className='sidebar'>
            <h3>Filter</h3>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('pending')}>Pending</button>
        </aside>
    )
}
