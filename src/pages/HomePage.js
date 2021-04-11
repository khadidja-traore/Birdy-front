import React from 'react'
import '../styles/HomePage.css';
import MessageForm from '../components/MessageForm'

function HomePage(props) {
    return (
        <div className="main_body" id="main_body">
            <div className="col1">Zone Statistique</div>
            <div className="col2">
                <MessageForm />
            </div>
        </div>
    )
}

export default HomePage


