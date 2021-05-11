import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="nav">
            <h2 className="app-name">Twitter 
                <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </h2>
            <ul className="nav-items">
                <li><Link to="/myprofile">My Profile</Link></li>
                <li><Link to="/">My Followers</Link></li>
                <li><Link to="/topposts">Top Posts</Link></li>
            </ul>
            <Link to="/signin">
                <button className="sign-in">Sign In</button>
            </Link>
        </div>
    )
}

export default Navbar;