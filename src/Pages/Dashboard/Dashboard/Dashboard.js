import { faSignOutAlt, faUser, faUsersCog, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    const { user, logOut } = useAuth()
    return (
        <div>

            <Row>
                <Col md={3}>
                    <div className='d-flex flex-column'>
                        <NavLink to='/dashboard' className="text-dark fs-4 fw-bolder my-1 text-decoration-none">
                            <FontAwesomeIcon className=" me-2" icon={faUsersCog} />
                            Dashboard
                        </NavLink>


                        <NavLink to='/dashboard/makeAdmin' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                            <FontAwesomeIcon className="me-2" icon={faUserShield} />
                            Make Admin
                        </NavLink>

                        <NavLink to='/dashboard/addProduct' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                            <FontAwesomeIcon className="me-2" icon={faUserShield} />
                            Add new Product
                        </NavLink>


                        <NavLink to='/dashboard/addBlog' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                            <FontAwesomeIcon className="me-2" icon={faUserShield} />
                            Add New Blog
                        </NavLink>


                        <NavLink to='/dashboard/manageProduct' className='text-decoration-none ms-5 fw-bolder fs-6 text-dark'>
                            <FontAwesomeIcon className="me-2" icon={faUserShield} />
                            Manage Products
                        </NavLink>


                        <Navbar.Text className="ms-5 fs-5 my-1  fw-bolder me-auto" style={{ 'color': '#c13f22' }}>
                            <FontAwesomeIcon className=" me-2" icon={faUser} />
                            <span style={{ 'color': '#c13f22' }}>
                                {user.displayName && user.displayName}
                            </span>
                        </Navbar.Text>

                        <NavLink onClick={logOut} className="text-decoration-none ms-5 text-dark fw-bolder fs-6" to="/home">
                            <FontAwesomeIcon className="me-2" icon={faSignOutAlt} />
                            Logout
                        </NavLink>
                    </div>
                </Col>


                <Col md={9}>
                    {/* dashboard all routes content */}
                    <Outlet />
                </Col>

            </Row>


        </div>
    );
};

export default Dashboard;