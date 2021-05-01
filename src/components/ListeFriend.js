import React from 'react';
import Friend from './Friend';
import { apiFriend } from './Api';

// change from react component to function, in order to intergrate useState

const ListeFriend = ({ friends, deleteFriend}) => {
    // Mock Data
    // const [friends, setFriends] = React.useState([
    //     { friend_id: '@valentine_twitter', friend_name: 'Valentine' },
    //     { friend_id: '@nathan_twitter', friend_name: 'Nathan' },
    //     { friend_id: '@lucas_twitter', friend_name: 'Lucas' }]);

    return (
        <>
            {friends.map((friend) => (
                // Version with friend_id
                // <Friend friend_id={friend.friend_id} friend_name={friend.friend_name}></Friend>
                <Friend deleteFriend={deleteFriend} friend_id={12300914} friend_name={friend.secondUser}></Friend>
            ))}
        </>
    )
}

export default ListeFriend;
