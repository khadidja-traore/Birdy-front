import React from 'react';
//import ListeMessage from './ListeMessage';
import NavigationPanel from './NavigationPanel';
import Signup from './Signup';
import MessageForm from './MessageForm';
import ListeMessage from './ListeMessage';


class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isConnected: false, page_courante: "login" };  //page de connexion
        this.getConnected = this.setConnected.bind(this);
        this.setLogout = this.setLogout.bind(this);
        this.setSignup = this.setSignup.bind(this);
    }

    setConnected = () => {
        this.setState({ isConnected: true, page_courante: "mainpage" });  //mur de tweets 
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
            {/* <h1> Twister </h1> */}
            { this.state.page_courante !== "signup" && <NavigationPanel login={this.setConnected} logout={this.setLogout} isConnected={this.state.isConnected} signup={this.setSignup} />}
            <main>
                {this.state.page_courante === "signup" && <Signup login={this.setConnected} logout={this.setLogout} />}
                {this.state.page_courante === "mainpage" && <MessageForm />}
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