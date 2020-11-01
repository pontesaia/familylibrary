import React, { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
						<div>
							<div>
								<h1>About</h1>
								<p>
								Families come in all sizes, colors, cultures and traditions!  Families who share their values, and traditions with each generation are bound closer together through their common family histories. Reading stories written directly by family members is like reading letters from home. These personal memories offer perspectives on “Who’s who”, and the “Why’s” and “When’s” of family life. Family Library offers a convenient way to share precious family stories with family members no matter where they are in the world.
								</p>
							</div>
							<div>
								<ul>
									<li>(holding  hands icon)Family Library brings families closer together, even when separated, and memories come back to life in story form</li>
									<li>(pencil icon)Family “members” post stories, old photos or recipes for generations to enjoy.</li>
									<li>(share icon)Browse, read, export, print, or share, via email, links to those special family events and milestones.</li>
									<li>(heart icon)Memories of  precious experiences of “old time” family photo albums, letters from Grandpa, or family favorite recipes! </li>
								</ul>
							</div>
						</div>
			</React.Fragment>
		);
	}
}

export default About;

//this.onclick={this.props.toggleAboutBar}
