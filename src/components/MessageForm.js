import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        //en props un fonction qui récupère les infos écrites
    }

    /*
    addMessage = () => {
        this.props.onAddMessage()
    }
    */

    render() {
        return (<form id="ecrire_message">
            <label> Ecrivez un nouveau message </label>
            <textarea></textarea>
            <button type="button" /*onClick={() => { addMessage() }}*/>Poster un message </button>
        </form>)
    }

}

export default MessageForm;