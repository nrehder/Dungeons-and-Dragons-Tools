import React from "react";
import "./home.css";

const Home = () => (
	<div className="homepage">
		<div className="welcome">
			<h1>Welcome to my D&D 5e tools!</h1>
			<p>
				I built this webpage to contain a few of the tools I use when
				creating or playing 5th edition of Dungeons and Dragons. Use the
				links at the top to go to one of the tools, or read descriptions
				of them below.
			</p>
		</div>
		<div className="descriptions">
			<h1>Xanathar's Background Randomizer</h1>
			<p>
				This tool uses the "This is Your Life" tables from Xanathar's
				Guide to Everything. It does the rolling for you, since there
				are at least 10 rolls, with various sets of dice. Due to
				Xanathar's not being part of the OGL, this tool cannot be used
				without the book. All it does is tell you what you got on the
				roll and which range on the specific table to look at. However,
				it does do all the rolls quickly, so you can put in your
				character's information and then just scroll down and read the
				results.
			</p>
			<p>
				To be added: Custom content for things like warforged and
				artificer
			</p>
			<h1>Height and Weight Randomizer</h1>
			<p>
				This tool uses the table from the Player's Handbook to randomize
				the height and weight for a character. Just put in the desired
				race and click the generate button as many times as you want.
				The results are initially given with the height in feet and
				inches, but can be converted to just inches or meters.
			</p>
		</div>
	</div>
);

export default Home;
