import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todos",
	initialState: [
		{
			id: 1,
			title: "운동",
			content: "밤 10시에 운동하기",
			checked: true,
		},
		{
			id: 2,
			title: "공부",
			content: "javascript 복습하기",
			checked: true,
		},
		{
			id: 3,
			title: "산책",
			content: "아침에 일어나서 산책가기",
			checked: false,
		},
	],
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: Date.now(),
				title: action.payload.title,
				content: action.payload.content,
				completed: false,
			};
			state.push(newTodo);
		},
	},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
