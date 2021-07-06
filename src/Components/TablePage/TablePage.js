import { MDBBtn, MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react';

const TablePage = () => {
    const [users, setUsers] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [url]);

    const handelClick = (e) => {
        console.log('Clicked', e.target);
    };

    const userList = users.map((user) => {
        const heading5 = (
            <MDBBtn onClick={handelClick} color="danger">
                Delete
            </MDBBtn>
        );
        const userData = {
            id: user.id,
            heading1: user.name,
            heading2: user.email,
            heading3: user.phone,
            heading4: user.website,
            heading5,
        };

        return userData;
    });

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
            {
                label: 'Manage',
                field: 'heading5',
                sort: 'asc',
            },
        ],
        rows: [...userList],
    };

    return (
        <>
            <h2 className="text-center mt-5">
                <u>Striped Table</u>
            </h2>

            <MDBDataTable striped bordered data={data} />
            {/* <MDBTable responsive>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
            </MDBTable> */}
        </>
    );
};

export default TablePage;
