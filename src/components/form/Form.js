import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

function Form({ onInsertTodo }) {
	const [values, setValues] = useState({
		title: "",
		content: "",
	});

	// const dispatch = useDispatch();

	const { title, content } = values;

	const onChange = (e) => {
		const { value, name } = e.target;
		setValues(
			{
				...values,
				[name]: value,
			},
			[values]
		);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// dispatch(
		// 	addTodo({
		// 		title: value,
		// 	})
		// );
		onInsertTodo(values);
		setValues({
			title: "",
			content: "",
		});
	};

	return (
		<div className="m-4 p-6 bg-gray-50 shadow-lg">
			<form className="flex items-center" onSubmit={onSubmit}>
				{/* <div className="flex items-center gap-5	"> */}
				<label> 제목 </label>
				<input
					className="m-4 border-2 outline-2 outline-green-500 hover:border-green-500 rounded-lg"
					type="text"
					name="title"
					onChange={onChange}
					value={title}
				/>
				<label> 내용 </label>
				<input
					className="m-4 border-2 outline-2 outline-green-500 hover:border-green-500 rounded-lg"
					name="content"
					onChange={onChange}
					value={content}
				/>
				<button
					type="submit"
					className="align-items p-3 ml-auto border-2  bg-gray-50 hover:text-white hover:bg-green-500 shadow-md rounded-2xl"
				>
					등록하기
				</button>
				{/* </div> */}
			</form>
		</div>
	);
}

export default Form;
