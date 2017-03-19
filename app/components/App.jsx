import React, { PropTypes } from 'react';
import '../static/styles/main.sass';

import Nav from './shared/Nav';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Nav logo="Quizzer" />
				<p className="test">{this.props.title}</p>
			</div>
		);
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
};

export default App;

