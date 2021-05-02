import React from 'react'
import '../styles/ProfilePage.css';
import ListeMessage from '../components/ListeMessage'
import ListeUser from '../components/ListeUser'
import { apiFriend } from '../components/Api';
import { apiMessage } from '../components/Api';

function ProfileUser({ user_id, user_view, login_view, viewuser }) {
    const [friends, setFriends] = React.useState([]);
    const [messages, setMessages] = React.useState([]);

    // only friends of this user
    const fetchFriends = async () => {
        let data = await apiFriend.get(`/friends/liste/${login_view}`).then(({ data }) => data);
        console.log(data);
        setFriends(data);
    }

    // only messages of this user
    const fetchMessages = async () => {
        let data = await apiMessage.get(`/message/${user_view}`).then(({ data }) => data);
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
                    Friends :
                </div>
                <ListeUser user_id={user_id} users={friends} viewuser={viewuser} />
            </div>
            <div className="col2">
                <ListeMessage messages={messages} />
            </div>
        </div>
    )
}

export default ProfileUser