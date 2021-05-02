import React from 'react';
import '../styles/Navbar.css';
import { apiUser } from './Api';

function Navbar({ logout, profile, login, user_id, user_login, search}) {
    const [searchWord, setSearchWord] = React.useState('');

    const send = () => {
        apiUser.delete(`/user/logout/${user_id}`)
            .then(() => logout())
            .catch((e) => alert(e.message + "\requte de logout \n500: Erreur interne"))
    }

    return (
        <div className="navbar" id="main_navbar">
            <div className="navbar_inner">
                <div className="navbar_col1">
                    <div onClick={login} className="logo"></div>
                </div>
                <div className="navbar_col2">
                    <form>
                        <input className="searchbox" type="text" name="search" placeholder="Search..." value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}></input>
                    </form>
                    <div onClick={() => { search(searchWord) }} className="search_button">Search</div>
                </div>
                <div className="navbar_col3 right_navbar_section">
                    <div className="profile_navbar_col1">
                        <div onClick={profile} className="profile_button"></div>
                        <div onClick={profile} className='profile_name'>{user_login}</div>
                    </div>
                    <div className="profile_navbar_col2">
                        <div onClick={() => { send() }} className="logout_button">Déconnexion</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
