import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Button} from 'reactstrap';
import { Formik }  from 'formik';
import MaskedInput from 'react-text-mask'
import BasicFormSchema from '../BasicFormSchema/BasicFormSchema';
import {Router, Route, Link, Switch} from 'react-router-dom';

import './modalWindow.sass';


class ModalWindow extends Component {
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
				<Link to="/addnewuser">
				<Button  color="secondary" onClick={this.toggle}> Добавить нового сотрудника </Button>
				</Link>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
						<ModalHeader toggle={this.toggle}>Добавить нового сотрудника</ModalHeader>
						<ModalBody>
						<Formik
							initialValues={{ name: '', 
								phone: '', 
								birthday: '',
								role: 'driver',
								isArchive: false
							}}
							validationSchema={BasicFormSchema}
							onSubmit={(values, { setSubmitting }) => {
								const {update, initialData} = this.props;
								const addEmp = {
									id: initialData.length+1,
									name: values.name,
									phone: values.phone,
									isArchive: values.isArchive,
									role: values.role,
									birthday: values.birthday
								}
								initialData[initialData.length] = addEmp;
								const filter = initialData.filter(employer => {
									return employer.isArchive === this.props.checked;
								});
								update({
									data: filter,
								});
							}}
						>
						{props => {
							const {
								values,
								touched,
								errors,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit
							} = props;
							return (
								<form onSubmit={handleSubmit}>
									<FormGroup>
										<Label for="name">Имя</Label>
										<Input required 
											type="text" 
											name="name" 
											id="name" 
											placeholder="Иван Иванов"
											value={values.name}
											onChange={handleChange}
											onBlur={handleBlur}
											className={errors.name && touched.name ? 'text-input error' : 'text-input'}
										/>
										{errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
									</FormGroup>
									<FormGroup>
										<Label for="phone">Номер телефона</Label>
										<MaskedInput required 
											mask={['+','7',' ','(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
											guide = "false"
											
											type="text" 
											name="phone" 
											id="phone" 
											placeholder="+7 (000) 000 0000"
											value={values.phone}
											onChange={handleChange}
											onBlur={handleBlur}
											className={errors.phone && touched.phone ? 'text-input error form-control' : 'text-input form-control'} 
										/>
										{errors.phone && touched.phone && <div className="input-feedback ">{errors.phone}</div>}
									</FormGroup>
									<FormGroup>
										<Label for="birthday">Дата рождения</Label>
										<MaskedInput required
											type="text" 
											mask={[/[0-3]/, /\d/, '.', /[0-1]/, /\d/, '.', /[1-2]/, /\d/, /\d/, /\d/]}
											guide = "false"
											name="birthday" 
											id="birthday" 
											placeholder="ДД.ММ.ГГГГ"
											value={values.birthday}
											onChange={handleChange}
											onBlur={handleBlur}
											className={errors.birthday && touched.birthday ? 'text-input error form-control' : 'text-input form-control'} 
										/>
										{errors.birthday && touched.birthday && <div className="input-feedback">{errors.birthday}</div>}
									</FormGroup>
									<FormGroup>
										<Label for="role">Должность</Label>
										<Input required
											type="select" 
											name="role" 
											id="role" 
											value={values.role}
											onChange={handleChange}
											onBlur={handleBlur}
											className={errors.role && touched.role ? 'text-input error' : 'text-input'} >
												<option value="driver">Driver</option>
												<option value="waiter">Waiter</option>
												<option value="cook">Cook</option>
										</Input>
										{errors.role &&	touched.role && <div className="input-feedback">{errors.role}</div>}
									</FormGroup>
									<Label for="isArchive">Статус</Label>
									<FormGroup check>										
										<Label check>
											<Input
												type="checkbox" 
												name="isArchive" 
												id="isArchive" 
												checked = {values.isArchive}
												value={values.isArchive}
												onChange={handleChange}
												onBlur={handleBlur}
												className={errors.isArchive && touched.isArchive ? 'text-input error' : 'text-input'} >
											</Input>
											Архив
										</Label>
										{errors.isArchive && touched.isArchive && <div className="input-feedback">{errors.isArchive}</div>}
									</FormGroup>
									<Button type="submit" disabled={isSubmitting}>
										Добавить
									</Button>
								</form>
							);
						}}
						</Formik>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

export default ModalWindow;