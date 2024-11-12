import { useState } from "react";
import "./StatesTutorial.scss";

const StatesTutorial = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>States</h1>
			<div>
                In this section, we will cover States, one of the most important aspects of React, since it allows us to make 
                our content dynamic.
                Let&apos;s use the following counter as an example
			</div>
			<h3>Counter</h3>
			<div className="states-counter">
				<button onClick={() => setCounter(counter - 1)}>-</button>
				{counter}
				<button onClick={() => setCounter(counter + 1)}>+</button>
			</div>
		</div>
	);
};

export default StatesTutorial;