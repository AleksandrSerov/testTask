import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Button} from 'reactstrap';
import { Formik }  from 'formik';
import MaskedInput from 'react-text-mask'
import BasicFormSchema from '../BasicFormSchema/BasicFormSchema';
import {Router, Route, Link, Switch} from 'react-router-dom';



class ModalForWork extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false
	};
this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div className="addNewEmp">
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Добавить нового сотрудника</ModalHeader>
						<ModalBody>
							Hello World
					 </ModalBody>
				</Modal>
			</div>
		)
	}

}
export default ModalForWork;