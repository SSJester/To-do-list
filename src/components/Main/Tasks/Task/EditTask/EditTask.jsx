import React from 'react';
import { connect } from 'react-redux';
import { cancelTaskCnangingAC, editTaskTextAC, saveEditTaskAC } from 'redux/todolist-reducer';
import style from './EditTask.module.css';


const EditTask = (props) => {
    
    const saveTask = () => {
        props.saveEditTaskAC(props.task.id);
    }

    const changeText = (event) => {
        const text = event.target.value;
        props.editTaskTextAC(text, props.task.id);
    }

    const cancelTaskChange = () => {
        props.cancelTaskCnangingAC(props.task.id);
    }

    return (
        <div className={style.container}>
            <textarea className={style.textarea} onChange={changeText} placeholder="Enter your task"  value={props.editedTaskText}></textarea>
            <button className={style.button} onClick={cancelTaskChange}>x</button>
            <button className={style.button} onClick={saveTask}>+</button>
        </div>
    )
};


const EditTaskContainer = connect(null, { editTaskTextAC, saveEditTaskAC, cancelTaskCnangingAC })(EditTask);

export default EditTaskContainer;