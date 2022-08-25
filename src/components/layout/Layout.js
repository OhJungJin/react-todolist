import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
	width: 100vw;
	height: 100vh;
	max-height: 100%;
	max-width: 1200px;
	min-width: 80px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const Layout = ({ children }) => {
	return (
		<>
			{/* <div className="w-screen h-screen max-h-[100%] min-w-[80px] max-w-[1200px] absolute left-1/2 -translate-x-1/2"> */}
			<StyledLayout>{children}</StyledLayout>
			{/* </div> */}
		</>
	);
};

export default Layout;
