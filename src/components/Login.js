import React from 'react';
import { apiUser } from './Api';
import produce from 'immer';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { login: '', password: '' };

    }

    send = () => {
        
        apiUser.post("/user/login", { "login": this.state.login, "password": this.state.password })
            .then((response) => {
                console.log(response);
                this.response_login(response);
            })
            .catch((e) => alert(e.message +"\n\n400: Requête invalide : login et password nécessaires \n401: Utilisateur inconnu \n403: login et/ou mot de passe invalide(s)\n500: Erreur interne "))

        //this.props.login(this.state.status, this.state.message);
    }

    response_login = (response) => {
        if (response.data["status"] == 200) {
            this.props.user_session(response.data.id_user, this.state.login )       //définir la session de l'utilisateur
            //this.setState({user_connected: response.data.id_user})     //identifiant de l'utilisateur
            this.props.login();
            //this.setState({ status: response.data["status"], message: response.data["message"] })
        }

    }

    handleInputChange = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
/*
        const target = event.target;
        const name = target.name;
        if (name === "login") {
            this.setState({ login_value: event.target.value });
        }
        if (name === "password") {
            this.setState({ password_value: event.target.value });
        }*/
    }

    render() {
        return (<div> Prêt à etre connecté ? Formulaire de connexion  </div>,
            <body>
                <h1 class="page_title">Ouvrir une session</h1>
                <section id="login_form">
                    <form>
                        <label for="login" class="label">Login:</label>
                        <input type="text" id="login" name="login" placeholder="Login" value={this.state.login} onChange={this.handleInputChange} />
                        <label for="password" class="label">Mot de Passe:</label>
                        <input type="password" id="password" name="password" placeholder="Mot de Passe" value={this.state.password} onChange={this.handleInputChange} />
                    </form>
                    <button class="button" onClick={() => this.send()} > Connexion </button>
                    <div>
    
                        <a> Pas encore inscrit ? <button onClick={() => this.props.signup()}> S'inscrire </button> </a>
                    </div>
                </section>
            </body>
        )
    }
}

export default Login;