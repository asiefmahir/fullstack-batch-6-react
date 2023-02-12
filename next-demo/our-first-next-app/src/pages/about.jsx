import { useState } from "react";
import { Nav } from "@/components/Nav";

const About = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<Nav />
			<h2>Hello I am about Page</h2>
            <p>The value of the counter is {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>increase</button>
		</>
	);
};

export default About;
