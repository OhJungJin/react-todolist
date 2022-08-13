import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

const Layout = () => {
	return (
		<div className="w-screen h-screen max-w-[1200px]">
			<Header />
			<Form />
			<List />
		</div>
	);
};

export default Layout;
