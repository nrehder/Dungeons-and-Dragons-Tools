import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import BackgroundRandomizer from "./backgroundRandomizer/backgroundRandomizer";
import Home from "./home/home";
import HeightWeightRandomizer from "./heightWeightRandomizer/heightWeightRandomizer";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<header className="App-header">
					<ul>
						<li>
							<NavLink to="/" exact>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/background" exact>
								Background Randomizer
							</NavLink>
						</li>
						<li>
							<NavLink to="/height-and-weight" exact>
								Height & Weight
							</NavLink>
						</li>
					</ul>
				</header>
				<div className="App-content">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route
							path="/background"
							component={BackgroundRandomizer}
						/>
						<Route
							path="/height-and-weight"
							component={HeightWeightRandomizer}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
