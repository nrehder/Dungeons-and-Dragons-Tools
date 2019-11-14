import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../origins.json";
import deathData from "../../otherTables.json";
import TableRow from "../../tableLayout/tableRow";

const AbsentParent = () => {
	const roll = rollDice(1, 4);
	const absentParent = [
		<TableRow
			key="absent_parent"
			category="Absent Parent"
			roll={roll}
			result={jsonData["Absent_Parent"][roll]}
		/>,
	];

	if (roll === 1) {
		const deathRoll = rollDice(1, 12);
		absentParent.push(
			<TableRow
				key="dead_parent"
				category="Cause of Death"
				roll={deathRoll}
				result={deathData["Cause_Of_Death"][deathRoll]}
			/>
		);
	}
	return absentParent;
};

export default AbsentParent;
