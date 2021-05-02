import React from 'react'
import '../styles/ProfilePage.css';
import '../styles/FriendForm.css';
import ListeMessage from '../components/ListeMessage'
import ListeFriend from '../components/ListeFriend'
import { apiFriend } from '../components/Api';
import { apiMessage } from '../components/Api';

function ProfilePage({ user_id, user_login }) {
    const [friend, setFriend] = React.useState('');
    const [friends, setFriends] = React.useState([]);
    const [messages, setMessages] = React.useState([]);

    // only friends of this user
    const fetchFriends = async () => {
        let data = await apiFriend.get(`/friends/liste/${user_login}`).then(({ data }) => data);
        console.log(data);
        setFriends(data);
    }

    const addFriend = async () => {
        if (!friend) {
            alert('Please input the name of the user. It can not be empty.')
            return
        }
        let res = await apiFriend.post('/friends', {
            firstUser: user_login, secondUser: friend
        }).catch((e) => alert(e.message + "\n\n400: Déjà amis \n401: Ami inconnu\n403: Pas d'amitié avec soi même\n500: Erreur interne"));
        setFriend('');
        fetchFriends();
    }

    const deleteFriend = async (friend_name) => {
        let res = await apiFriend.delete(`/friends/${friend_name}`).catch((e) => alert(e.message));
        fetchFriends();
    }
    
    // only messages of this user
    const fetchMessages = async () => {
        let data = await apiMessage.get(`/message/${user_id}`).then(({ data }) => data);
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
                <ListeFriend friends={friends} deleteFriend={deleteFriend} />
            </div>
            <div className="col2">
                <ListeMessage messages={messages} />
            </div>
        </div>
    )
}

export default ProfilePage