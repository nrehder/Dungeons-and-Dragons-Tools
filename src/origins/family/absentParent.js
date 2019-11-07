import React from "react";
import rollDice from "../../randomizers/diceRoller";
import causeOfDeath from "../../randomizers/causeOfDeath";

const AbsentParent = () => {
	const absentParent = [<h3 key="absent_title">Absent Parent:</h3>];
	switch (rollDice(1, 4)) {
		case 1:
			absentParent.push(<p key="absent_death">Your parent died!</p>);
			absentParent.push(
				<h5 key="absent_cause_title">Cause of Death:</h5>
			);
			absentParent.push(<p key="absent_case">{causeOfDeath()}</p>);
			break;
		case 2:
			absentParent.push(
				<p key="absent_imprisoned">
					Your parent was imprisoned, enslaved or otherwise taken
					away.
				</p>
			);
			break;
		case 3:
			absentParent.push(
				<p key="absent_abandoned">Your parent abandoned you.</p>
			);
			break;
		default:
			absentParent.push(
				<p key="absent_unknown">
					Your parent disappeared to an unknown fate.
				</p>
			);
	}
	return absentParent;
};

export default AbsentParent;
