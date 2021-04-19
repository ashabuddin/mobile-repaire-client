
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
                console.log(signedInUser);

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="row login-page container ">
            <div className='col-md-3'>
                  
            </div>
            <div className="col-md-6 text-center shadow p-5 " style={{ height: "100vh" }}>

                <div className="form-group">
                    <label htmlFor="">User Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="text-danger">Forgot your password?</label>
                </div>
                <div className="from-group mt-5">
                    <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;