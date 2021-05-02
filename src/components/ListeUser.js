import React from 'react';
import User from './User';

// change from react component to function, in order to intergrate useState

const ListeUser = ({user_id, users, viewuser}) => {
    return (
        <>
            {users.map((user) => (
                // Version with friend_id
                // <Friend friend_id={friend.friend_id} friend_name={friend.friend_name}></Friend>
                (user.id != user_id ) && 
                <User viewuser={viewuser} user_id={user.id} user_name={user.login}></User>
            
            ))}
        </>
    )
}

export default ListeUser;
