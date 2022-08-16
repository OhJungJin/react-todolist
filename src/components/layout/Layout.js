import React from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";

const Layout = ({ children }) => {
	return (
		<>
			<div className="w-screen h-screen max-h-[100%] min-w-[80px] max-w-[1200px] absolute left-1/2 -translate-x-1/2">
				{" "}
				{children}{" "}
			</div>
		</>
	);
};

export default Layout;
