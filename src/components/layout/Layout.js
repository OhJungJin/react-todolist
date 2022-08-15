import React from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";

const Layout = ({ children }) => {
	return (
		<>
			<div className="w-screen h-screen max-w-[1200px]">
				<main> {children} </main>
			</div>
		</>
	);
};

export default Layout;
