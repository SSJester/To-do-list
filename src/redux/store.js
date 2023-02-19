import { combineReducers, legacy_createStore as createStore } from "redux";
import todolistReducer from "./todolist-reducer";

let reducers = combineReducers({
    todolist: todolistReducer,
});

let store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store;