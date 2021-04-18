import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from , imageURL} = props.testimonial;
    return (
        <div className="col-md-4 card shadow-sm">
             <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={ imageURL} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
           
       </div>
    );
};

export default Testimonial;