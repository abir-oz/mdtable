import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useEffect, useState } from 'react';

const TablePage = () => {
    const [users, setUsers] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [url]);

    const userList = users.map((user) => ({
        id: user.id,
        heading1: user.name,
        heading2: user.email,
        heading3: user.phone,
        heading4: user.website,
    }));

    const data = {
        columns: [
            {
                label: '#',
                field: 'id',
                sort: 'asc',
            },
            {
                label: 'Name',
                field: 'heading1',
                sort: 'asc',
            },
            {
                label: 'Email',
                field: 'heading2',
                sort: 'asc',
            },
            {
                label: 'Phone',
                field: 'heading3',
                sort: 'asc',
            },
            {
                label: 'Website',
                field: 'heading4',
                sort: 'asc',
            },
        ],
        rows: [...userList],
    };

    return (
        <>
            <h2 className="text-center mt-5">
                <u>Table Page</u>
            </h2>
            <MDBTable responsive>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
            </MDBTable>
        </>
    );
};

export default TablePage;
