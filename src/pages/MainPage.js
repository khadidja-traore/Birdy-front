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
        // this.state = { isConnected: false, page_courante: "login" };  //page de connexion
        this.state = {isConnected: true, page_courante: 'mainpage'}; // tmp for view the mainpage
        // this.getConnected = this.setConnected.bind(this);
        // this.setLogout = this.setLogout.bind(this);
        // this.setSignup = this.setSignup.bind(this);
        // this.setProfile = this.setProfile.bind(this);
    }

    setConnected = (status, msg) => {
        if (status == 200){
           this.setState({ isConnected: true, page_courante: "mainpage" }); 
        }

          //mur de tweets 
        return 0;
    }

    setProfile = () => {
        this.setState({ isConnected: true, page_courante: "profilepage" }); //show profile page
        return 0;
    }

    setLogout = () => {
        this.setState({ isConnected: false, page_courante: "login" })  //renvoie page de connexion //*{this.state.page_courante === "mainpage" && <ListeMessage/>}
    }

    setSignup = () => {
        this.setState({ isConnected: false, page_courante: "signup" })

    }
    render() {
        return (<div>
            { this.state.page_courante !== "signup" && <NavigationPanel login={this.setConnected} logout={this.setLogout} isConnected={this.state.isConnected} signup={this.setSignup} profile={this.setProfile}/>}
            <main>
                {this.state.page_courante === "signup" && <Signup login={this.setConnected} logout={this.setLogout} />}
                {this.state.page_courante === "mainpage" && <HomePage />}
                {this.state.page_courante === "profilepage" && <ProfilePage />}
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