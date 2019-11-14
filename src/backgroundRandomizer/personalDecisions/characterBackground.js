import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./personalDecisions.json";
import TableRow from "../tableLayout/tableRow";

const CharacterBackground = props => {
	const roll = rollDice(1, 6);

	return (
		<TableRow
			category="Character Background"
			roll={roll}
			result={jsonData["Character_Background"][props.background][roll]}
		/>
	);
};

export default CharacterBackground;
