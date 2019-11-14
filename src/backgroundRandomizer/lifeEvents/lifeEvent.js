import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./lifeEvents.json";

const LifeEvent = props => {
	const roll = rollDice(1, 100);
	let event;
	if (roll < 51) {
		event = Math.ceil(roll / 10);
	} else if (roll < 71) {
		event = 6;
	} else if (roll < 76) {
		event = 7;
	} else if (roll < 81) {
		event = 8;
	} else if (roll < 86) {
		event = 9;
	} else if (roll < 91) {
		event = 10;
	} else if (roll < 96) {
		event = 11;
	} else if (roll < 100) {
		event = 12;
	} else {
		event = 13;
	}
	return (
		<p>
			{roll}: {jsonData["Life_Events"][event]}
		</p>
	);
};

export default LifeEvent;
