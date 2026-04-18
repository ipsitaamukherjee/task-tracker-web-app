export default function AddTaskAction(tasks) {
    return {
        type: 'AddTask',
        payload: tasks
    }
}

export default function UpdateTaskAction(tasks) {
    return {
        type: 'UpdateTask',
        payload: tasks
    }
}

export default function DeleteTaskAction(tasks) {
    return {
        type: 'DeleteTask',
        payload: tasks
    }
}