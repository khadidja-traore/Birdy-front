import React from 'react';
import '../styles/Friend.css';
import { apiFriend } from '../components/Api';

const Friend = ({ deleteFriend, friend_id, friend_name}) => {
    // Can we use username to delete friends?
    // const fetchId = async () => {
    //     let data = await apiFriend.get('/friends').then(({ data }) => data);
    //     setFriends(data);
    // }
    
    return (
        <div className='friend_container'>
            <div className='friend_user_icon_col'>
                <div onClick={() => deleteFriend(friend_name)} className='friend_user_icon'></div>
            </div>
            <div className='friend_name_col'>
                <div className='friend_name'>{friend_name}</div>
                <div className='friend_id'>{friend_id}</div>
            </div>
        </div>
    )
}

export default Friend;