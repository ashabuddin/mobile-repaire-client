import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className='container-fluid row'>
                <div className='col-md-3'>
                    <Sidebar></Sidebar>
                </div>

                    
            </div>
        </section>
    );
};

export default Dashboard;