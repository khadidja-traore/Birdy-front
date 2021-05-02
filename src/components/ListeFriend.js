import React from 'react';
import Friend from './Friend';

const ListeFriend = ({ friends, deleteFriend}) => {
    return (
        <>
            {friends.map((friend) => (
                <Friend deleteFriend={deleteFriend} friend_name={friend}></Friend>
            ))}
        </>
    )
}

export default ListeFriend;
