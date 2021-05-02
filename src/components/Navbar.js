//import { ReactComponent } from '*.svg';
import React from 'react';
import '../styles/Navbar.css';
import {apiUser} from './Api';

class Navbar extends React.Component {


    send = () => {
        apiUser.delete(`/user/logout/${this.props.user_id}`)
        .then(() => this.props.logout())
        .catch((e) => alert(e.message + "\requte de logout \n500: Erreur interne"))
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
                        <input className="searchbox" type="text" name="search" placeholder="Search..."></input>
                    </form>
                </div>
                <div className="navbar_col3 right_navbar_section">
                    <div className="profile_navbar_col1">
                        <div onClick={this.props.profile} className="profile_button"></div>
                        <div onClick={this.props.profile} className='profile_name'>{this.props.user_login}</div>
                    </div>
                    <div className="profile_navbar_col2">
                        <div onClick={() => {this.send()}} className="logout_button">Déconnexion</div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Navbar;
