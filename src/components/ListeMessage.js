import React from 'react';
import Message from './Message';
import { apiMessage } from './Api';

// change from react component to function, in order to intergrate useState

const ListeMessage = ({ messages }) => {
    return (
        <>
            {messages.map((message) => (
                <Message author_id={message.author_id} author_name={message.author_name} date={message.date} text={message.text} _id={message._id} />
            ))}
        </>
    )
}

export default ListeMessage;
