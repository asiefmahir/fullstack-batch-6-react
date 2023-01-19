import {memo} from "react";

function Button({ handler}) {
    console.log('Button being rendered');

	return <button onClick={handler}>
        Increase
    </button>;
}

export default memo(Button);
