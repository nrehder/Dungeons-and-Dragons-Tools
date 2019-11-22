import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "./secondary.json";

class Adventures extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 100);
		let result;
		if (roll < 91) {
			result = Math.ceil(roll / 10);
		} else if (roll !== 100) {
			result = 10;
		} else {
			result = 11;
		}

		this.setState({
			roll,
			text: jsonData["Adventures"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Adventure Randomizer:</h3>
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

export default Adventures;
