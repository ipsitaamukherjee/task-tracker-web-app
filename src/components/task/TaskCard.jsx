import { useDispatch } from 'react-redux';
import './styles.css'

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const isDisabled = task.completed ? true : false;
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <button className="update-button" disabled={isDisabled} onClick={() => dispatch({ type: 'UpdateTask', payload: task.id})}>
        {task.completed ? 'Completed' : 'Complete'}
      </button>
      <button className="cancel-button" disabled={isDisabled} onClick={() => dispatch({ type: 'DeleteTask', payload: task.id })}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;