import "./App.css";
import React from "react";
import Controls from "./controls/controls";
import Origins from "./origins/origins";
import PersonalDecisions from "./personalDecisions/personalDecisions";
import LifeEvents from "./lifeEvents/lifeEvents";

class App extends React.Component {
	state = {
		race: "Half-Elf",
		background: "Acolyte",
		class: "Barbarian",
		age: 1,
		chaMod: 0,
	};

	changeHandler = (event, control) => {
		this.setState({ [control]: event.target.value });
	};

	render() {
		const values = { ...this.state };
		return (
			<div className="App">
				<Controls values={values} changeHandler={this.changeHandler} />
				<hr />
				<Origins race={this.state.race} chaMod={this.state.chaMod} />
				<hr />
				<PersonalDecisions
					characterClass={this.state.class}
					background={this.state.background}
				/>
				<hr />
				<LifeEvents age={this.state.age} />
			</div>
		);
	}
}

export default App;
