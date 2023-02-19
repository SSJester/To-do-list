import React from 'react';
import TaskContainer from './Task/Task';
import style from './Tasks.module.css';

const Tasks = (props) => {
    let tasksElements = props.tasks
        .map(task => <TaskContainer key={task.id} editedTaskText={props.editedTaskText} task={task} />)
    return (
        <div className={style.container}>
            {tasksElements.length !== 0 ? tasksElements : <div className={style.completedAllTasks}>You did all tasks</div>}
        </div>
    )
};

export default Tasks;