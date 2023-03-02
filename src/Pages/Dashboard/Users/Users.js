import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const Users = ({ user }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);
    const { displayName, email, role, _id } = user;

    const handleDeleteUser = id => {
        const url = `https://mobile-zone.onrender.com/users/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                }
            })
            .finally(setShow(false))
    };

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
                <td>
                    <div>
                        <span onClick={() => { setShow(true); }} className="cancel_btn text-danger" >{closeIcon}</span>
                    </div>
                </td>
            </tr>
            {/* Confirmation alert */}
            < Modal show={show} onHide={handleClose} >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { handleDeleteUser(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
};

export default Users;