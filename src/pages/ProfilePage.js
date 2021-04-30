import React from 'react'
import '../styles/ProfilePage.css';
import ListeMessage from '../components/ListeMessage'
import ListeFriend from '../components/ListeFriend'

function ProfilePage(props) {
    return (
        <div className="main_body" id="main_body">
            <div className="col1">
                <div className='friend_header'>
                    Friends:
                </div>
                <ListeFriend />
            </div>
            <div className="col2">
                <ListeMessage />
            </div>
        </div>
    )
}

export default ProfilePage