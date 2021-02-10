import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';

const StudyCase =() => {
	const {studycase} = useParams();

	const filteredData =() => {
		const currentData = data.filter((e) => e.title===studycase);
		return currentData;
	}

	useEffect(() => filteredData(), []);
	
	return (
		<>
			<h2>{studycase}</h2>
			<h5>{filteredData()[0].subtitle}</h5>
			<p>{filteredData()[0].description}</p>
		</>
	)
}

export default StudyCase;