import React from 'react';
import Message from './Message';

class ListeMessage extends React.Component{

    constructor(props){
        super(props);
        this.state = {listemsg: [ {author_id: 1, author_name : "mario", date : "11/04/2021", text :"Le texte de Mario", _id: "007"}]}
    }

    render(){
        return <div className="ListeMessage">
            {
                this.state.listemsg.map((author_id, author_name, date, text, _id) => (
                    <Message author_id={author_id} author_name={author_name} date={date} text={text} _id={_id}/>
                ))
            }
        </div>

    }
}

export default ListeMessage;
