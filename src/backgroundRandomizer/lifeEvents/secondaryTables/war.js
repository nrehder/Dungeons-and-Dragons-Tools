import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "../lifeEvents.json";

class War extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 12);

		this.setState({
			roll,
			text: jsonData["War"][roll],
		});
	};

	render() {
		return (
			<div>
				<h3>War Randomizer:</h3>
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

export default War;
