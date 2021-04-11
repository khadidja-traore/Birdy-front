import React from 'react'; 


class Login extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
     
        return (<div> Prêt à etre connecté ? Formulaire de connexion  </div>, 
        <body>
    <h1 class="page_title">Ouvrir une session</h1>
    <section id="login_form">
        <form>
            <label for="login" class="label">Login:</label>
            <input type="text" id="login" name="login" placeholder="Login"/>
            <label for="password" class="label">Mot de Passe:</label>
            <input type="password" id="password" name="password" placeholder="Mot de Passe"/>
        </form>
        <button class="button" onClick =  {() => this.props.login() } > Connexion </button>
        <div>
            <a href="https://www.google.com/">Mot de passe perdu</a><br/>
            <a> Pas encore inscrit ? <button onClick = {() => this.props.signup() }> S'inscrire </button> </a>
        </div>
    </section>
</body>
    )}
}

export default Login;