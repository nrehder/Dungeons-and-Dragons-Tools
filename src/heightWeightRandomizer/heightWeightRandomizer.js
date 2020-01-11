import React from "react";
import "./heightWeightRandomizer.css";
import jsonData from "./heightWeight.json";
import rollDice from "../diceRoller";

class HeightWeightRandomizer extends React.Component {
	state = {
		race: "Human",
		height: 0,
		weight: 0,
		measIndex: 0,
		measurement: "Inches",
	};

	measChoices = ["Inches", "Feet", "Meters"];

	raceList = [
		"Human",
		"Dwarf, Hill",
		"Dwarf, Mountain",
		"Elf, High",
		"Elf, Wood",
		"Elf, Drow",
		"Halfling",
		"Dragonborn",
		"Gnome",
		"Half-Elf",
		"Half-Orc",
		"Tiefling",
	];

	onChangeMeasurement = () => {
		const newIndex = (this.state.measIndex + 1) % 3;
		this.setState({
			measIndex: newIndex,
			measurement: this.measChoices[newIndex],
		});
	};

	onGenerate = event => {
		const raceChoice = event.target.value
			? event.target.value
			: this.state.race;

		const racialRandomizers = jsonData[raceChoice];
		const baseHeight = racialRandomizers["baseHeight"];
		const heightMod = rollDice(
			racialRandomizers["heightNumDice"],
			racialRandomizers["heightMaxDice"]
		);
		const baseWeight = racialRandomizers["baseWeight"];
		const weightMod = rollDice(
			racialRandomizers["weightNumDice"],
			racialRandomizers["weightMaxDice"]
		);
		this.setState({
			race: raceChoice,
			height: baseHeight + heightMod,
			weight: baseWeight + weightMod,
		});
	};

	render() {
		let height = this.state.height + `"`;
		if (this.state.measurement === "Feet") {
			height =
				Math.floor(this.state.height / 12) +
				`'` +
				(this.state.height % 12) +
				`"`;
		} else if (this.state.measurement === "Meters") {
			height = this.state.height * 0.0254 + " m";
		}

		return (
			<div className="height-weight">
				<div className="race-selector">
					<span>Choose Race: </span>
					<select value={this.state.race} onChange={this.onGenerate}>
						{this.raceList.map(ele => (
							<option value={ele} key={ele}>
								{ele}
							</option>
						))}
					</select>
				</div>
				<div>
					<button onClick={this.onGenerate}>Generate</button>
				</div>
				<div>
					<span>Click to change measurement: </span>
					<button onClick={this.onChangeMeasurement}>
						{this.state.measurement}
					</button>
				</div>
				<div>
					<h1>Your Randomized Results</h1>
					<h2>Race: {this.state.race}</h2>
					<h2>Height: {height}</h2>
					<h2>Weight: {this.state.weight} lbs</h2>
				</div>
			</div>
		);
	}
}

export default HeightWeightRandomizer;
