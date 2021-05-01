import React from 'react'; 


class Logout extends React.Component {

    constructor(props){
        super(props);
    }

    

    render(){
        return <div> <button class="button" onClick =  {() => this.props.logout() } > Déconnexion </button> </div>

    }
}

export default Logout; 