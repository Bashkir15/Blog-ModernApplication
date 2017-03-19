import React, { PropTypes } from 'react';

import '../../static/styles/shared/components/nav.sass'

class Nav extends React.Component {
	render() {
		return (
			<nav className='nav'>
				<div className='nav-left'>
					<div className='nav-item'>
						<h2>{this.props.logo}</h2>
					</div>
				</div>


				<div className='nav-center'>
					<div className='nav-item'>
						<button>All</button>
					</div>

					<div className='nav-item'>
						<button>Categories</button>
					</div>

					<div className='nav-item'>
						<button>New</button>
					</div>

					<div className='nav-item'>
						<button>Login</button>
					</div>
				</div>

				<div className='nav-right'>
					<div className='nav-item'>
						<button>Search</button>
					</div>
				</div>
			</nav>
		);
	}
}

Nav.propTypes = {
	logo: PropTypes.string.isRequired,
};

export default Nav;