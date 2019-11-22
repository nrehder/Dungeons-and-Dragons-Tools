import React from "react";
import "./backgroundRandomizer.css";

import { connect } from "react-redux";

import Controls from "./controls/controls";
import Origins from "./origins/origins";
import PersonalDecisions from "./personalDecisions/personalDecisions";
import LifeEvents from "./lifeEvents/lifeEvents";
import SupplementalTables from "./supplementalTables/supplementalTables";
import LifeEventsTables from "./lifeEventsTables/lifeEventsTables";

class BackgroundRandomizer extends React.Component {
	state = {
		beenSubmitted: false,
		lifeEventsTables: false,
		supplementalTables: false,
		originsTables: true,
		personalTables: true,
		lifeTables: true,
	};

	buttonClick = () => {
		this.props.reroll();
		if (!this.state.beenSubmitted) this.setState({ beenSubmitted: true });
	};

	toggleViews = key => {
		this.setState({ [key]: !this.state[key] });
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
				<Origins
					key="origins_comp"
					click={() => this.toggleViews("originsTables")}
					view={this.state.originsTables}
				/>,
				<hr key="break_one" />,
				<PersonalDecisions
					key="personal_decisions_comp"
					click={() => this.toggleViews("personalTables")}
					view={this.state.personalTables}
				/>,
				<hr key="break_two" />,
				<LifeEvents
					key="life_events_comp"
					click={() => this.toggleViews("lifeTables")}
					view={this.state.lifeTables}
				/>,
				<hr key="break_three" />,
				<div
					className="w-80 card-wrapper"
					key="life_events_tables_comp"
				>
					<div
						className="card-header"
						onClick={() => this.toggleViews("lifeEventsTables")}
					>
						<h1>Life Events Extra Tables</h1>
					</div>
					{this.state.lifeEventsTables ? <LifeEventsTables /> : null}
				</div>,
				<div
					className="w-80 card-wrapper"
					key="supplemental_tables_comp"
				>
					<div
						className="card-header"
						onClick={() => this.toggleViews("supplementalTables")}
					>
						<h1>Supplemental Tables</h1>
					</div>
					{this.state.supplementalTables ? (
						<SupplementalTables />
					) : null}
				</div>,
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
