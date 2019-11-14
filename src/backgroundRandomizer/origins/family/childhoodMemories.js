import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../origins.json";

const ChildhoodMemories = props => {
	const roll = rollDice(3, 6);

	const modifiedRoll = roll + +props.chaMod;
	let result;
	if (modifiedRoll > 17) {
		result = 7;
	} else if (modifiedRoll > 15) {
		result = 6;
	} else if (modifiedRoll > 12) {
		result = 5;
	} else if (modifiedRoll > 8) {
		result = 4;
	} else if (modifiedRoll > 5) {
		result = 3;
	} else if (modifiedRoll > 3) {
		result = 2;
	} else {
		result = 1;
	}
	return [
		<h3 key="childhood_memories">Childhood Memories:</h3>,
		<p key="childhood_memories_result">
			{roll}: {jsonData["Childhood_Memories"][result]}
		</p>,
	];
};

export default ChildhoodMemories;
