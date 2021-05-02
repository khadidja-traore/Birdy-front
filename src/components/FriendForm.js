import React from 'react';
import '../styles/FriendForm.css';
import { apiFriend } from './Api';

const FriendForm = () => {
    const [friend, setFriend] = React.useState('')

    const addFriend = async () => {
        if (!friend) {
            alert('Please input the name of the user. It can not be empty.')
            return
        }
        let res = await apiFriend.post('/friends', {
            firstUser: 'Camille', secondUser: friend
        })
        console.log(res);
        setFriend('');
    }

    return (
        <div className='friend_form_container'>
            <div className='friend_input_area'>
                <form>
                    <textarea className='friend_input_area_inner' placeholder="Username" value={friend}
                        onChange={(e) => setFriend(e.target.value)}></textarea>
                </form>
            </div>
            <div onClick={addFriend} className="add_friend_button">Add Friend</div>
        </div>
    )
}

export default FriendForm;