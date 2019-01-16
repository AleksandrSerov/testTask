// Отображение всех существующих сотрудников
import React from 'react';
import ListItem from '../ListItem/ListItem'
import { Table } from 'reactstrap';
import './userList.sass'

const UserList = ( {data, initialData, update, checked} ) => {
	const items = data.map(
		(item) => <ListItem 
		item = {item} 
		key = {item.id} 
		data={data} 
		initialData={initialData} 
		update={update} 
		checked={checked}  />
	);
	return (
		<>
			<h3>Сотрудники</h3>
			<Table hover responsive size="sm" className="userList">
			<thead>
					<tr>
							<th>Имя</th>
							<th>Должность</th>
							<th>Номер телефона</th>
							<th>Дата рождения</th>
					</tr>
			</thead>
			<tbody>{items}</tbody>
	</Table>
		</>
	)
}
export default UserList;