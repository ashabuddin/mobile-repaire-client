import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        fetch('https://aqueous-cliffs-02461.herokuapp.com/user?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookList(data))
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
                          bookList.map((appointment, index) =>

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

export default BookList;