import React, { Component } from 'react';
import {Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class FilterBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
				dropdownOpen: false
		};
	}
 toggle() {
		this.setState(prevState => ({
				dropdownOpen: !prevState.dropdownOpen
		}));
}

filterRole = (event) => {
	const {update, initialData} = this.props;
	const role = event.target.textContent.toLowerCase();
	const filter = initialData.filter(employer => {
		return (employer.role.includes(role) && employer.isArchive === this.props.checked)
	})
	update({
		data: filter,
		role: role
	});
}


filterStatus = () => {
	const {update, initialData} = this.props;
	const filter = initialData.filter(employer => {
		return (employer.role.includes(this.props.role) && employer.isArchive === !this.props.checked)
	})
	console.log(filter)
	update({
		data: filter,
		checked: !this.props.checked
	});

}

render() {
	return(
		<Row >
			<Col sm="12">
			<div>
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					Фильтр по должности
				</DropdownToggle>
				<DropdownMenu >
					<DropdownItem onClick = {this.filterRole}>Driver</DropdownItem>
					<DropdownItem onClick = {this.filterRole}>Waiter</DropdownItem>
					<DropdownItem onClick = {this.filterRole}>Cook</DropdownItem>
				</DropdownMenu>
    </Dropdown>
				<input id="archive" type="checkbox" onChange={this.filterStatus}></input>
				<label htmlFor="archive">Архив</label>
				
			</div>
			</Col>
		</Row>
	)
}
}

export default FilterBar;