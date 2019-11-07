import React from "react";
import rollDice from "../randomizers/diceRoller";

const NonHuman = props => {
	let roll = rollDice(1, 8);
	let result = null;
	switch (props.race) {
		case "Half-Elf":
			if (roll === 8) {
				result = <p>Both parents were half-elves.</p>;
			} else if (roll === 7) {
				result = (
					<p>One parent was a human and the other was a half-elf.</p>
				);
			} else if (roll === 6) {
				result = (
					<p>One parent was an elf and the other was a half-elf.</p>
				);
			} else {
				result = (
					<p>One parent was an elf and the other was a human.</p>
				);
			}
			break;
		case "Half-Orc":
			if (roll === 8) {
				result = <p>Both parents were half-orcs.</p>;
			} else if (roll === 7 || roll === 6) {
				result = (
					<p>One parent was a human and the other was a half-orc.</p>
				);
			} else if (roll === 5 || roll === 4) {
				result = (
					<p>One parent was an orc and the other was a half-orc.</p>
				);
			} else {
				result = (
					<p>One parent was an orc and the other was a human.</p>
				);
			}
			break;
		case "Tiefling":
			if (roll === 8) {
				result = (
					<p>One parent was a human and the other was a devil.</p>
				);
			} else if (roll === 7) {
				result = (
					<p>One parent was a tiefling and the other was a devil.</p>
				);
			} else if (roll === 6 || roll === 5) {
				result = (
					<p>One parent was a tiefling and the other was a human.</p>
				);
			} else {
				result = (
					<p>
						Both parents were humans, their infernal heritage
						dormant until you came along.
					</p>
				);
			}
			break;
		default:
			return null;
	}
	return (
		<div>
			<h3>{props.race} Parents:</h3>
			{result}
		</div>
	);
};

export default NonHuman;
