import React from "react";
import rollDice from "../randomizers/diceRoller";
import LifeEvent from "./lifeEvent";

const eventsDice = age => {
	if (age > 60) {
		return 12;
	} else if (age > 50) {
		return 10;
	} else if (age > 40) {
		return 8;
	} else if (age > 30) {
		return 6;
	} else if (age > 20) {
		return 4;
	} else {
		return 1;
	}
};

const LifeEvents = props => {
	const diceMax = eventsDice(props.age);
	const numEvents = rollDice(1, diceMax);
	console.log(diceMax);
	console.log(numEvents);

	const eventsResults = [];

	for (let i = 0; i < numEvents; i++) {
		eventsResults.push(<LifeEvent key={i} />);
	}
	return (
		<div>
			<h1>Life Events</h1>
			{eventsResults}
		</div>
	);
};

export default LifeEvents;
