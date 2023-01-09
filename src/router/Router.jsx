import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import TodoDetails from "../pages/TodoDetails";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />

			<Route path="/about" element={<About />} />
			<Route
				loader={({ params }) => {
					return fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
				}}
				path="/todo-details/:todoId"
				element={<TodoDetails />}
			/>

			<Route
				path="*"
				element={<div>There is no page found at this path</div>}
			/>
		</>
	)
);
