import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "./secondary.json";

class Punishment extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 12);
		let result;
		if (roll < 7) {
			result = Math.ceil(roll / 3);
		} else if (roll < 9) {
			result = 3;
		} else {
			result = 4;
		}

		this.setState({
			roll,
			text: jsonData["Punishment"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Punishment Randomizer:</h3>
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

export default Punishment;
