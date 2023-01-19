import {memo} from "react";

function Counter({ content }) {
    console.log('Counter being rendered');

	return <p>The Value of the counter is {content}</p>;
}

export default memo(Counter);
