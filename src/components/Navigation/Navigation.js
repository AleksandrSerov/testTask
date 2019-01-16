import React, { Component } from 'react';
import App from '../App/App';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

class Navigation extends Component {
	render() {
		const history = createBrowserHistory();	
		return(
				<Router history={history}>
						<Route  path='/'  component={App}/>
				</Router>
				
		)
	}
}

export default Navigation;