import React, { useState } from 'react';
import BookServiceFrom from '../BookServiceFrom/BookServiceFrom';

const ServiceDetail = ({service}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    

    return (
        
            <div className="col-md-4 text-center ">
                <img style={{height: '100px'}} src={service.img} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="mt-3 mb-3">${service.price}</p>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                 <button onClick={openModal}  className='btn btn-primary' >Book Service</button>  
                 <BookServiceFrom modalIsOpen={modalIsOpen} bookingOn={service.price} closeModal={closeModal}></BookServiceFrom> 
            </div>
        
    );
};

export default ServiceDetail;