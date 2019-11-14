import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../origins.json";
import TableRow from "../../tableLayout/tableRow";

const ChildhoodMemories = props => {
	const roll = rollDice(3, 6);

	const modifiedRoll = roll + +props.chaMod;
	let result;
	if (modifiedRoll > 17) {
		result = jsonData["Childhood_Memories"][7];
	} else if (modifiedRoll > 15) {
		result = jsonData["Childhood_Memories"][6];
	} else if (modifiedRoll > 12) {
		result = jsonData["Childhood_Memories"][5];
	} else if (modifiedRoll > 8) {
		result = jsonData["Childhood_Memories"][4];
	} else if (modifiedRoll > 5) {
		result = jsonData["Childhood_Memories"][3];
	} else if (modifiedRoll > 3) {
		result = jsonData["Childhood_Memories"][2];
	} else {
		result = jsonData["Childhood_Memories"][1];
	}
	return (
		<TableRow category="Childhood Memories" roll={roll} result={result} />
	);
};

export default ChildhoodMemories;
