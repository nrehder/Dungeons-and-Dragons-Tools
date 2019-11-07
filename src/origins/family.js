import React from "react";
import rollDice from "../randomizers/diceRoller";
import AbsentParent from "./family/absentParent";

const familyResultFn = roll => {
	if (roll > 75) {
		return "Mother and father";
	} else if (roll > 55) {
		return "Single mother or stepmother";
	} else if (roll > 35) {
		return "Single father or stepfather";
	} else if (roll > 25) {
		return "Adoptive family (same or different race)";
	} else if (roll > 15) {
		return "Paternal or maternal grandparent(s)";
	} else if (roll > 7) {
		return "Paternal or maternal aunt, uncle or both; or extended family such as a tribe or clan";
	} else if (roll > 5) {
		return "Guardian";
	} else if (roll > 3) {
		return "Orphanage";
	} else if (roll === 3) {
		return "Temple";
	} else if (roll === 2) {
		return "Institution, such as an asylum";
	} else {
		return "None";
	}
};

const Family = () => {
	const familyRoll = rollDice(1, 100);
	const familyResult = [<h3 key="family_title">Family:</h3>];

	familyResult.push(<p key="family_result">{familyResultFn(familyRoll)}</p>);
	if (familyRoll < 76)
		familyResult.push(<AbsentParent key="absent_parent_container" />);

	return familyResult;
};

export default Family;
