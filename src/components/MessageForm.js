import React from 'react';
import '../styles/MessageForm.css';
import { apiMessage } from './Api';

const MessageForm = () => {
    const [text, setText] = React.useState('')


    const postMessage = async () => {
        if (!text) {
            alert('Please input text message. It can not be empty.')
            return
        }

        let res = await apiMessage.post('/message/187239004', {
            author_name: 'Camille', texte: text
        })
        console.log(res);
        setText('');
    }

    return (
        <div className='message_form_container'>
            <div className='user_icon_col'>
                <div className='user_icon'></div>
            </div>
            <div className='message_form_content'>
                <div className='input_area'>
                    <form>
                        <textarea className='input_area_inner' placeholder="What's happening?" value={text}
                            onChange={(e) => setText(e.target.value)}></textarea>
                    </form>
                </div>
                <div className='toolbar_area'>
                    <div onClick={postMessage} className="post_button">Tweet</div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm;