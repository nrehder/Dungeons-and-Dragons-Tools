import React from "react";
import "./backgroundRandomizer.css";

import { connect } from "react-redux";

import Controls from "./controls/controls";
import Origins from "./origins/origins";
import PersonalDecisions from "./personalDecisions/personalDecisions";
import LifeEvents from "./lifeEvents/lifeEvents";
import SupplementalTables from "./supplementalTables/supplementalTables";

class BackgroundRandomizer extends React.Component {
	state = {
		beenSubmitted: false,
	};

	buttonClick = () => {
		this.props.reroll();
		if (!this.state.beenSubmitted) this.setState({ beenSubmitted: true });
	};

	render() {
		const values = {
			race: this.props.race,
			background: this.props.background,
			class: this.props.class,
			age: this.props.age,
			chaMod: this.props.chaMod,
		};
		let display = (
			<p>
				Please input character information above and click the submit
				button!
			</p>
		);
		if (this.state.beenSubmitted) {
			display = [
				<Origins key="origins_comp" />,
				<hr key="break_one" />,
				<PersonalDecisions key="personal_decisions_comp" />,
				<hr key="break_two" />,
				<LifeEvents key="life_events_comp" />,
				<hr key="break_three" />,
				<SupplementalTables key="supplemental_tables_comp" />,
			];
		}
		return (
			<div className="background-app">
				<Controls
					values={values}
					changeHandler={this.props.onChangeHandler}
					randomizer={this.buttonClick}
					buttonType={
						this.state.beenSubmitted ? "Reroll Character" : "Submit"
					}
				/>
				<hr />
				{display}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		race: state.race,
		background: state.background,
		class: state.class,
		age: state.age,
		chaMod: state.chaMod,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onChangeHandler: (event, type) => dispatch({ type, event }),
		reroll: () => dispatch({ type: "REROLL" }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BackgroundRandomizer);
