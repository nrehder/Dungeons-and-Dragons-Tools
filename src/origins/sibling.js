import React from "react";
import rollDice from "../randomizers/diceRoller";

const Sibling = () => {
	let result = [<h3 key="sibling_title">Siblings:</h3>];
	let roll = rollDice(1, 5);
	let siblingCount;
	switch (roll) {
		case 1:
			result.push(<p key="no_siblings">No Siblings</p>);
			break;
		case 2:
			siblingCount = rollDice(1, 3);
			break;
		case 3:
			siblingCount = rollDice(1, 4) + 1;
			break;
		case 4:
			siblingCount = rollDice(1, 6) + 2;
			break;
		default:
			siblingCount = rollDice(1, 8) + 3;
			break;
	}

	if (siblingCount > 0) {
		result.push(
			<p key="sibling_count">
				You have {siblingCount} sibling{siblingCount > 1 ? "s" : null}:
			</p>
		);
		let siblings = {
			older: 0,
			younger: 0,
			twin: 0,
		};
		for (let i = 0; i < siblingCount; i++) {
			let birthRoll = rollDice(2, 6);
			if (birthRoll >= 8) {
				siblings["younger"]++;
			} else if (birthRoll >= 3) {
				siblings["older"]++;
			}
			siblings["twin"]++;
		}
		result.push(
			<ul key="sibling_list">
				{siblings.older > 0 ? (
					<li key="older_siblings">
						You have {siblings.older} older sibling
						{siblings.older > 1 ? "s" : null}.
					</li>
				) : null}
				{siblings.younger > 0 ? (
					<li key="younger_siblings">
						You have {siblings.younger} younger sibling
						{siblings.younger > 1 ? "s" : null}.
					</li>
				) : null}
				{siblings.twin > 0 ? (
					<li key="twin_siblings">
						You have {siblings.twin} twin, triplet, etc.
					</li>
				) : null}
			</ul>
		);
	}
	return result;
};

export default Sibling;
