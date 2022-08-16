import React, { useRef, useState } from "react";
import {
	MdCheckCircle,
	MdCheckBoxOutlineBlank,
	MdDelete,
} from "react-icons/md";

function Todo({ todo, onCheckDone, onRemove }) {
	const { id, title, content, checked } = todo;
	return (
		<div className="border-2 w-80 h-80">
			<div>{content}</div>
			<div className={`content ${checked ? "checked" : ""}`}>
				{checked ? (
					<div className="flex text-red-800 text-xl">
						<MdCheckCircle
							onClick={() => {
								onCheckDone(id);
							}}
						/>
						<MdDelete
							className="text-orange-50"
							onClick={() => {
								onRemove(id);
							}}
						/>
					</div>
				) : (
					<div>
						<MdCheckBoxOutlineBlank
							onClick={() => {
								onCheckDone(id);
							}}
						/>
						<MdDelete
							onClick={() => {
								onRemove(id);
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default Todo;
