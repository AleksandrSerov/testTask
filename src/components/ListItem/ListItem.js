import React from 'react';
const ListItem = ({item}) => (
	<tr onClick={() => console.log({item})}>
		<td>{item.name}</td>
		<td>{item.role}</td>
		<td>{item.phone}</td>
		<td>{item.birthday}</td>
	</tr>
);

export default ListItem;
