
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddBook = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const bookData = {
            name: data.name,
           email: data.email,
            price: data.price,
            imageURL: imageURL,

        }
        const url = `http://localhost:5000/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData )
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = book => {
        console.log(book.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '88915d62ec9d02c19a4c66f98a63a842');
        imageData.append('image', book.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (

        <div className='row'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className='col-md-4'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" {...register("name")} name="name" placeholder="phone name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="price" {...register("price")} name="price" placeholder="price" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" {...register("email", { required: true })} name="email" placeholder="email" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="file" {...register("img", { required: true })} name="img" placeholder="Image" onChange={handleImageUpload} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">

                        <button  type="submit" className="btn btn-primary text-right">AddBook</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddBook;