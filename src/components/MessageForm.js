import React from 'react';
import '../styles/MessageForm.css';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        //en props un fonction qui récupère les infos écrites
    }

    addMessage = () => {
        console.log('Message added!')
    }

    render() {
        return (
            <div className='message_form_container'>
                <div className='user_icon_col'>
                    <div className='user_icon'></div>
                </div>
                <div className='message_form_content'>
                    <div className='input_area'>
                        <form>
                            <textarea className='input_area_inner' placeholder="What's happening?"></textarea>
                        </form>
                    </div>
                    <div className='toolbar_area'>
                        <div onClick={this.addMessage} className="post_button">Tweet</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MessageForm;