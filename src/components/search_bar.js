import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={this.onInputChange.bind(this)} />
			</div>
		);
	}

	// Good naming convention is 'on' or 'handle'
	//  + name of element being watched
	//  + name of event
	onInputChange(event) {
		const term = event.target.value;
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
};

export default SearchBar;
