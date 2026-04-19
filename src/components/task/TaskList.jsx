import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const { filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;