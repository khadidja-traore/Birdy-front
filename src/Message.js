import React from 'react';

class Message extends React.Component{

    constructor(props){
        super(props);//recoit le texte du message en propriété
    }
    
    render(){
        const {author_id, author_name, date, text, _id} =  this.props;

        return <div className="Message" > {author_name, text, date } </div>
    }

}

export default Message; 