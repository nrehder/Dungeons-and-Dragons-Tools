import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./supplementalTables.json";

class Class extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 100);
		let result;
		if (roll < 8) {
			result = 1;
		} else if (roll < 15) {
			result = 2;
		} else if (roll < 30) {
			result = 3;
		} else if (roll < 37) {
			result = 4;
		} else if (roll < 53) {
			result = 5;
		} else if (roll < 59) {
			result = 6;
		} else if (roll < 65) {
			result = 7;
		} else if (roll < 71) {
			result = 8;
		} else if (roll < 85) {
			result = 9;
		} else if (roll < 90) {
			result = 10;
		} else if (roll < 95) {
			result = 11;
		} else {
			result = 12;
		}

		this.setState({
			roll,
			text: jsonData["Class"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Class Randomizer:</h3>
				<button onClick={this.rollAgain}>Randomize</button>
				{this.state.roll > 0 ? (
					<p>
						{this.state.roll}: {this.state.text}
					</p>
				) : null}
			</div>
		);
	}
}

export default Class;
