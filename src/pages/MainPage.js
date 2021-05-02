import React from 'react';
//import ListeMessage from './ListeMessage';
import NavigationPanel from './NavigationPanel';
import Signup from '../components/Signup';
import MessageForm from '../components/MessageForm';
import ListeMessage from '../components/ListeMessage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';


class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isConnected: false, page_courante: "login", user_connected:0 , login_connected: ''};  //page de connexion
        //this.state = {isConnected: true, page_courante: 'mainpage'}; // tmp for view the mainpage
        
    }

    setConnected = () => {
        this.setState({ isConnected: true, page_courante: "mainpage" }); 
    }

    setProfile = () => {
        this.setState({ isConnected: true, page_courante: "profilepage" }); //show profile page
    }

    setLogout = () => {
        this.setState({ isConnected: false, page_courante: "login" })  //renvoie page de connexion //*{this.state.page_courante === "mainpage" && <ListeMessage/>}
    }

    setSignup = () => {
        this.setState({ isConnected: false, page_courante: "signup" })

    }

    setUserconnected = (userid, login) => {  //établit la session, défini l'id et le nom de l'utilisateur connecté
        this.setState({user_connected: userid, login_connected: login})
    }

    render() {
        return (<div>
            { this.state.page_courante !== "signup" && <NavigationPanel login={this.setConnected} logout={this.setLogout} isConnected={this.state.isConnected} signup={this.setSignup} profile={this.setProfile} user_session={this.setUserconnected} user_id={this.state.user_connected} user_login={this.state.login_connected}/>}
            <main>
                {this.state.page_courante === "signup" && <Signup logout={this.setLogout} />}
                {this.state.page_courante === "mainpage" && <HomePage user_id={this.state.user_connected} user_login={this.state.login_connected}/>}
                {this.state.page_courante === "profilepage" && <ProfilePage user_id={this.state.user_connected} user_login={this.state.login_connected}/>}
            </main>

        </div>);

    }

}

export default MainPage;

// reste à créer les autres composants, les trier selon la page à afficher/l'organisation choisie
//faire des disjonctions de cas peut être
//ajouter les feuilles de style, interaction utilisateur

//pour le serveur, recherche des derniers messages, message d'une personne, mot clé 
//{this.state.page_courante === "mainpage" && <ListeMessage />}

//{this.state.page_courante === "mainpage" && <MessageForm /> }