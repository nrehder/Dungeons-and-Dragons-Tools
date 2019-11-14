import React from "react";
import rollDice from "../../diceRoller";
import jsonData from "./supplementalTables.json";

class Status extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(3, 6);
		let result;
		if (roll > 8 && roll < 13) {
			result = 4;
		} else if (roll > 5 && roll < 9) {
			result = 3;
		} else if (roll > 12 && roll < 16) {
			result = 5;
		} else if (roll > 3 && roll < 6) {
			result = 2;
		} else if (roll > 15 && roll < 18) {
			result = 6;
		} else if (roll === 3) {
			result = 1;
		} else {
			result = 7;
		}

		this.setState({
			roll,
			text: jsonData["Status"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Status Randomizer:</h3>
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

export default Status;
