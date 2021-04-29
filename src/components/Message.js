import React from 'react';
import '../styles/Message.css';

class Message extends React.Component {

    constructor(props) {
        super(props); //recoit le texte du message en propriété
    }

    render() {
        const { author_id, author_name, date, text, _id } = this.props;

        return (
            <div className='message_container'>
                <div className='user_icon_col'>
                    <div className='other_user_icon'></div>
                </div>
                <div className='message_content'>
                    <div className='username_area'>
                        <div className='author_name'>{author_name}</div>
                        <div className='author_id'>{author_id}</div>
                    </div>
                    <div className='message_text_area'>{text}</div>
                    <div className='date_area'>{date}</div>
                    <div className='like_comment_area'>
                        <div className='like_col'>Like</div>
                        <div className='comment_col'>Comment</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Message;