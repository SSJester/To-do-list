import React from 'react';
import style from './InputTask.module.css';

const InputTask = (props) => {
    const placeholder = "Enter your task";
    const emptyPlaceholder = "Entry field is empty";
    const addPost = () => {
        props.addTaskAC();
    }

    const changeText = (event) => {
        const text = event.target.value;
        props.addText(text);
    }

    return (
        <div className={style.container}>
            <textarea className={style.textarea} onChange={changeText} placeholder={props.todolist.isEmptyString ? emptyPlaceholder : placeholder} value={props.todolist.newTaskText}></textarea>
            <button onClick={addPost} className={style.button}>+</button>
        </div>
    )
};

export default InputTask;