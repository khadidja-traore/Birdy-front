import React from 'react';
import Login from './Login';

class Signup extends React.Component {    //formulaire d'inscription

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <body>
                <h1 class="page_title">Enregistrement</h1>
                <section id="signup_form">
                    <form>
                        <label for="firstname" class="label">Prenom:</label>
                        <input type="text" name="firstname" placeholder="Prenom" />
                        <label for="lastname" class="label">Nom:</label>
                        <input type="text" name="lastname" placeholder="Nom" />
                        <label for="login" class="label">Login:</label>
                        <input type="text" name="login" placeholder="Login" />
                        <label for="email" class="label">Email:</label>
                        <input type="text" name="email" placeholder="Email" />
                        <label for="password" class="label">Mot de Passe:</label>
                        <input type="password" name="password" placeholder="Mot de Passe" />
                        <label for="repeat" class="label">Retapez le mot de passe:</label>
                        <input type="password" name="repeat" placeholder="Retapez" />
                    </form>
                    <button class="signup_button" onClick={() => this.props.login()} > Inscription </button>
                    <button class="signup_button" onClick={() => this.props.logout()} >Annuler</button>
                </section>
            </body>)
    }
}

export default Signup;