
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const [serviceList, setServiceList] = useState([])

    useEffect(() => {
        fetch('https://aqueous-cliffs-02461.herokuapp.com/mobile')
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])
    return (
        <div className='row'>
          <div className='col-md-3'>
             <Sidebar/>
          </div>

            <div className='col-md-9'>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Mobile</th>
                            <th className="text-secondary" scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceList.map((appointment, index) =>

                                <tr>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.mobile}</td>
                                    <td>{appointment.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>

    );
};

export default ServiceList;