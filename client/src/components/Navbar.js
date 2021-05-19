import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetCurrentUser } from '../actions/userActions';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUserReducer.userData);

    const [btnText, setBtnText] = useState('Sign in');

    useEffect(() => {
        {currentUser.email === '' ? setBtnText('Sign in') : setBtnText('Sign out')}
    },[currentUser])

    const logout = () => {
        dispatch(resetCurrentUser());
    }

    const history = useHistory();

    const redirectHome = () => {
        history.push("/");
    }

    return(
        <div className="nav">
            <div className="app-name">
                <h2 onClick={redirectHome}>Twitter </h2>
                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </div>
            <ul className="nav-items">
                <li><Link to="/myprofile">My Profile</Link></li>
                <li><Link to="/topposts">Top Posts</Link></li>
                <li><Link to="/myposts">My Posts</Link></li>
            </ul>
            {btnText === 'Sign out' ? <button className="sign-in" onClick={logout}>Sign out</button> : 
                <Link to="/signin">
                    <button className="sign-in">Sign in</button>
                </Link>
            }  
        </div>
    )
}

export default Navbar;