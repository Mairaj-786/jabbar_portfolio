import React from 'react'
import './home.css'
import Intro from '../Intro/Intro'
import Bannrer from '../Banner/Bannrer'
import Services from '../MyServices/Services'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
const Home = () => {
    return (
        <div className='home'>
            <Bannrer />
            <Intro />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home
