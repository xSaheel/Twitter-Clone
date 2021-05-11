import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../actions/dataActions';

const NewPost = () => {
    const dispatch = useDispatch();
    
    const [text, setText] = useState('');

    const addPost = (e) => {
        e.preventDefault();
        const newTweet = {
            id: Math.floor(Math.random()*100000000),
            author: 'Anonymous',
            text: text,
            likes: 0,
            date: new Date().toDateString()
        };
        setText('');
        dispatch(addData(newTweet));
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