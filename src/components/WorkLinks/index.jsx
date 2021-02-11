import React from 'react';
import { Link } from 'react-router-dom';

const WorkLinks =({info, theme}) => {

	return (
		<div className={`card ${theme}`} id="WorkLinks">
			<img src={info.imageurl} alt={info.title}></img>
			<Link to={`/works/${info.title}`}>{info.title}</Link>
		</div>
	)
}

export default WorkLinks;