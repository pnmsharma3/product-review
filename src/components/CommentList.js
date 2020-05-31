import React, {} from 'react';
import { FaUserCircle } from 'react-icons/fa';
const CommentList = ({comments}) => {
    return ( 
        <div className="comments-container">
        {comments.map(({comment,user_name})=><div key={comment._id}> 
            <h4><FaUserCircle className="pr-3" size={50} />{user_name}</h4>
            <p className="pl-5">{comment}</p>
            <hr/>
        </div>)}

        </div>
     );
}
 
export default CommentList;