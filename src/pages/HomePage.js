import React from 'react'
import '../styles/HomePage.css';
import '../styles/MessageForm.css';
import ListeMessage from '../components/ListeMessage';
import ZoneStatistique from '../components/ZoneStatistique';
import { apiMessage } from '../components/Api';

function HomePage(props) {
    const [messages, setMessages] = React.useState([]);
    const [text, setText] = React.useState('')
    const [twittCount, setTwittCount] = React.useState(0);

    const fetchMessages = async () => {
        let data = await apiMessage.get('/message').then(({ data }) => data);
        var sorted_data = data.sort((a, b) => {
            return new Date(a.date).getTime() -
                new Date(b.date).getTime()
        }).reverse();
        setMessages(sorted_data);
    }

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
        fetchMessages();
        fetchTwittCount();
    }

    const fetchTwittCount = async () => {
        let data = await apiMessage.get('/message').then(({data}) => data);
        var tmp_twittCount = data.length;
        setTwittCount(data.length);
    } 

    React.useEffect(() => {
        fetchMessages();
        fetchTwittCount();
    }, [])

    return (
        <div className="main_body" id="main_body">
            <div className="col1"><ZoneStatistique twittCount={twittCount}/></div>
            <div className="col2">
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
                <ListeMessage messages={messages} />
            </div>
        </div>
    )
}

export default HomePage


