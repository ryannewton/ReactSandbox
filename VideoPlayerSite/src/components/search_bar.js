import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
	}

	// Good naming convention is 'on' or 'handle'
	//  + name of element being watched
	//  + name of event
	onInputChange(event) {

	}
};

export default SearchBar;
