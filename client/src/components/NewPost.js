import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../actions/dataActions';

const NewPost = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUserReducer.userData);
    
    const [text, setText] = useState('');

    const addPost = (e) => {
        e.preventDefault();
        
        const newTweet = {
            id: Math.floor(Math.random()*100000000),
            author: currentUser.name,
            email: currentUser.email,
            text: text,
            likes: [],
            date: new Date().toDateString()
        };

        console.log(newTweet);

        addData(dispatch, newTweet);
        setText('');
    }

    return(
       <div>
            <div className="post-box">
                <textarea placeholder="What's on your Mind?" name="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <div className="func-box">
                <button className="post-btn" onClick = {(e) => addPost(e)}>Post it!</button>
            </div>
       </div>
    )
}

export default NewPost;