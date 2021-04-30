import React from 'react';
import Message from './Message';
import { apiMessage } from './Api';

// change from react component to function, in order to intergrate useState



const ListeMessage = () => {
    
    // const [messages, setMessages] = React.useState([{
    //     author_id: '@jean-pierre-twitter', author_name: 'Jean-Pierre', date: '11:39 AM - 29 avril 2021',
    //     text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. #css', _id: "007"
    // }, {
    //     author_id: '@nathan-twitter', author_name: 'Nathan', date: '11:39 AM - 29 avril 2021',
    //     text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. #css', _id: "007"
    // }]);

    const [messages, setMessages] = React.useState([]);

    // React.useEffect(() => {
    //     const fetchMessages = asyn () => {
    //         const res = await fetch 
    //     }
    //     fetchMessages()
    // }, []);

    // React.useEffect(() => {
    //     const getMessages = async () => {
    //         const fetchedMessages = await fetchMessages()
    //         console.log(fetchedMessages)
    //         setMessages(fetchedMessages)
    //     }
    //     getMessages()
    // }, [])

    // const fetchMessages = async () => {
    //     apiMessage.get('/message').then(res => {
    //         console.log(res.data)
    //         return res.data
    //     })
    // };

    const fetchMessages = async () => {
        let data = await apiMessage.get('/message').then(({data}) => data);
        // console.log(data);
        setMessages(data);
        console.log(messages)
    } 

    React.useEffect(() => {
        fetchMessages();
    })

    return (
        <>
            {messages.map((message) => (
                <Message author_id={message.author_id} author_name={message.author_name} date={message.date} text={message.text} _id={message._id} />
            ))}
        </>
    )
}

export default ListeMessage;
