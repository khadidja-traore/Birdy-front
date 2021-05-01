import React from 'react';
import { apiUser } from './Api';
import Login from './Login';

class Signup extends React.Component {    //formulaire d'inscription

    constructor(props) {
        super(props);
        this.state = {login:'', password:'', lastname:'', firstname:''};
    }

    send = () => {
        apiUser.post("/user", {"login": this.state.login , "password": this.state.password, "lastname": this.state.lastname , "firstname": this.state.firstname})
        .then((response) => {
            alert("Inscription réussie !\nVous pouvez vous connecter !");
            this.props.logout();
        })
        .catch((e) => alert(e.message + "\n\n400: Paramètres manquants\n409: Utilisateur déjà existant\n500: Erreur interne"))
    }

    handleInputChange =  (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});

    }
/*
    response_signup = (response) => {
        if (response.data["status"] == 201) {
            this.props.logout();
            //this.setState({ status: response.data["status"], message: response.data["message"] })
        }

    }
    */

    render() {

        return (
            <body>
                {/* <h1 class="page_title">Enregistrement</h1> */}
                <section id="signup_form">
                    <form>
                        <label for="firstname" class="label">Prénom:</label>
                        <input type="text" name="firstname" placeholder="Prenom" value={this.state.firstname} onChange={this.handleInputChange} />

                        <label for="lastname" class="label">Nom:</label>
                        <input type="text" name="lastname" placeholder="Nom" value={this.state.lastname} onChange={this.handleInputChange} />

                        <label for="login" class="label">Login:</label>
                        <input type="text" name="login" placeholder="Login" value={this.state.login} onChange={this.handleInputChange}/>

                       
                        <label for="password" class="label">Mot de Passe:</label>
                        <input type="password" name="password" placeholder="Mot de Passe" value={this.state.password} onChange={this.handleInputChange} />

                      
                    </form>
                    <button class="signup_button" onClick={() => this.send()} > Inscription </button>
                    <button class="signup_button" onClick={() => this.props.logout()} >Annuler</button>
                </section>

              
            </body>)
    }
}

export default Signup;