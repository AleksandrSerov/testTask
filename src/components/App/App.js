import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserList from '../UserList/UserList'
import { Container, Row, Col } from 'reactstrap';
import SortBar from '../SortBar/SortBar';
import FilterBar from '../FilterBar/FilterBar';

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
		this.setState(config)
}

  render() {
    return (
				<Container>
					<SortBar  data={this.state.data }  update={this.updateData.bind(this)}/>
					<FilterBar  data={this.state.data } initialData={this.initialData }  update={this.updateData.bind(this)} checked={this.state.checked} role={this.state.role}/>
					<Row>
						<Col xs = "3" sm = "8">
						<UserList data={this.state.data}/>
						</Col>
						</Row>
				</Container>
				);
  }
}



export default App;
