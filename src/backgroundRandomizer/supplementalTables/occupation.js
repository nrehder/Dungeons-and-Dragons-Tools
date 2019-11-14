import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./supplementalTables.json";

class Occupation extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 100);
		let result;
		if (roll > 75) {
			result = Math.ceil(roll / 5) - 4;
		} else if (roll > 60) {
			result = 11;
		} else if (roll > 55) {
			result = 10;
		} else if (roll > 43) {
			result = 9;
		} else if (roll > 38) {
			result = 8;
		} else if (roll > 36) {
			result = 7;
		} else if (roll > 31) {
			result = 6;
		} else if (roll > 26) {
			result = 5;
		} else if (roll > 11) {
			result = 4;
		} else if (roll > 10) {
			result = 3;
		} else {
			result = Math.ceil(roll / 5);
		}

		this.setState({
			roll,
			text: jsonData["Occupation"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Occupation Randomizer:</h3>
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

export default Occupation;
