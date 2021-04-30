import React from 'react';
import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <div className="navbar" id="main_navbar">
            <div className="navbar_inner">
                <div className="navbar_col1">
                    <div onClick={props.login} className="logo"></div>
                </div>
                <div className="navbar_col2">
                    {/* <div className="searchbox_wrapper">Search for messeages and friends</div> */}
                    <form>
                        <input className="searchbox" type="text" name="search" placeholder="Search..."></input>
                    </form>
                </div>
                <div className="navbar_col3 right_navbar_section">
                    <div className="profile_navbar_col1">
                        <div onClick={props.profile} className="profile_button"></div>
                        <div onClick={props.profile} className='profile_name'>Camille</div>
                    </div>
                    <div class="profile_navbar_col2">
                        <div onClick={props.logout} className="logout_button">Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
