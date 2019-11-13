import React from "react";
import CharacterBackground from "./characterBackground";
import CharacterClass from "./characterClass";

const PersonalDecisions = props => {
	return (
		<div>
			<h1>Personal Decisions</h1>
			<CharacterBackground background={props.background} />
			<CharacterClass characterClass={props.characterClass} />
		</div>
	);
};

export default PersonalDecisions;
