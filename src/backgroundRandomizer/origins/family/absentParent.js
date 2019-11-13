import React from "react";
import rollDice from "../../randomizers/diceRoller";
import jsonData from "../origins.json";
import deathData from "../../randomizers/otherTables.json";

const AbsentParent = () => {
	const roll = rollDice(1, 4);
	const absentParent = [
		<h3 key="absent_title">Absent Parent:</h3>,
		<p key="absent_reason">
			{roll}: {jsonData["Absent_Parent"][roll]}
		</p>,
	];

	if (roll === 1) {
		const deathRoll = rollDice(1, 12);
		absentParent.push(<h4 key="absent_cause_title">Cause of Death:</h4>);
		absentParent.push(
			<p key="absent_case">
				{deathRoll}: {deathData["Cause_Of_Death"][deathRoll]}
			</p>
		);
	}
	return absentParent;
};

export default AbsentParent;
