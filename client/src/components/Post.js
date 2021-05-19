import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/dataActions";
import { getData } from "../actions/dataActions";
import avatar from "../images/male-avatar.png";
 
const Post = ({ post }) => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.currentUserReducer.userData);
    const allUsers = useSelector(state => state.userReducer.userData);

    const liker = allUsers.filter(curUser => curUser.email === user.email);

    const likePost = () => {
        if(liker.length === 0) {
            alert('Login to like the post!');
            return;
        }    

        const alreadyLiked = post.likes.find(id => id === liker[0]._id);
        
        if(!alreadyLiked){
            addLike(dispatch, post._id, liker[0]._id, post);
            getData(dispatch);
        }
        else {
            console.log('already liked');   
        }
    }

    return(
        <div className="post-body">
            <div className="user-header">
                <img className="avatar" src={avatar} alt="user-img"></img>
                <h2 className="author">{post.author}</h2>
            </div>
            <p className="text">{post.text}</p>
            <div className="info-bar">
                <p className="date">{post.date}</p>
                <div className="likes">
                    <p>{post.likes.length}</p>
                    <i className="fa fa-heart-o fa-lg" aria-hidden="true" onClick={likePost}></i>
                </div>
            </div>
        </div>
    )
}

export default Post;