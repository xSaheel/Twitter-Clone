import { useSelector } from 'react-redux';
import Post from './Post';

const MyPosts = () => {

    const allPosts = useSelector(state => state.dataReducer.data);
    const currentUser = useSelector(state => state.currentUserReducer.userData);

    const myPosts = allPosts.filter(post => currentUser && currentUser.email === post.email);

    return (
        <div className="container">
            <h1 style={{padding: '2rem'}}><center>My Posts</center></h1>
            {myPosts.length === 0 ? <h1><center>No Posts Yet 🙁</center></h1>
            : myPosts.map(post => <Post key = {post._id} post = {post} />)}
        </div>
    );
}

export default MyPosts;
