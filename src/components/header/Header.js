import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
	margin: 1rem;
	padding: 1.5rem;
	height: 4rem;
	background-color: rgb(249 250 251);
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

function Header() {
	return (
		<>
			{/* <div className="m-4 p-6 h-16 bg-gray-50 shadow-lg"> */}
			{/* tail wind css는 주석 처리(Styled components 연습) */}
			<StyledHeader>
				<h1>Todo List</h1>
			</StyledHeader>
			{/* </div> */}
		</>
	);
}

export default Header;
