import {useContext} from 'react';
import SwitchContext from '../../SwitchContext'

const DayNigthSwitch =() => {
	const {status, updateStatus, updateTheme} = useContext(SwitchContext);
	
	const handleStorage=(input)=>{
		localStorage.setItem('themeStatus', input);
	};

	const handleSwitch =(value) =>{
		console.log(value);
		updateTheme(value);
	};

	const handleCheck=() => {
		if(status === ''){
			handleSwitch('dark')
			handleStorage('dark')
			updateStatus('checked')		
		} else {
			handleSwitch('ligth')
			handleStorage('ligth')
			updateStatus('')
		}
	};

	return(
		<div className="wrapper">
			<div className="toggle">
				<input className="toggle-input" type="checkbox" onChange={handleCheck} checked={status}/>
				<div className="toggle-bg"></div>
				<div className="toggle-switch">
				<div className="toggle-switch-figure"></div>
				<div className="toggle-switch-figureAlt"></div>
				</div>  
			</div>
		</div>
	);
};

export default DayNigthSwitch;