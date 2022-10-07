import React, { useEffect, useState } from 'react';

const Comments = () => {

    const [comment, setComment] = useState([])
    useEffect(()=>{
        fetch('/api/comments')
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    
    return (
        <div>
            <h1>This is Comment Page</h1>
        </div>
    );
};

export default Comments;