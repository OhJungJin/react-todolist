import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

import { useDispatch } from "react-redux";
import { addTodo, toggleComplete, removeTodo } from "../redux/todoSlice";
import { useSelector } from "react-redux";

let nextId = 4;

function TodoList() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	const onInsertTodo = ({ ...values }) => {
		var title = values.title;
		var content = values.content;

		if (title == "" || content == "") {
			return alert("빈칸을 입력해주세요.");
		} else {
			dispatch(
				addTodo({
					id: nextId,
					title,
					content,
					checked: true,
				})
			);
			nextId++;
		}
	};

	const onRemove = (todo) => {
		dispatch(removeTodo({ id: todo.id }));
	};

	const handleCompleteClick = (todo) => {
		dispatch(
			toggleComplete({
				id: todo.id,
				checked: todo.checked,
			})
		);
	};

	return (
		<>
			<Layout>
				<Header />
				<Form onInsertTodo={onInsertTodo} />
				<List
					todos={todos}
					handleCompleteClick={handleCompleteClick}
					onRemove={onRemove}
				/>
			</Layout>
		</>
	);
}

export default TodoList;
