import React from "react";

function List() {
	return (
		<div className="flex-1 p-5 overflow-auto bg-slate-200">
			<div>To do 🏃</div>
			<div className="m-8 flex flex-wrap gap-3 center">
				<div className="border-4 border-pink-500	rounded-xl w-80 h-40"> hi </div>
				<div className="border-4 border-pink-500	rounded-xl w-80 h-40"> hi </div>
				<div className="border-4 border-pink-500	rounded-xl w-80 h-40"> hi </div>
			</div>
			<div>Done 🧍</div>
			<div className="m-8 flex flex-wrap gap-3 center">
				<div className="border-4 border-pink-500	rounded-xl w-80 h-40"> hi </div>
				<div className="border-4 border-pink-500	rounded-xl w-80 h-40"> hi </div>
				<div className="border-4 border-pink-500	rounded-xl w-80 h-40"> hi </div>
			</div>
		</div>
	);
}

export default List;
