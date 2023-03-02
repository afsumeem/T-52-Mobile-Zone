import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Users from '../Users/Users';

const DashboardHome = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() => {
        fetch('https://mobile-zone.onrender.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    return (
        <div className="cart_info my-5 me-5">
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <Users
                            key={user._id}
                            user={user}
                        ></Users>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default DashboardHome;