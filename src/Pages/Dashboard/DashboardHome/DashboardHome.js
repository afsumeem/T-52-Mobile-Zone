import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Users from '../Users/Users';

const DashboardHome = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() => {
        fetch('https://safe-coast-68587.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="cart_info my-5 me-5">
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll</th>
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