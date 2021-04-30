import React from 'react'
import '../styles/ProfilePage.css';
import ListeMessage from '../components/ListeMessage'
import ZoneStatistique from '../components/ZoneStatistique';

function ProfilePage(props) {
    return (
        <div className="main_body" id="main_body">
            <div className="col1"><ZoneStatistique /></div>
            <div className="col2">
                <ListeMessage></ListeMessage>
            </div>
        </div>
    )
}

export default ProfilePage