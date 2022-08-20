import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
	switch (action.type) {
		case addToDo.type:
			return [{ text: action.text, id: Date.now() }, ...state];
		case deleteToDo.type:
			return state.filter((toDo) => toDo.id !== action.id);
		default:
			return state;
	}
};

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
