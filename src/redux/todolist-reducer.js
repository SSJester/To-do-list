const ADD_TASK = 'ADD_TASK';
const ADD_NEW_TEXT = 'ADD_NEW_TEXT';
const DELETE_TASK = 'DELETE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
const SAVE_EDIT_TASK = 'SAVE_EDIT_TASK';
const IS_COMPLETED = 'IS_COMPLETED';
const REMOVE_COMPLETED_TASKS = 'REMOVE_COMPLETED_TASKS';
const CANCEL_TASK_CHANGING = 'CANCEL_TASK_CHANGING';

let initialState = {
    tasks: [
        { id: 1, text: "Do smth first", isChecked: true, isEdit: false },
        { id: 2, text: "Do smth second", isChecked: false, isEdit: false },
        { id: 3, text: "Do smth third", isChecked: false, isEdit: false },
    ],
    newTaskText: "",
    editedTaskText: "",
    counter: 3,
    isEmptyString: false,
};

const todolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            {
                if(state.newTaskText.trim() === "") {
                    return {
                        ...state,
                        newTaskText: "",
                        isEmptyString: true,
                    }
                } else {
                    const newCounter = state.counter + 1;
                    const newTask = {
                        id: newCounter,
                        text: state.newTaskText,
                        isChecked: false,
                        isEdit: false,
                    };
                    return {
                        ...state,
                        newTaskText: "",
                        counter: newCounter,
                        tasks: [...state.tasks, newTask],
                        isEmptyString: false,
                    }
                } 
            }
        case ADD_NEW_TEXT: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return { ...task, isEdit: false, }
                }),
                newTaskText: action.newText,
                isEmptyString: false,
            }
        }
        case DELETE_TASK: {
            const newTasks = state.tasks.filter(task => task.id !== action.taskId);
            return {
                ...state,
                tasks: newTasks,
                newTaskText: "",
            }
        }
        case EDIT_TASK: {
            const editTask = state.tasks.map(task => {  
                return task.id === action.taskId ?
                    { ...task, isEdit: true } :
                    { ...task, isEdit: false };                  
            });
            const editedTaskText = state.tasks.find(task => {
                return task.id === action.taskId;
            });
            return {
                ...state,
                editedTaskText: editedTaskText.text,
                tasks: editTask,
                newTaskText: "",                
            }
        }
        case EDIT_TASK_TEXT: {
            return {
                ...state,
                editedTaskText: action.editedTaskText,
            }
        }
        case CANCEL_TASK_CHANGING: {
            const editTask = state.tasks.map(task => {
                if (task.id === action.taskId) {
                    return { ...task, isEdit: false };
                }
                return task;
            });
            return {
                ...state,
                tasks: editTask,
                editedTaskText: "",
            }
        }
        case SAVE_EDIT_TASK: {
            if (state.editedTaskText.trim() === "") {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    tasks: state.tasks.map(task => {
                        if (task.id === action.taskId) {
                            return { ...task, isEdit: false, text: state.editedTaskText, }
                        }
                        return task;
                    }),
                    editedTaskText: "",
                }
            }
        }
        case IS_COMPLETED: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.taskId) {
                        return { ...task, isChecked: action.isCompleted }
                    }
                    return task;
                }),
            }
        }
        case REMOVE_COMPLETED_TASKS: {
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.isChecked),
                newTaskText: "",
            }
        }
        default:
            return state;
    }
}

export const addTaskAC = () => ({
    type: ADD_TASK,
});

export const addTextAC = (newText) => ({
    type: ADD_NEW_TEXT,
    newText,
});

export const deleteTaskAC = (taskId) => ({
    type: DELETE_TASK,
    taskId,
});

export const isEditTaskAC = (taskId) => ({
    type: EDIT_TASK,
    taskId,
});

export const editTaskTextAC = (editedTaskText) => ({
    type: EDIT_TASK_TEXT,
    editedTaskText,
});

export const saveEditTaskAC = (taskId) => ({
    type: SAVE_EDIT_TASK,
    taskId,
});

export const isCompletedTaskAC = (isCompleted, taskId) => ({
    type: IS_COMPLETED,
    isCompleted,
    taskId,
});

export const removeCompletedTasksAC = () => ({
    type: REMOVE_COMPLETED_TASKS,
});

export const cancelTaskCnangingAC = (taskId) => ({
    type: CANCEL_TASK_CHANGING,
    taskId,
});


export default todolistReducer;