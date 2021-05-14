import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetCurrentUser } from '../actions/userActions';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUserReducer.userData);

    const [btnText, setBtnText] = useState('Sign in');

    useEffect(() => {
        {!currentUser || currentUser.email === '' ? setBtnText('Sign in') : setBtnText('Sign out')}
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
            <h2 className="app-name" onClick={redirectHome}>Twitter 
                <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </h2>
            <ul className="nav-items">
                <li><Link to="/myprofile">My Profile</Link></li>
                <li><Link to="/">My Followers</Link></li>
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