import React from 'react';
import {Link} from 'react-router-dom';
import DayNigthSwitch from '../DayNigthSwitch';

const Navbar =() => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<Link className="navbar-brand" to="/">Web Agency</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
					<Link className="nav-link" to="/works">Works</Link>
				</div>
			</div>
			<DayNigthSwitch />
		</nav>
	)
}

export default Navbar;

  