import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./lifeEvents.json";
import TableRow from "../tableLayout/tableRow";

const LifeEvent = props => {
	const roll = rollDice(1, 100);
	let result;
	if (roll < 51) {
		result = jsonData["Life_Events"][Math.ceil(roll / 10)];
	} else if (roll < 71) {
		result = jsonData["Life_Events"][6];
	} else if (roll < 76) {
		result = jsonData["Life_Events"][7];
	} else if (roll < 81) {
		result = jsonData["Life_Events"][8];
	} else if (roll < 86) {
		result = jsonData["Life_Events"][9];
	} else if (roll < 91) {
		result = jsonData["Life_Events"][10];
	} else if (roll < 96) {
		result = jsonData["Life_Events"][11];
	} else if (roll < 100) {
		result = jsonData["Life_Events"][12];
	} else {
		result = jsonData["Life_Events"][13];
	}
	return (
		<TableRow
			category={"Life Event " + (props.index + 1)}
			roll={roll}
			result={result}
		/>
	);
};

export default LifeEvent;
