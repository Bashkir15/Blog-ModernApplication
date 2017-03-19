import React, { PropTypes } from 'react';
import '../static/styles/main.sass';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<p className="test">{this.props.title}</p>
			</div>
		);
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
};

export default App;

