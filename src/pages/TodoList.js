import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useSelector } from "react-redux";

let nextId = 4;

function TodoList() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	// const [todos, setTodos] = useState([
	// 	{
	// 		id: 1,
	// 		title: "운동",
	// 		content: "밤 10시에 운동하기",
	// 		checked: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "공부",
	// 		content: "javascript 복습하기",
	// 		checked: true,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "산책",
	// 		content: "아침에 일어나서 산책가기",
	// 		checked: true,
	// 	},
	// ]);

	const onRemove = (id) => {
		todos((todos) => todos.filter((todo) => todo.id !== id));
	};

	const onInsertTodo = ({ ...values }) => {
		var title = values.title;
		var content = values.content;

		dispatch(
			addTodo({
				id: nextId,
				title,
				content,
				checked: true,
				// content: val
			})
		);

		if (title == "" || content == "") {
			return alert("빈칸을 입력해주세요.");
		} else {
			const todo = {
				id: nextId,
				title,
				content,
				checked: true,
			};
			todos((todos) => todos.concat(todo));
			nextId++;
		}
	};

	const onCheckDone = (id) => {
		todos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
			)
		);
	};

	return (
		<>
			<Layout>
				<Header />
				<Form onInsertTodo={onInsertTodo} />
				<List todos={todos} onCheckDone={onCheckDone} onRemove={onRemove} />
			</Layout>
		</>
	);
}

export default TodoList;
