import React from "react";
import { MdCheckCircle, MdCheckCircleOutline, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoBox = styled.div`
	background-color: rgb(255 255 255);
	border-radius: 1rem;
	width: 20rem;
	height: 20rem;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	text-align: center;
`;

const IconBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 5rem;
	font-size: 1.875rem;
	line-height: 2.25rem;
	margin-top: 6rem;
`;

function Todo({ todo, onRemove, handleCompleteClick }) {
	const { id, title, content, checked } = todo;

	let navigate = useNavigate();

	function moveDetail() {
		navigate(`/detail/${id}`);
	}

	return (
		<TodoBox>
			<div className="m-4 text-3xl font-bold">{title}</div>
			<div className="m-8 text-xl">{content}</div>
			<button onClick={moveDetail}>상세페이지</button>
			<div>
				{checked ? (
					<IconBox>
						<MdCheckCircle
							className="text-green-500"
							onClick={() => {
								handleCompleteClick(todo);
							}}
						/>
						<MdDelete
							className="text-red-500"
							onClick={() => {
								onRemove(todo);
							}}
						/>
					</IconBox>
				) : (
					<IconBox>
						<MdCheckCircleOutline
							className="text-gray-500"
							onClick={() => {
								handleCompleteClick(todo);
							}}
						/>
						<MdDelete
							className="text-red-500"
							onClick={() => {
								onRemove(todo);
							}}
						/>
					</IconBox>
				)}
			</div>
		</TodoBox>
	);
}

export default Todo;
