import {
	fetchPostSucceeded,
	fetchPostStart,
	fetchPostFailed,
    fetchTodoStart,
    fetchTodoSucceeded,
    fetchtodoFailed,
} from "../actions";

export const fetchPosts = async (dispatch) => {
	try {
		dispatch(fetchPostStart());

		const response = await fetch(
			`http://jsonplaceholder.typicode.com/posts`
		);
		const data = await response.json();
		dispatch(fetchPostSucceeded(data));
		// next(action)
		return;
	} catch (error) {
		dispatch(fetchPostFailed(error.message));
		return;
	}
};

export const fetchTodos = async (dispatch) => {
    try {
		dispatch(fetchTodoStart());

		const response = await fetch(
			`http://jsonplaceholder.typicode.com/todos`
		);
		const data = await response.json();
		dispatch(fetchTodoSucceeded(data));
		// next(action)
		return;
	} catch (error) {
		dispatch(fetchtodoFailed(error.message));
		return;
	}
}
