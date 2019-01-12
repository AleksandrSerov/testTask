// Отображение всех существующих сотрудников
import React from 'react';
import ListItem from '../ListItem/ListItem'
import { Table } from 'reactstrap';

const UserList = ( {data} ) => {
	const items = data.map(
		(item) => <ListItem item = {item} key = {item.id} />
	);
	return (
		<Table>
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
	)
}
export default UserList;