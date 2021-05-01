//import { ReactComponent } from '*.svg';
import React from 'react';
import '../styles/Navbar.css';
import {apiFriend, apiUser} from './Api';
import {apiMessage} from './Api';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {text: '', filtre_amis: false, liste_amis:[]};
    }


    send_Deconnexion = () => {
        apiUser.delete(`/user/logout/${this.props.user_id}`)
        .then(() => this.props.logout())
        .catch((e) => alert(e.message + "\n500: Erreur interne"))
    }

    onChangeFiltre = () => {
        this.setState(initialState => ({filtre_amis: !initialState.filtre_amis}));
    }

    handleInputChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    send_Search = () => {
        
        apiFriend.get(`/friends/liste/${this.props.user_id}`, {"login": this.props.user_login})
        .then((response) => { this.setState({liste_amis : response.data.res }); this.response_query(response) })
        .catch((e) => alert(e.message));
    }

    response_query = () => {
        //if (this.state.filtre_amis == true) let no_list = false
        let no_list = this.state.filtre_amis == false ? 1 : 0;
        //if (this.state.text == '')
        let no_query = this.state.text == '' ? 1 : 0;


        apiMessage.get(`/message/recherche/${this.props.user_id}`, {"query": "ee"/*this.state.text*/, "listfriend": ["Ma"]/*this.state.liste_amis*/, "no_query": no_query, "no_list": no_list })
        .then((response) => {this.props.search(response.data.res)})
        .catch((e)=> alert(e.message));

    }





    render() {return (
        <div className="navbar" id="main_navbar">
            <div className="navbar_inner">
                <div className="navbar_col1">
                    <div onClick={this.props.login} className="logo"></div>
                </div>
                <div className="navbar_col2">
                    {/* <div className="searchbox_wrapper">Search for messeages and friends</div> */}
                    <form>
                        <label for="search" class="label">Recherche:</label>
                        <input className="searchbox" type="text" name="search" placeholder="Search..." value={this.state.text} onChange={this.handleInputChange}/>
                        <label for="amis" class="label" > Amis: </label>
                        <input className="checkbox" type="checkbox" name="amis" placeholder="Amis" checked={this.state.filtre_amis} onChange={this.onChangeFiltre} />

                    </form>
                    <div> <button class="button" onClick={() => this.send_Search()} > Rechercher les messages </button> </div>
                </div>
                <div className="navbar_col3 right_navbar_section">
                    <div className="profile_navbar_col1">
                        <div onClick={this.props.profile} className="profile_button"></div>
                        <div onClick={this.props.profile} className='profile_name'>{this.props.user_login}</div>
                    </div>
                    <div className="profile_navbar_col2">
                        <div onClick={() => {this.send_Deconnexion()}} className="logout_button">Déconnexion</div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Navbar;
