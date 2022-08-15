import React, { useRef, useState } from "react";

function Todo() {
	const no = useRef(1);
	const [todo, setTodo] = useState([]);

	const onDelete = (id) => {
		setTodo(todo.filter((todo) => todo.id !== id));
	};

	const onToggle = (id) => {
		setTodo(
			todo.map((item) =>
				item.id === id ? { ...item, check: !item.check } : item
			)
		);
	};

	const onAdd = (text) => {
		setTodo([
			...todo,
			{
				id: no.current++,
				text,
				check: false,
			},
		]);
	};
	return <div></div>;
}

export default Todo;
