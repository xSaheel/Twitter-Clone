import Post from "./Post";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getData } from "../actions/dataActions";

const Feed = () => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       getData(dispatch);
       setIsLoading(false);
    },[])

    const tweets = useSelector(state => state.dataReducer.data);

    return(
        <div>
            {isLoading && <h1><center>Loading... 🙁</center></h1>}
            {tweets.length === 0 && !isLoading ? <h1><center>No Posts Yet 🙁</center></h1>
            : tweets.map(post => <Post key = {post._id} post = {post} />)}
        </div>
    )
}

export default Feed;
