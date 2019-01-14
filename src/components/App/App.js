import React, { Component } from 'react';
import './App.sass';
import axios from 'axios';
import UserList from '../UserList/UserList'
import { Container, Row, Col } from 'reactstrap';
import SortBar from '../SortBar/SortBar';
import FilterBar from '../FilterBar/FilterBar';
import ModalWindow from '../ModalWindow/ModalWindow';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			checked: false,
			role: ""
		};
		axios.get('./employers.json').then((response) => {
			this.initialData = response.data;
			const filter = response.data.filter(employer => {
				return employer.isArchive === this.state.checked;
			});

			this.setState({
				data: filter
			});
		});
	}
	updateData(config) {
		this.setState(config);
}
  render() {
    return (
					 <Container className="app">
								<div className="bars">
									<SortBar  data={this.state.data }  update={this.updateData.bind(this)}/>
									<FilterBar  data={this.state.data } initialData={this.initialData }  update={this.updateData.bind(this)} checked={this.state.checked} role={this.state.role}/>
									<ModalWindow data={this.state.data} update={this.updateData.bind(this)} initialData={this.initialData } checked={this.state.checked} />
								</div>
								<UserList data={this.state.data} initialData={this.initialData } update={this.updateData.bind(this)} checked={this.state.checked}/>
					 </Container>
				);
  }
}



export default App;
