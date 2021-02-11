import React from 'react';
import WorkLinks from '../../components/WorkLinks';
import data from '../../data'

const Works=({theme}) => {

	return(
		<>
			<h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
			<p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
			<h4>nos projets:</h4>
			<div>
				{(data) &&
					<div className="cardlist"> 
						{
							data.map((info) => (
								< WorkLinks info={info} theme={theme} key={info.uuid}/>
							))
						}
					</div>
				}
			</div>
		</>
	)
}

export default Works;