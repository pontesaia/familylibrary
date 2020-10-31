import React, { Component } from 'react';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
			<React.Fragment>
				<h1>This is the features component</h1>
				<h1>With a second line of content</h1>
				<h1>With a third line of content</h1>
			</React.Fragment>
		);
    }
}
 
export default Features;