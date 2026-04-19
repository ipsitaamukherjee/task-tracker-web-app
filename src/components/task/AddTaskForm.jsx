import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.css'

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: 'AddTask',
      payload: {
        id: Date.now(),
        title,
        completed: false
      }
    });

    setTitle('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;