import React from 'react';
import WorkLinks from '../../components/WorkLinks';
import data from '../../data'

const Works=() => {

	return(
		<>
			<h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
			<p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
			<div>
				{(data) &&
					<div> 
						{
							data.map((info) => (
								< WorkLinks info={info} key={info.uuid}/>
							))
						}
					</div>
				}
			</div>
		</>
	)
}

export default Works;