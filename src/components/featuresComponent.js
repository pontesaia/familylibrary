import React, { Component } from 'react';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
			<React.Fragment>
				<div>
                    <h1>Features</h1>
                    <ul>
                        <li>(account icon)Archive family stories, histories, memories, photos, videos and recipes in secure family group accounts.</li>
                        <li>(road icon)Follow stories of family heritage and legacies, or add your own families' journey.</li>
                        <li>(safety icon)Keep family folklore in a sacred space where safety-checked content is posted for families to enjoy.</li>
                        <li>(images icon)Preserve those curated daily visuals that you text to mom, dad, and siblings. ( images icon)</li>
                        <li>(movies icon)Tag content for creating family movies for online get-togethers.</li>
                        <li>(books icon)Exporting for creating those wonderful story-books or family-photo-books for gift-giving.</li>
                        <li>(groups icon)Join Family Groups where you can browse or post on multiple family lineages.</li>
                        </ul>
                </div>
			</React.Fragment>
		);
    }
}
 
export default Features;