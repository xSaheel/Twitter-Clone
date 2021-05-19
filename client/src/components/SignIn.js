import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, getUsers, setCurrentUser } from "../actions/userActions";
import { useHistory } from 'react-router-dom';

const SignIn = () => {

    const userData = useSelector(state => state.userReducer.userData);

    const dispatch = useDispatch();

    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoginPage, setIsLoginPage] = useState(true);

    useEffect(() => {
        getUsers(dispatch);
    },[dispatch])

    const authenticate = (user) => {
        return (user.email === email && user.password === password);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        
        if(email === '' || password === ''){
            alert('Please enter all details!');
            return;
        }
        const userInfo = userData.find(authenticate);
        if(userInfo === undefined){
            alert('Invalid Username or Password');
            return;
        }
        console.log('authenticated');
        dispatch(setCurrentUser(userInfo));
        history.push("/");
        setEmail('');
        setPassword('');
    }

    const signupHandler = (e) => {
        e.preventDefault();

        if(email === '' || name === '' || password === ''){
            alert('Please enter all details!');
            return;
        }

        if(userData.find(user => user.email === email) !== undefined){
            alert('This email is already registered');
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: password,
        };

        addUser(dispatch, newUser);
        console.log('user added');
        setEmail('');
        setPassword('');
        setName('');
        setIsLoginPage(true);
    }

    return (
        <div className="login-container">
            {isLoginPage ? <div>
                <h1 className="login-text">Login</h1>
                <form onSubmit={loginHandler}>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p style={{marginTop: '0.5rem'}}>OR</p>
                <p className="toggle" onClick={() => setIsLoginPage(false)}>Create a <span style={{color: '#1da1f2'}}>New Account</span></p>
            </div> : 
            <div>
                <h1 className="login-text">Sign up</h1>
                <form onSubmit={signupHandler}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="login-btn">Sign up</button>
                </form>
                <p style={{marginTop: '0.5rem'}}>OR</p>
                <p className="toggle" onClick={() => setIsLoginPage(true)}>Login here</p>
            </div>}
        </div>
    );
}

export default SignIn;