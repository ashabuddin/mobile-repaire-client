import React from 'react';
import mobile from '../../../images/mobile.jpg';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center header-container">
        <div className="col-md-5 offset-md-1">
            <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            <button className="btn btn-primary">GET SERVICE</button>
        </div>
        <div className="col-md-6">
            <img style={{height:'400px',}} src={mobile} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;