import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../origins.json";
import TableRow from "../../tableLayout/tableRow";

const ChildhoodHome = props => {
	const roll = rollDice(1, 100) + props.mod;
	let result;
	if (roll > 110) {
		result = jsonData["Childhood_Home"][9];
	} else if (roll > 90) {
		result = jsonData["Childhood_Home"][8];
	} else if (roll > 70) {
		result = jsonData["Childhood_Home"][7];
	} else if (roll > 50) {
		result = jsonData["Childhood_Home"][6];
	} else if (roll > 40) {
		result = jsonData["Childhood_Home"][5];
	} else if (roll > 30) {
		result = jsonData["Childhood_Home"][4];
	} else if (roll > 20) {
		result = jsonData["Childhood_Home"][3];
	} else if (roll > 0) {
		result = jsonData["Childhood_Home"][2];
	} else {
		result = jsonData["Childhood_Home"][1];
	}

	return <TableRow category="Childhood Home" roll={roll} result={result} />;
};

export default ChildhoodHome;
