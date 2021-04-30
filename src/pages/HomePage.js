import React from 'react'
import '../styles/HomePage.css';
import MessageForm from '../components/MessageForm';
import Message from '../components/Message';
import ListeMessage from '../components/ListeMessage';
import ZoneStatistique from '../components/ZoneStatistique';

function HomePage(props) {
    return (
        <div className="main_body" id="main_body">
            <div className="col1"><ZoneStatistique /></div>
            <div className="col2">
                <MessageForm />
                <ListeMessage />
                {/* <Message author_name={'Jean-Pierre'} author_id={'@jean-pierre-twitter'}
                    text={'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. #css'}
                    date={'11:39 AM - 29 avril 2021'} />
                <Message author_name={'Jean-Pierre'} author_id={'@jean-pierre-twitter'}
                    text={'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. #html'}
                    date={'11:22 AM - 29 avril 2021'} /> */}
            </div>
        </div>
    )
}

export default HomePage


