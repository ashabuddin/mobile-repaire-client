import React from 'react';

const Footer = () => {
    return (
        <div className='row'>
            <div className='col-md-3 text-center'>
                <h1 className='text-primary'>Services</h1>
                <h2>I phone</h2>
                <h2>Samsung</h2>
                <h2>Hawui</h2>
            </div>
            <div className='col-md-3 text-center'>
                <h1 className='text-primary'>Address</h1>
                <h4>Thana: Satkania</h4>
                <h4>District: Chittagong</h4>
            </div>
            <div className='col-md-3'>
                <h1 className='text-primary text-center'>Opening Hours</h1>
                <h4>Monday - Tuesday9.00 - 17.00</h4>
                <h4>Wednesday9.00 - 16.00</h4>
                <h4>Thursday - Friday9.00 - 16.00</h4>
            </div>
            <div className='col-md-3 text-center'>
                <h1 className='text-primary'>Contacts us</h1>
                  <li>  <a href="https://www.facebook.com/">Facebook</a></li>
                  <li><a href="https://twitter.com/">Twitter</a></li>
                  <li><a href="https://www.instagram.com/">Instagram</a></li>
            </div>


        </div>
    );
};

export default Footer;