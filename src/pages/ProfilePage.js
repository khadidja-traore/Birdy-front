import React from 'react'
import '../styles/ProfilePage.css';
import '../styles/FriendForm.css';
import ListeMessage from '../components/ListeMessage'
import ListeFriend from '../components/ListeFriend'
import { apiFriend } from '../components/Api';
import { apiMessage } from '../components/Api';

function ProfilePage(props) {
    const [friend, setFriend] = React.useState('');
    const [friends, setFriends] = React.useState([]);
    const [messages, setMessages] = React.useState([]);

    const fetchFriends = async () => {
        let data = await apiFriend.get('/friends').then(({ data }) => data);
        setFriends(data);
    }

    const addFriend = async () => {
        if (!friend) {
            alert('Please input the name of the user. It can not be empty.')
            return
        }
        let res = await apiFriend.post('/friends', {
            firstUser: 'Camille', secondUser: friend
        }).catch((e) => alert(e.message));
        setFriend('');
        fetchFriends();
    }

    const deleteFriend = async (id) => {
        let res = await apiFriend.delete(`/friends/${id}`).catch((e) => alert(e.message));
        fetchFriends();
    }

    const fetchMessages = async () => {
        let data = await apiMessage.get('/message').then(({ data }) => data);
        var sorted_data = data.sort((a, b) => {
            return new Date(a.date).getTime() -
                new Date(b.date).getTime()
        }).reverse();
        setMessages(sorted_data);
    }

    React.useEffect(() => {
        fetchMessages();
        fetchFriends();
    }, [])

    return (
        <div className="main_body" id="main_body">
            <div className="col1">
                <div className='friend_header'>
                    Friends:
                </div>
                <div className='friend_form_container'>
                    <div className='friend_input_area'>
                        <form>
                            <textarea className='friend_input_area_inner' placeholder="Username" value={friend}
                                onChange={(e) => setFriend(e.target.value)}></textarea>
                        </form>
                    </div>
                    <div onClick={() => { addFriend() }} className="add_friend_button">Add Friend</div>
                </div>
                <ListeFriend friends={friends} deleteFriend={deleteFriend}/>
            </div>
            <div className="col2">
                <ListeMessage messages={messages} />
            </div>
        </div>
    )
}

export default ProfilePage