import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../lifeEvents.json";

class SupernaturalEvents extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 100);
		let result;
		if (roll < 21) {
			result = Math.ceil(roll / 5);
		} else if (roll < 71) {
			result = Math.ceil(roll / 10) + 2;
		} else {
			result = Math.ceil(roll / 5) - 5;
		}

		this.setState({
			roll,
			text: jsonData["Supernatural_Events"][result],
		});
	};

	render() {
		return (
			<div>
				<h3>Supernatural Events Randomizer:</h3>
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

export default SupernaturalEvents;
