import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../component/firebase.init';


const auth =getAuth(app)
const Login = () => {
    const [signInWithGoogle,user]=useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login!!</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()} >Google Sign In</button>
            </div>
            <from>

                <input type={"email"} placeholder='Your Email'></input><br />
                <input type={"password"} placeholder='Your Password'></input><br />
                <input type={"submit"} value="Login"></input><br />
            </from>
        </div>
    );
};

export default Login;