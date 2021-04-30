import React from 'react';
import { apiUser } from './Api';
import produce from 'immer';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { login_value: 'jj', password_value: 'll', status: 0, message: '' };

    }

    send = () => {
        /*const apiUser = axios.create({
            baseURL : 'http://localhost:4000/apiUser/',
            timeout : 1000,
            headers : {'X-Custom-Header' : 'foobar'}
            });
        */
        //const axios = require('axios');
        //axios.post("http://localhost:4000/apiUser/user/login",{login: this.login_value, password: this.passwod_value},)
        apiUser.post("/user/login", { "login": this.state.login_value, "password": this.state.password_value })
            .then((response) => {
                this.response_login(response);
            })
            .catch((e) => alert(e.message))

        this.props.login(this.state.status, this.state.message);
    }

    response_login = (response) => {
        if (response.data["status"] != 200) {
            this.setState({ status: response.data["status"], message: response.data["message"] })
        }

    }

    handleInputChange = (event) => {

        const target = event.target;
        const name = target.name;
        if (name === "login") {
            this.setState({ login_value: event.target.value });
        }
        if (name === "password") {
            this.setState({ password_value: event.target.value });
        }
    }

    /*
        handleChange(event) {
            this.setState({value: event.target.value});
          }
    */
    render() {
        return (<div> Prêt à etre connecté ? Formulaire de connexion  </div>,
            <body>
                <h1 class="page_title">Ouvrir une session</h1>
                <section id="login_form">
                    <form>
                        <label for="login" class="label">Login:</label>
                        <input type="text" id="login" name="login" placeholder="Login" value={this.state.login_value} onChange={this.handleInputChange} />
                        <label for="password" class="label">Mot de Passe:</label>
                        <input type="password" id="password" name="password" placeholder="Mot de Passe" value={this.state.password_value} onChange={this.handleInputChange} />
                    </form>
                    <button class="button" onClick={() => this.send()} > Connexion </button>
                    <div>
                        <a href="https://www.google.com/">Mot de passe perdu</a><br />
                        <a> Pas encore inscrit ? <button onClick={() => this.props.signup()}> S'inscrire </button> </a>
                    </div>
                </section>
            </body>
        )
    }
}

export default Login;