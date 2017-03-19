import React, { PropTypes } from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.title}</p>
			</div>
		);
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
};

export default App;

