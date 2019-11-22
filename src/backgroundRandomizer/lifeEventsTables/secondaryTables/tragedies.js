import React from "react";
import rollDice from "../../../diceRoller";
import jsonData from "./secondary.json";

class Tragedies extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 10);

		this.setState({
			roll,
			text: jsonData["Tragedies"][roll],
		});
	};

	render() {
		return (
			<div>
				<h3>Tragedies Randomizer:</h3>
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

export default Tragedies;
