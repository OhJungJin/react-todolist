import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

let nextId = 4;

function TodoList() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: "할일 1",
			content: "운동",
			checked: true,
		},
		{
			id: 2,
			title: "할일 2",
			content: "공부",
			checked: true,
		},
		{
			id: 3,
			title: "할일 3",
			content: "산책",
			checked: true,
		},
	]);

	const onRemove = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	const onInsertTodo = ({ ...values }) => {
		var title = values.title;
		var content = values.content;

		if (title == "" || content == "") {
			return alert("빈칸을 입력해주세요.");
		} else {
			const todo = {
				id: nextId,
				title,
				content,
				checked: true,
			};
			setTodos((todos) => todos.concat(todo));
			nextId++;
		}
		console.log(values);
	};

	const onCheckDone = (id) => {
		setTodos((todos) =>
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
