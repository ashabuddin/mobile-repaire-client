import React from 'react';
import mobile1 from '../../../images/mobile1.jpg';
import mobile2 from '../../../images/mobile2.jpg';
import mobile3 from '../../../images/mobile3.jpg';

const MobileRepair = () => {
    return (
        <section className='row mt-5 pt-5'>
            <h3 className='text-center text-primary'>We are repair Mobile</h3>
                <div className='col-md-4'>
                    <img style={{height:'300px'}} src={mobile1} alt=""/>
                </div>
                <div className='col-md-4'>
                    <img style={{height:'300px'}} src={mobile2} alt=""/>
                </div>
                <div className='col-md-4'>
                    <img style={{height:'300px'}} src={mobile3} alt=""/>
                </div>
                
        </section>
    );
};

export default MobileRepair;