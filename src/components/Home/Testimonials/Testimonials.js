import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {

        const [testimonialData, setTestimonialData] = useState([]);

        useEffect(() => {
            fetch('https://aqueous-cliffs-02461.herokuapp.com/reviews')
                .then(res => res.json())
                .then(data =>  setTestimonialData(data))
        }, [])
            
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase text-center">Testimonial</h5>
                    <h1 className='text-center'>What Our Service Review </h1>
                </div>
                <div className="row card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;