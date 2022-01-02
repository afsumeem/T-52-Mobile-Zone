import React from 'react';
import './History.css';
import banner2 from '../../../images/section.jpg'
import background from '../../../images/background.jpg'
import { Container } from 'react-bootstrap';


const History = () => {
    return (
        <div className="history">
            <Container>
                <div className='d-flex history-background'>
                    <div className='w-50 '>
                        <img className='img-fluid' src={banner2} alt="" />
                    </div>
                    <div className='w-50'>
                        <h5>History</h5>
                        <div>
                            <small>
                                Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem a hendrerit vestibulum, orci orci vestibulum risus. Non imperdiet est sem ut arcu. Phasellus consectetur quis metus a tincidunt.
                            </small>
                        </div>
                        <h5>Our Mission</h5>
                        <div>
                            <small>
                                Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem a hendrerit vestibulum, orci orci vestibulum risus. Non imperdiet est sem ut arcu. Phasellus consectetur quis metus a tincidunt.
                            </small>
                        </div>
                        <h5>Goals</h5>
                        <div>
                            <small>
                                Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem a hendrerit vestibulum, orci orci vestibulum risus. Non imperdiet est sem ut arcu. Phasellus consectetur quis metus a tincidunt.
                            </small>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default History;