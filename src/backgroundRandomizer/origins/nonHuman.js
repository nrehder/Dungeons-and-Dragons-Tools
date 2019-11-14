import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./origins.json";
import TableRow from "../tableLayout/tableRow";

const NonHuman = props => {
	let roll = rollDice(1, 8);

	return (
		<TableRow
			category={props.race + " Parents"}
			roll={roll}
			result={jsonData[props.race][roll]}
		/>
	);
};

export default NonHuman;
