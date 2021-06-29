import React from 'react'
import './services.css'
import LanguageIcon from '@material-ui/icons/Language';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AppleIcon from '@material-ui/icons/Apple';
const Services = () => {


    return (
        <div className='services'>
            <strong className="text-center">My <span id='red'>Service</span></strong>
            <div className="services_wrapper">
                <div className="row">
                    <div className='col-lg-4 col-md-3 m-auto p-2'>
                        <div className="services_card">
                            <div className="icon">
                                <LanguageIcon style={{ fontSize: '36px', border: '1px solid red' }} className="icon_wrapper" />
                                <h3>WEB DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-3 m-auto p-2'>
                        <div className="services_card">
                            <div className="icon">
                                <PhotoCameraIcon style={{ fontSize: '36px', border: '1px solid red' }} className="icon_wrapper" />
                                <h3>WEB DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-3 m-auto p-2'>
                        <div className="services_card">
                            <div className="icon">
                                <AppleIcon style={{ fontSize: '36px', border: '1px solid red' }} className="icon_wrapper" />
                                <h3>WEB DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-3 m-auto p-2'>
                        <div className="services_card">
                            <div className="icon">
                                <AppleIcon style={{ fontSize: '36px', border: '1px solid red' }} className="icon_wrapper" />
                                <h3>WEB DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-3 m-auto p-2'>
                        <div className="services_card">
                            <div className="icon">
                                <AppleIcon style={{ fontSize: '36px', border: '1px solid red' }} className="icon_wrapper" />
                                <h3>WEB DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-3 m-auto p-2'>
                        <div className="services_card">
                            <div className="icon">
                                <AppleIcon style={{ fontSize: '36px', border: '1px solid red' }} className="icon_wrapper" />
                                <h3>WEB DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
