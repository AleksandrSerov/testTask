import React, { Component } from 'react';
import {Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './filterBar.sass'
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
	const role = event.target.value;
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
	update({
		data: filter,
		checked: !this.props.checked
	});

}

render() {
	return(
		<Row >
			<Col sm="12">
			<div className="filterBar">
			<Dropdown className="filterBar-role" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>
					Фильтр по должности
				</DropdownToggle>
				<DropdownMenu >
				 <DropdownItem onClick = {this.filterRole} value="">Сбросить</DropdownItem>
					<DropdownItem onClick = {this.filterRole} value="driver">Водитель</DropdownItem>
					<DropdownItem onClick = {this.filterRole} value="waiter">Официант</DropdownItem>
					<DropdownItem onClick = {this.filterRole} value="cook">Повар</DropdownItem>
				</DropdownMenu>
    </Dropdown>
				<div className="filterBar-status">
					<input className="filterBar-status-input" id="archive" type="checkbox" onChange={this.filterStatus}></input>
					<label className="filterBar-status-input-label"htmlFor="archive">Архив</label>
				</div>
				
			</div>
			</Col>
		</Row>
	)
}
}

export default FilterBar;