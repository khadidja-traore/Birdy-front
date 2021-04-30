import React from 'react';
import Friend from './Friend';

// change from react component to function, in order to intergrate useState

const ListeFriend = () => {
    const [friends, setFriends] = React.useState([
        { friend_id: '@valentine_twitter', friend_name: 'Valentine' },
        { friend_id: '@nathan_twitter', friend_name: 'Nathan' },
        { friend_id: '@lucas_twitter', friend_name: 'Lucas' }]);

    return (
        <>
            {friends.map((friend) => (
                <Friend friend_id={friend.friend_id} friend_name={friend.friend_name}></Friend>
            ))}
        </>
    )
}

export default ListeFriend;
