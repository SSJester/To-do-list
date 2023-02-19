import { connect } from 'react-redux';
import { addTaskAC, addTextAC } from 'redux/todolist-reducer';
import InputTask from './InputTask';

const mapStateToProps = (state) => ({
    todolist: state.todolist,
});

const mapDispatchToProps = {
    addText: addTextAC,
    addTaskAC,
};

let InputTaskContainer = connect(mapStateToProps, mapDispatchToProps)(InputTask)

export default InputTaskContainer;