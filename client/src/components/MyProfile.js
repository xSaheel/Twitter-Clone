import avatar from "../images/male-avatar.png";
import { useSelector } from 'react-redux';

const MyProfile = () => {

    const currentUser = useSelector(state => state.currentUserReducer.userData);
    const defaultName = 'Anonymous';
    const defaultEmail = 'None';

    return (
        <div className="login-container" style={{marginTop: '2.5rem'}}>
            <h1 style={{padding: '3rem 2rem 2rem 2rem'}}>My Profile</h1>
            <img style={{height: '10rem', width: '10rem'}} className="avatar" src={avatar} alt="user-img"></img>
            <div className="user-info">
                <p>Name: {currentUser ? currentUser.name : defaultName}</p>
                <p>Email: {currentUser ? currentUser.email : defaultEmail}</p>
            </div>
        </div>
    );
}

export default MyProfile;