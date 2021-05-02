import React from 'react';
import User from './User';

const ListeUser = ({ user_id, users, viewuser }) => {
    return (
        <>
            {users.map((user) => (
                (user.id != user_id) &&
                <User viewuser={viewuser} user_view={user.id} user_name={user.login}></User>
            ))}
        </>
    )
}

export default ListeUser;
