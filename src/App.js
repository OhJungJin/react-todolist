import TodoList from "./pages/TodoList";
import Detail from "./pages/Detail";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<TodoList />}></Route>
			<Route path="/detail/:id" element={<Detail />}></Route>
		</Routes>
	);
}

export default App;
