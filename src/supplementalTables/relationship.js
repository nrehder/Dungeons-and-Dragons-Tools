import React from "react";
import rollDice from "../randomizers/diceRoller";
import jsonData from "./supplementalTables.json";

class Relationship extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(3, 4);
		let result;
		if (roll > 4 && roll < 11) {
			result = 2;
		} else if (roll < 5) {
			result = 1;
		} else {
			result = 3;
		}

		this.setState({
			roll,
			text: jsonData["Relationship"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Relationship Randomizer:</h3>
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

export default Relationship;
