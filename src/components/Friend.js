import React from 'react';
import '../styles/Friend.css';

const Friend = ({ deleteFriend, friend_id, friend_name}) => {
    return (
        <div className='friend_container'>
            <div className='friend_user_icon_col'>
                <div onClick={() => deleteFriend(friend_name)} className='friend_user_icon'></div>
            </div>
            <div className='friend_name_col'>
                <div className='friend_name'>{friend_name}</div>
            </div>
        </div>
    )
}

export default Friend;