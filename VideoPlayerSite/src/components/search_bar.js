import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input onChange={(this.onInputChange.bind(this))} />
			</div>
		);
	}

	// Good naming convention is 'on' or 'handle'
	//  + name of element being watched
	//  + name of event
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}
};

export default SearchBar;
