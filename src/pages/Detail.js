import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Layout from "../components/layout/Layout";

const DetailWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

const DetailContent = styled.div`
	width: 640px;
	height: 400px;
	font-size: 2rem;
	padding: 3rem;
	border: 1px solid #eeeeee;
	border-radius: 1rem;
	background: white;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

function Detail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const todos = useSelector((state) => state.todos);

	const todoList = todos.find((todo) => {
		return todo.id === +id;
	});

	function moveHome() {
		navigate("/");
	}

	return (
		<Layout>
			<DetailWrapper>
				<DetailContent>
					<div className="font-bold">{todoList.title}</div>
					<div className="text-2xl">{todoList.content}</div>
					<button
						className="border-2 p-2 border-gray-200 rounded-xl mt-36 text-lg shadow-xl hover:bg-green-500 hover:text-white"
						onClick={moveHome}
					>
						돌아가기
					</button>
				</DetailContent>
			</DetailWrapper>
		</Layout>
	);
}

export default Detail;
