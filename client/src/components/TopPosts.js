import { useSelector } from 'react-redux';
import Post from './Post';

const TopPosts = () => {

    const allPosts = useSelector(state => state.dataReducer.data);

    allPosts.sort((postA, postB) => postA.likes.length > postB.likes.length ? -1 : (postA.likes.length < postB.likes.length) ? 1 : 0);

    return (
        <div className="container">
            <h1 style={{padding: '2rem'}}><center>Top Posts</center></h1>
            {allPosts.length === 0 ? <h1><center>No Posts Yet 🙁</center></h1>
            : allPosts.map(post => <Post key = {post._id} post = {post} />)}
        </div>
    )
}

export default TopPosts;