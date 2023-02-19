import React from 'react';
import CleanerContainer from './Cleaner/Cleaner';
import TasksContainer from './Tasks/Tasks-container';
import style from './Main.module.css';
import InputTaskContainer from './InputTask/InputTask-container';
import CounterContainer from './Counter/Counter';

const Main = (props) => {
    return (
        <div className={style.container}>
            <InputTaskContainer />
            <TasksContainer />
            <div className={style.counterCleaner}>
                <CounterContainer />
                <CleanerContainer />
            </div>
        </div>
    )
};

export default Main;