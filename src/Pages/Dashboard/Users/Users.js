import React, { useEffect, useState } from 'react';

const Users = ({ user }) => {
    const { displayName, email, role } = user;

    return (
        <>
            <tr>
                <td className="d-flex align-items-center">
                    <span style={{ marginLeft: '15px', fontWeight: '600' }}>{displayName}</span>
                </td>
                <td>
                    <div>
                        <span >{email}</span>
                    </div>
                </td>
                <td>
                    <div>
                        <span >{role}</span>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Users;