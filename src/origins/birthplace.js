import React from "react";
import rollDice from "../randomizers/diceRoller";

const Birthplace = () => {
	let roll = rollDice(1, 100);
	let result;
	if (roll === 100) {
		result = <p>On an Outer Plane of your choice.</p>;
	} else if (roll === 99) {
		result = <p>On an Inner Plane of your choice.</p>;
	} else if (roll === 98) {
		result = <p>On the Astral Plane or the Etheral Plane.</p>;
	} else if (roll === 97) {
		result = <p>In the Shadowfell.</p>;
	} else if (roll === 96) {
		result = <p>In the Feywild.</p>;
	} else if (roll === 95 || roll === 94) {
		result = <p>In a sage's laboratory.</p>;
	} else if (roll === 93 || roll === 92) {
		result = (
			<p>In a prison or in the headquarters of a secret organization.</p>
		);
	} else if (roll === 91 || roll === 90 || roll === 89) {
		result = <p>On board a boat or a ship.</p>;
	} else if (roll === 88 || roll === 87 || roll === 86) {
		result = <p>Among people of a different race.</p>;
	} else if (roll === 85) {
		result = <p>Sewer or rubbish heap.</p>;
	} else if (roll === 84 || roll === 83) {
		result = <p>Castle, keep, tower or palace.</p>;
	} else if (roll === 82 || roll === 81) {
		result = <p>Brothel, tavern, or inn.</p>;
	} else if (roll === 80 || roll === 79) {
		result = <p>Alley or street.</p>;
	} else if (roll === 78) {
		result = <p>Battlefield.</p>;
	} else if (roll === 77 || roll === 76 || roll === 75) {
		result = <p>Temple.</p>;
	} else if (roll === 74 || roll === 73) {
		result = <p>Forest.</p>;
	} else if (roll === 72 || roll === 71) {
		result = <p>Field.</p>;
	} else if (roll === 70 || roll === 69) {
		result = <p>Cave.</p>;
	} else if (roll === 68 || roll === 67 || roll === 66) {
		result = <p>Barn, shed, or other outbuilding.</p>;
	} else if (roll === 65 || roll === 64) {
		result = <p>Carriage, cart, or wagon.</p>;
	} else if (roll > 55) {
		result = <p>Home of a healer or midwife.</p>;
	} else if (roll > 50) {
		result = <p>Home of a family friend.</p>;
	} else {
		result = <p>Home.</p>;
	}

	return (
		<div>
			<h3>Birthplace:</h3>
			{result}
		</div>
	);
};

export default Birthplace;
