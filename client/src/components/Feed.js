import Post from "./Post";
import { useSelector } from 'react-redux';

const Feed = () => {
    const tweets = useSelector(state => state.dataReducer.data);

    return(
        <div>
            {tweets.length === 0 ? <h1><center>No Posts Yet 🙁</center></h1>
            : tweets.map(post => <Post key = {post.id} post = {post} />)}
        </div>
    )
}

export default Feed;
