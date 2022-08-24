import React from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const todos = useSelector((state) => state.todos);

	return <div>detail page</div>;
}

export default Detail;
