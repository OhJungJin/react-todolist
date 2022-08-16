import React, { useState } from "react";
import Todo from "../todo/Todo";

const List = ({ todos, onCheckDone, onRemove }) => {
	return (
		<div className="flex-1 m-4 p-6 h-auto bg-gray-50 shadow-lg">
			<div className="text-3xl font-bold">To do 🏃</div>
			<div className="m-8 flex flex-wrap gap-10 justify-start">
				{todos
					.filter((todo) => todo.checked == true)
					.map((todo) => (
						<Todo
							todo={todo}
							key={todo.id}
							onCheckDone={onCheckDone}
							onRemove={onRemove}
						/>
					))}
			</div>
			<div className="text-3xl font-bold">Done 🧍</div>
			<div className="m-8 flex flex-wrap gap-10 justify-start line-through">
				{todos
					.filter((todo) => todo.checked == false)
					.map((todo) => (
						<Todo
							todo={todo}
							key={todo.id}
							onCheckDone={onCheckDone}
							onRemove={onRemove}
						/>
					))}
			</div>
		</div>
	);
};

export default List;
