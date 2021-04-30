import React from 'react';
import Message from './Message';
import { apiMessage } from './Api';

// change from react component to function, in order to intergrate useState

const ListeMessage = () => {

    // Mock data
    // const [messages, setMessages] = React.useState([{
    //     author_id: '@jean-pierre-twitter', author_name: 'Jean-Pierre', date: '11:39 AM - 29 avril 2021',
    //     text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. #css', _id: "007"
    // }, {
    //     author_id: '@nathan-twitter', author_name: 'Nathan', date: '11:39 AM - 29 avril 2021',
    //     text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. #css', _id: "007"
    // }]);

    const [messages, setMessages] = React.useState([]);

    const fetchMessages = async () => {
        let data = await apiMessage.get('/message').then(({data}) => data);
        var sorted_data = data.sort((a,b) => {
            return new Date(a.date).getTime() - 
                new Date(b.date).getTime()
        }).reverse();
        setMessages(sorted_data);
    } 

    React.useEffect(() => {
        fetchMessages();
    }, [])

    return (
        <>
            {messages.map((message) => (
                <Message author_id={message.author_id} author_name={message.author_name} date={message.date} text={message.text} _id={message._id} />
            ))}
        </>
    )
}

export default ListeMessage;
