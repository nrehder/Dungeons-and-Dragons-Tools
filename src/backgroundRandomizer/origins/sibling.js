import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const Sibling = () => {
	let roll = rollDice(1, 5);
	return (
		<TableRow
			category="Siblings"
			roll={roll}
			result={jsonData["Siblings"][roll]}
		/>
	);
};

export default Sibling;
