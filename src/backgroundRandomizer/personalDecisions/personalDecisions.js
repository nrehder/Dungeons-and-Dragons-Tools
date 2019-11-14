import React from "react";

import TableHeader from "../tableLayout/tableHeader";
import TableRow from "../tableLayout/tableRow";

import rollDice from "../../diceRoller";
import jsonData from "./personalDecisions.json";

const PersonalDecisions = props => {
	const charBackRoll = rollDice(1, 6);
	const classRoll = rollDice(1, 6);
	return (
		<div className="w-80 table-margin">
			<h1>Personal Decisions</h1>
			<TableHeader />
			<TableRow
				category="Character Background"
				roll={charBackRoll}
				result={
					jsonData["Character_Background"][props.background][
						charBackRoll
					]
				}
			/>
			<TableRow
				category="Class Training"
				roll={classRoll}
				result={
					jsonData["Character_Class"][props.characterClass][classRoll]
				}
			/>
		</div>
	);
};

export default PersonalDecisions;
