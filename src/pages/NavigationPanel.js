import React from 'react';
import Logout from '../components/Logout';
import Login from '../components/Login';
import Signup from '../components/Signup';
import HomePage from '../pages/HomePage'
import Navbar from '../components/Navbar';

class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    LoginOuLogout() {
        if (this.props.isConnected == true) {
            return <Logout att_logout={this.props.logout} />
            // return <HomePage />
        }
        else {
            return <Login att_login={this.props.login} />
        }
        /*
        { !isConnected && <p>
            Pas encore inscrit ? 
            <button onClick = {() => signup() }> S'inscrire </button> </p>}
        */
    }

    render() {
        const { login, logout, isConnected, signup, profile } = this.props;
        return <nav id="navPanel">
            {isConnected
                ? <Navbar logout={logout} profile={profile} login={login}/> // Is a sperate function as login needed for switching back to homepage
                : <Login login={login} signup={signup} />}
        </nav>
    }
}

export default NavigationPanel;