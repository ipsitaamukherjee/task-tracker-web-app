import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"
import './styles.css'

export default function Sidebar() {
    const { filter, setFilter } = useContext(TaskContext)
    return (
        <aside className='sidebar'>
            <h3>Filter</h3>
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
            <button
                className={filter === 'pending' ? 'active' : ''}
                onClick={() => setFilter('pending')}
            >
                Pending
            </button>
        </aside>
    )
}