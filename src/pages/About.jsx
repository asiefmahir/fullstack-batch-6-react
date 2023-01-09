import React from "react";
import {Link} from 'react-router-dom'
import AbouSection from "../components/AbouSection";

const About = () => {
	return (
		<div>
			<h1>I am About Page</h1>
            <AbouSection />
			<Link to={"/"}>Go to Home page</Link>
		</div>
	);
};

export default About;