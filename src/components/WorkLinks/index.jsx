import React from 'react';
import { Link } from 'react-router-dom';

const WorkLinks =({info}) => {

	return (
		<div id="WorkLinks">
			<Link to={`/works/${info.title}`}>{info.title}</Link>
		</div>
	)
}

export default WorkLinks;