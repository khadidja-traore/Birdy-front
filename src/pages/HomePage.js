import React from 'react'
import Navbar from '../components/Navbar'

function HomePage(props) {
    return (
        <Navbar logout={props.logout} />
    )
}

export default HomePage


