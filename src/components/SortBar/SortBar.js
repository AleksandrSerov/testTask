import React, { Component } from 'react';
import {Row, Col, Button } from 'reactstrap';

class SortBar extends Component {
	constructor(props) {
		super(props);
		this.sorted = {name: true, age: true};
	}
	sort(type) {
		const {update, data} = this.props;
		const isSorted = this.sorted[type];
		let direction = isSorted ? 1 : -1;
		const sorted = data.sort((a, b) => {
			if (type === 'birthday') {
			 if (a[type] === b[type]) {
					return 0;
				}
				return Date.parse(a[type].replace(/(\d+).(\d+).(\d+)/, '$2/$1/$3')) > Date.parse(b[type].replace(/(\d+).(\d+).(\d+)/, '$2/$1/$3')) ? direction : direction * -1;
			} 
			else  {
				if (a[type] === b[type]) {
					return 0;
				}
				return a[type] > b[type] ? direction : direction * -1;
			}
			
		});
		this.sorted[type] = !isSorted;
		update({
			data: sorted
		});
		console.log(sorted);
	}
render() {
	return(
		<Row>
			<Col sm="12">
			<div>
			<Button color="secondary" onClick= {() => this.sort('name')}>Сортировать по имени</Button>
			<Button color="secondary" onClick= {() => this.sort('birthday')}>Сортировать по дате рождения</Button>
			</div>
			</Col>
		</Row>
	)
}
}

export default SortBar;