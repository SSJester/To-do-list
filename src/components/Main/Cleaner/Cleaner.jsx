import React from 'react';
import { connect } from 'react-redux';
import { removeCompletedTasksAC } from 'redux/todolist-reducer';
import style from './Cleaner.module.css';

const Cleaner = (props) => {
    
    const removeCompletedTasks = () => {
        props.removeCompletedTasksAC();
    }

    return (
        <div>
            <button onClick={removeCompletedTasks} className={style.cleanertBtn}>Remove checked</button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    tasks: state.todolist.tasks,
});

const CleanerContainer = connect(mapStateToProps, { removeCompletedTasksAC })(Cleaner);

export default CleanerContainer;