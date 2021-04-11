import React from 'react';
import Logout from './components/Logout';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage'

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
        const { login, logout, isConnected, signup } = this.props;
        return <nav id="navPanel">
            {isConnected
                // ? <Logout logout={logout} />
                ? <HomePage logout={logout} />
                : <Login login={login} signup={signup} />}
        </nav>
    }
}

export default NavigationPanel;