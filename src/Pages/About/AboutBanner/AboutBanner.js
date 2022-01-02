import React from 'react';
import { Container } from 'react-bootstrap';
// import banner1 from '../../../images/banner1.jpg'
// import banner3 from '../../../images/banner3.jpg'
import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <div className='topAbout-banner text-white relative'>
            <div className='absolute banner-title special-font'>
                <Container>
                    <h1 className='title-head'>ABOUT OUR SHOP</h1>
                    <div className='top-line'></div>
                </Container>
            </div>
        </div>
    );
};

export default AboutBanner;