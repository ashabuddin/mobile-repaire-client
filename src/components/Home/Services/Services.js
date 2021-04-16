import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import iphone from '../../../images/Iphone.jpg'
import samsung from '../../../images/Samsung.jpg'
import hawai from '../../../images/Hawai.jpg'


const serviceData = [
    { 
        _id: '5e8df50be6e8231764dc23de',
        name: 'I Phone',
        img: iphone,
        price:45,
    },
    {  
        _id: '5e8df578e6e8231764dc23df',
        name: 'Samsung',
        img: samsung,
        price:35,
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        name: 'Hawai',
        img: hawai,
        price:36,
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
    </section>
    );
};

export default Services;