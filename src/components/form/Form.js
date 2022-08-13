import React, { useState, useCallback } from "react";

function Form() {
	const [todos, setTodos] = useState({
		title: "",
		content: "",
	});

	const { title, content } = todos;

	const onChange = (e) => {
		const { value, name } = e.target;
		setTodos({
			...todos,
			[name]: value,
		});
	};

	const onSubmit = useCallback(
		(e) => {
			setTodos("");
			e.preventDefault();
		},
		[todos]
	);

	return (
		<div className="m-4 p-6 bg-slate-200">
			<form className="flex items-center" onSubmit={onSubmit}>
				<div className="flex items-center gap-5	">
					<label> 제목 </label>
					<input type="text" name="title" onChange={onChange} value={title} />
					<label> 내용 </label>
					<input name="content" onChange={onChange} value={content} />
				</div>
				<button type="submit" className="align-items ml-auto ">
					등록하기
				</button>
			</form>
		</div>
	);
}

export default Form;
