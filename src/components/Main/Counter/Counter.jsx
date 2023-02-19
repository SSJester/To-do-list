import React from 'react';
import { connect } from 'react-redux';
import style from './Counter.module.css';

const Counter = (props) => {

    const CompletedCounter = props.tasks.reduce((completedTasks, task) => {
        if(task.isChecked) {
            completedTasks += 1;
        }
        return completedTasks;
    }, 0);
    let gradientPercents = 0;
    props.tasks.length !== 0 ? gradientPercents = 100 * CompletedCounter / props.tasks.length : gradientPercents = 0;
    return (
        <div className={style.textBody} style={{ backgroundImage: `linear-gradient(to right, gold ${gradientPercents}%,  #fff 0%)` }}>
            <p><span className={style.numbers}>{CompletedCounter}</span> of <span className={style.numbers}>{props.tasks.length}</span> tasks done</p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    tasks: state.todolist.tasks,
});

const CounterContainer = connect(mapStateToProps, {})(Counter);

export default CounterContainer;