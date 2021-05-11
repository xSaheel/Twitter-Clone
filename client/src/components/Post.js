import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../actions/dataActions";
import avatar from "../images/male-avatar.png";
 
const Post = ({ post }) => {

    const dispatch = useDispatch();

    return(
        <div className="post-body">
            <div className="user-header">
                <img className="avatar" src={avatar}></img>
                <h2 className="author">{post.author}</h2>
            </div>
            <p className="text">{post.text}</p>
            <div className="info-bar">
                <p className="date">{post.date}</p>
                <div className="likes">
                    <p>{post.likes}</p>
                    <i className="fa fa-heart-o fa-lg" aria-hidden="true" onClick={() => dispatch(addLike(post))}></i>
                </div>
            </div>
        </div>
    )
}

export default Post;