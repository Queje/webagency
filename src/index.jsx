import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './pages/StudyCase';
import SwitchContext from './SwitchContext';

const App = () => {
	const [theme, setTheme] = React.useState('ligth');
	const [status, setStatus] = React.useState('');

	const contextValue = {
		status,
		updateStatus: setStatus,
		updateTheme: setTheme
	}

	const loadTheme =() => {
		const loaded = localStorage.getItem('themeStatus');
		if (loaded && loaded === "dark") {
			setTheme(loaded);
			setStatus('checked');
		} else {
			setTheme(loaded);
			setStatus('');
		}
	}

	useEffect(() => loadTheme(), []);

  return(
		<SwitchContext.Provider value={contextValue}>
			<section className={theme}>
				<Router>
					<Navbar />
					<main>
						<Switch>
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route exact path="/works">
								<Works />
							</Route>
							<Route path="/works/:studycase">
								<StudyCase />
							</Route>
						</Switch>
					</main>
				</Router>
			</section>
		</SwitchContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));