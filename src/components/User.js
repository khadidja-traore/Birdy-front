import React from 'react';
import '../styles/User.css';
import { apiFriend } from '../components/Api';

const User = ({ viewuser, user_view, user_name}) => {
    return (
        <div className='user_container'>
            <div className='user_user_icon_col'>
                <div onClick={() => viewuser(user_view, user_name)} className='user_user_icon'></div>
            </div>
            <div className='user_name_col'>
                <div onClick={() => viewuser(user_view, user_name)}  className='user_name'>{user_name}</div>
                {/* <div className='friend_id'>{friend_id}</div> */}
            </div>
        </div>
    )
}

export default User;