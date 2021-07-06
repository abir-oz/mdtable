import { MDBBtn, MDBDataTable, MDBInput } from 'mdbreact';
import React, { useEffect, useState } from 'react';

const TablePage = () => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('All');
    // const [rowData, setowData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [url]);

    const handelClick = (e) => {
        console.log('Clicked', e.target);
    };

    const handleSelect = (e) => {
        const selectedGender = e.target.value;
        setGender(selectedGender);
    };
    console.log(gender);

    const userList = users.map((user, index) => {
        const heading6 = (
            <MDBBtn onClick={handelClick} color="danger">
                Delete
            </MDBBtn>
        );
        const userData = {
            id: user.id,
            heading1: user.name,
            heading2: '',
            heading3: user.email,
            heading4: user.phone,
            heading5: user.website,
            heading6,
        };
        if (index % 2 === 0) {
            userData.heading2 = 'Male';
        } else {
            userData.heading2 = 'Female';
        }

        return userData;
    });
    let userFiltered;
    if (gender) {
        userFiltered = userList.filter((user) => user.heading2 === gender);
        console.log(userFiltered);
    }

    const data = {
        columns: [
            {
                label: '',
                field: 'id',
                sort: 'asc',
            },
            {
                label: 'Name',
                field: 'heading1',
                sort: 'asc',
            },
            {
                label: 'Gender',
                field: 'heading2',
                sort: 'asc',
            },
            {
                label: 'Email',
                field: 'heading3',
                sort: 'asc',
            },
            {
                label: 'Phone',
                field: 'heading4',
                sort: 'asc',
            },
            {
                label: 'Website',
                field: 'heading5',
                sort: 'asc',
            },
            {
                label: 'Manage',
                field: 'heading6',
                sort: 'asc',
            },
        ],
        rows: gender === 'All' ? [...userList] : [...userFiltered],
    };

    return (
        <>
            <h2 className="text-center mt-5">
                <u>Striped Table</u>
            </h2>
            <MDBInput />
            <div>
                <select
                    className="browser-default custom-select border-bottom"
                    onBlur={handleSelect}
                >
                    <option value="All">Filter By Gender: All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <MDBDataTable responsive exportToCSV btn striped bordered data={data} />
            {/* <MDBTable responsive>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
            </MDBTable> */}
        </>
    );
};

export default TablePage;
