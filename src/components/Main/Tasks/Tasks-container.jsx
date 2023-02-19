import React from 'react';
import { connect } from "react-redux";
import { addTaskAC } from 'redux/todolist-reducer';
import Tasks from './Tasks';

const TasksContainer = (props) => {
    return (
        <div>
            <Tasks editedTaskText={props.todolist.editedTaskText} tasks={props.todolist.tasks} />
        </div>
    )
};

let mapStateToProps = (state) => ({
    todolist: state.todolist,
});

let mapDispatchToProps = {
    addTaskAC,
};


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);