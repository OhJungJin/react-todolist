import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

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
	// console.log(todos);
	return (
		<>
			<Layout>
				<Header />
				<Form />
				<List todos={todos} />
			</Layout>
		</>
	);
}

export default TodoList;
