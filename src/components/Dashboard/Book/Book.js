
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Book = () => {
    const { id } = useParams();
    console.log(id);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookData = {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
           

        }
        const url = `http://localhost:5000/addMobile`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server side response', res))
    };


    return (
        <div className='row'>
            <div className='col-md-3'>
                  <Sidebar/>      
            </div>
            <div className='col-md-4'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" {...register("name")} name="name" placeholder="name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" {...register("email")} name="email" placeholder="Your email" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" {...register("mobile", { required: true })} name="mobile" placeholder="Your mobile name" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>


                    <div className="form-group text-right">
                        <small>Your service charge will be ${id} </small>
                        <button type="submit" className="btn btn-primary text-right">Pay</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Book;