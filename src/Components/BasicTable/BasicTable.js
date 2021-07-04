import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const BasicTable = () => {
    const [users, setUsers] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [url]);

    return (
        <MDBTable>
            <MDBTableHead color="primary-color" textWhite>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {users.map((user, index) => (
                    <tr key={parseInt(index, 10)}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </MDBTableBody>
        </MDBTable>
    );
};

export default BasicTable;
