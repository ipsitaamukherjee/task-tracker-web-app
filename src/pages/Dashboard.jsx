import AddTaskForm from '../components/task/AddTaskForm';
import TaskList from '../components/task/TaskList';
import './styles.css'

export default function Dashboard() {
    return (
        <>
          <AddTaskForm />
          <TaskList />
        </>
    )
}