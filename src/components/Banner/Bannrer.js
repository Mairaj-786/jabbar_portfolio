import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Typed from 'react-typed';
import './banner.css'
const Bannrer = () => {
    return (
        <div className='banner'>
            <div className="left_side_text">
                <strong>Welcome !</strong>
                <h2>
                    <Typed
                        strings={[
                            'Freelance Email Sraping',
                            'Freelance Data Minig',
                            'Freelance Yellow Page Extract']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed>
                </h2>
                <p>
                    I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...
                </p>
                <div className="social_icons">
                    <ul>
                        <li><a href="#"><FacebookIcon /></a></li>
                        <li><a href="#"><TwitterIcon /></a></li>
                        <li><a href="#"><InstagramIcon /></a></li>
                        <li><a href="#"><LinkedInIcon /></a></li>
                    </ul>
                </div>
            </div>
            <div className="right_side_img">
                <div className="right_side_img_wrapper">
                    <img src="/images/profile.png" />
                </div>
            </div>
        </div>
    )
}

export default Bannrer
