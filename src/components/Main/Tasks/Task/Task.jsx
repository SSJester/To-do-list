import React from 'react';
import { connect } from 'react-redux';
import { deleteTaskAC, isCompletedTaskAC, isEditTaskAC } from 'redux/todolist-reducer';
import EditTaskContainer from './EditTask/EditTask';
import style from './Task.module.css';

const Task = (props) => {

    const isCompletedTask = (event) => {
        props.isCompletedTaskAC(event.target.checked, props.task.id);
    }

    const isEditTask = () => {
        props.isEditTaskAC(props.task.id);
    }

    const deleteTask = () => {
        props.deleteTaskAC(props.task.id);
    }

    return (
        <div>
            { props.task.isEdit ?
            <EditTaskContainer editedTaskText={props.editedTaskText} task={props.task}/> :
            <div className={style.container}>
                <div className={style.taskBox}>
                    <input onChange={isCompletedTask} checked={props.task.isChecked} className={style.checkbox} type="checkbox"></input>
                    <span className={style.text}>{props.task.text}</span>
                </div>
                <div className={style.buttons}>
                    <button onClick={isEditTask} className={style.edit}></button>
                    <button onClick={deleteTask} className={style.delete}></button>
                </div>
            </div>
            }              
        </div>
    )
};

const mapDispatchToProps = {
    deleteTaskAC,
    isEditTaskAC,
    isCompletedTaskAC,
};

const TaskContainer = connect(null, mapDispatchToProps)(Task);

export default TaskContainer;