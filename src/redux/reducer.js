const initialState = { tasks: [] }

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case 'AddTask':
        return {...state, tasks: [...state.tasks, action.payload]}
    case 'UpdateTask':
        return {...state, tasks: state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)}
    case 'DeleteTask':
        return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
    default:
        return state;
  }
}