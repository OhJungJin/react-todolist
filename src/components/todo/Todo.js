import React from "react";
import { MdCheckCircle, MdCheckCircleOutline, MdDelete } from "react-icons/md";

function Todo({ todo, onRemove, handleCompleteClick }) {
	const { title, content, checked } = todo;
	return (
		<div className="bg-white rounded-2xl w-80 h-80 shadow-xl text-center">
			<div className="m-4 text-3xl font-bold">{title}</div>
			<div className="m-8 text-xl">{content}</div>
			<div className="">
				{checked ? (
					<div className="text-3xl mt-36 flex justify-center gap-20">
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
					</div>
				) : (
					<div className="text-3xl mt-36 flex justify-center gap-20">
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
					</div>
				)}
			</div>
		</div>
	);
}

export default Todo;
