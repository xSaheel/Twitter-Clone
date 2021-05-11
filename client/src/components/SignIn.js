import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from "../actions/dataActions";

const SignIn = () => {

    const userData = useSelector(state => state.userReducer.userData);

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loginId, setLoginId] = useState('');
    const [loginPass, setLoginPass] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        if(email === '' || name === '' || password === ''){
            alert('Please enter all details!');
            return;
        }
        const newUser = {
            name: name,
            email: email,
            password: password,
        };
        setName('');
        setEmail('');
        setPassword('');
        dispatch(addUser(newUser));
    }

    const authenticate = (user) => {
        return (user.email === loginId && user.password === loginPass);
    }

    const login = (e) => {
        e.preventDefault();
        if(loginId === '' || loginPass === ''){
            alert('Please enter all details!');
            return;
        }
        if(userData.find(authenticate) === undefined){
            alert('Invalid Username or Password');
            return;
        }
        console.log('authenticated');
    }

    return (
        <div>
            <div className="login-container">
                <h1>Sign In 😉</h1>
                <p style={{backgroundColor : '#393e46'}}>EXISTING USER</p>
                <form className="login-form">
                    <input type="text" placeholder="Email" id="login-email" name="login-email" onChange={(e) => setLoginId(e.target.value)}></input>
                    <input type="password" placeholder="Password" id="login-pw" name="login-pw" onChange={(e) => setLoginPass(e.target.value)}></input>
                    <button className="login-btn" onClick={(e) => login(e)}>Sign In</button>
                </form>
            </div>
            <div className="sign-up-container">
                <h1>Sign Up 😎</h1>
                <p style={{backgroundColor : '#393e46'}}>NEW USER</p>
                <form className="login-form">
                    <input type="text" placeholder="Name" id="name" name="name" onChange={(e) => setName(e.target.value)}></input>
                    <input type="text" placeholder="Email" id="signup-email" name="signup-email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password" id="signup-pw" name="signup-pw" onChange={(e) => setPassword(e.target.value)}></input>
                    <button className="login-btn" onClick={(e) => signUp(e)}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;