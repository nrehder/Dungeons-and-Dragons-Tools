import React from "react";
import Control from "./control";
import "./control.css";

const Controls = props => {
	const raceList = ["Half-Elf", "Half-Orc", "Tiefling", "Other"];
	const backgroundList = [
		"Acolyte",
		"Charlatan",
		"Criminal",
		"Entertainer",
		"Folk Hero",
		"Guild Artisan",
		"Hermit",
		"Noble",
		"Outlander",
		"Sage",
		"Sailor",
		"Soldier",
		"Urchin",
	];
	const classList = [
		"Barbarian",
		"Bard",
		"Cleric",
		"Druid",
		"Fighter",
		"Monk",
		"Paladin",
		"Ranger",
		"Rogue",
		"Sorcerer",
		"Warlock",
		"Wizard",
	];

	return (
		<div className="controls">
			<div>
				<h3 className="control-label">Race:</h3>
				<Control
					control="race"
					value={props.values.race}
					changeHandler={event =>
						props.changeHandler(event, "CHANGE_RACE")
					}
					controlList={raceList}
				/>
			</div>
			<div>
				<h3 className="control-label">Background:</h3>
				<Control
					control="background"
					value={props.values.background}
					changeHandler={event =>
						props.changeHandler(event, "CHANGE_BACKGROUND")
					}
					controlList={backgroundList}
				/>
			</div>
			<div>
				<h3 className="control-label">Class:</h3>
				<Control
					control="class"
					value={props.values.class}
					changeHandler={event =>
						props.changeHandler(event, "CHANGE_CLASS")
					}
					controlList={classList}
				/>
			</div>
			<div>
				<h3 className="control-label">Age:</h3>
				<input
					type="number"
					min="1"
					value={props.values.age}
					onChange={event => {
						props.changeHandler(event, "CHANGE_AGE");
					}}
				/>
			</div>
			<div>
				<h3 className="control-label">Cha Mod:</h3>
				<input
					type="number"
					value={props.values.chaMod}
					onChange={event => {
						props.changeHandler(event, "CHANGE_CHAMOD");
					}}
				/>
			</div>
			<div>
				<button type="button" onClick={props.randomizer}>
					{props.buttonType}
				</button>
			</div>
		</div>
	);
};

export default Controls;
