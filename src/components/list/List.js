import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";

const Box = styled.div`
	flex: 1 1 0%;
	margin: 1rem;
	padding: 1.5rem;
	height: auto;
	background-color: rgb(249 250 251);
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const SubTitle = styled.div`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 700;
`;

const TodoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2.5rem;
	justify-content: flex-start;
	margin: 2rem;
	${(props) =>
		props.false &&
		`
			text-decoration-line: line-through;
		`}
`;

const List = ({ todos, onRemove, handleCompleteClick }) => {
	return (
		<Box>
			<SubTitle>To do 🏃</SubTitle>
			{/* <div className="m-8 flex flex-wrap gap-10 justify-start"> */}
			<TodoWrapper>
				{todos
					.filter((todo) => todo.checked == true)
					.map((todo) => (
						<Todo
							todo={todo}
							key={todo.id}
							handleCompleteClick={handleCompleteClick}
							onRemove={onRemove}
						/>
					))}
			</TodoWrapper>
			<SubTitle>one 🧍</SubTitle>
			<TodoWrapper false>
				{todos
					.filter((todo) => todo.checked == false)
					.map((todo) => (
						<Todo
							todo={todo}
							key={todo.id}
							handleCompleteClick={handleCompleteClick}
							onRemove={onRemove}
						/>
					))}
			</TodoWrapper>
		</Box>
	);
};

export default List;
