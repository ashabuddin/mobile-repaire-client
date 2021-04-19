
import React from 'react';
import device from '../../../images/device.png'
const FixDevice = () => {
    return (
        <div className='row'>
             <h1 className='text-primary text-center '>We Use Genuine Parts to <br /><span>Fix your Device</span></h1>
            <div className='col-md-6 '>
                    <img  src={device} alt=""/>
            </div>
            <div className='col-md-6 text-center '>
               
                <h4>Low Pricing and Faster Repair Services</h4>
                <p>Dolor sit amet consectetur elit eiusmod tempor dunt aliqua uts enim veniam
                tempore quis sed ipsum knostrud ipsum lorem amet consectetur adipisicing
                elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat rem
                ipsum dolor sit amet, consectetur adipisicing.</p>
                <div className='d-flex justify-content-between'>
                    <h4>450+ <br/> <small> Devices Fixed Monthly</small></h4>
                    <h4>30min <br/><small>Avg. Time Of Repair</small></h4>
                    <h4>170+ <br/><small>Locations Count</small></h4>
                </div>
            </div>
        </div>
    );
};

export default FixDevice;