import React from "react";
import rollDice from "../randomizers/diceRoller";
import jsonData from "./supplementalTables.json";

class CauseOfDeath extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 12);

		this.setState({
			roll,
			text: jsonData["Cause_Of_Death"][roll],
		});
	};

	render() {
		return (
			<div>
				<h3>Cause of Death Randomizer:</h3>
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

export default CauseOfDeath;
