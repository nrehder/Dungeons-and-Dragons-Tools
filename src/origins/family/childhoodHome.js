import React from "react";
import rollDice from "../../randomizers/diceRoller";

const ChildhoodHome = props => {
	const roll = rollDice(1, 100) + props.mod;
	const childhoodHomeResults = [
		<h3 key="childhood_home_title">Childhood Home</h3>,
	];

	if (roll > 110) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">Palace or castle</p>
		);
	} else if (roll > 90) {
		childhoodHomeResults.push(<p key="childhood_home_result">Mansion</p>);
	} else if (roll > 70) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">Large house</p>
		);
	} else if (roll > 50) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">Small house</p>
		);
	} else if (roll > 40) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">
				Apartment in a rundown neighborhood
			</p>
		);
	} else if (roll > 30) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">
				Encampment or village in the wilderness
			</p>
		);
	} else if (roll > 20) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">
				No permanent residence; you moved around a lot
			</p>
		);
	} else if (roll > 0) {
		childhoodHomeResults.push(
			<p key="childhood_home_result">Rundown shack</p>
		);
	} else {
		childhoodHomeResults.push(
			<p key="childhood_home_result">On the streets</p>
		);
	}

	return childhoodHomeResults;
};

export default ChildhoodHome;
