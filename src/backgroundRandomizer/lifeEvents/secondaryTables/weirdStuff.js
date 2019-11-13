import React from "react";
import rollDice from "../../randomizers/diceRoller";
import jsonData from "../lifeEvents.json";

class WeirdStuff extends React.Component {
	state = {
		roll: 0,
		text: "",
	};

	rollAgain = () => {
		const roll = rollDice(1, 12);

		this.setState({
			roll,
			text: jsonData["Weird_Stuff"][roll],
		});
	};

	render() {
		return (
			<div>
				<h3>Weird Stuff Randomizer:</h3>
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

export default WeirdStuff;
