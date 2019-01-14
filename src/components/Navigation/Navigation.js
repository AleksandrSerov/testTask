import React, { Component } from 'react';
import App from '../App/App';
import UserList from '../UserList/UserList'
import ModalWindow from '../ModalWindow/ModalWindow';
import {Router, Route, Link, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
class Navigation extends Component {
	render() {
		const history = createBrowserHistory();	
		return(
				<Router history={history}>
					<Switch>
						<Route exact path='/' component={App}/>
						<Route exact path='/userlist' component={UserList}/>
						<Route exact path='/addnewuser' render={(props) => (
							<>
								<App/>
							</>
						)}/>
					</Switch>

				</Router>
				
		)
	}
}

export default Navigation;