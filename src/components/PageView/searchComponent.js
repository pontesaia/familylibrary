import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
			<React.Fragment>
				<div style={styles.search}>
					<h1>Search 🔍</h1>
				</div>
			</React.Fragment>
		);
    }
}

const styles = {
	search: {
		paddingBottom: "100px",

	},

};
 
export default Search;