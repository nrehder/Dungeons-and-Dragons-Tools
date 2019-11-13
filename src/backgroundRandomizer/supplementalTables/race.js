import React from "react";
import rollDice from "../randomizers/diceRoller";
import jsonData from "./supplementalTables.json";

class Race extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 100);
		let result;
		if (roll < 41) {
			result = 1;
		} else if (roll < 71) {
			result = Math.ceil(roll / 10) - 3;
		} else {
			result = Math.ceil(roll / 5) - 10;
		}

		this.setState({
			roll,
			text: jsonData["Race"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Race Randomizer:</h3>
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

export default Race;
