import React from 'react'
import './portfolio.css'
const Portfolio = () => {
    return (
        <div className="portfolio">
            <strong className="text-center text-uppercase">My <span id='red'>Portfolio</span></strong>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-12 mx-auto">
                    <div className="portfolio_wrapper">
                        <img src="images/portf.jpg" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12 mx-auto">
                    <div className="portfolio_wrapper">
                        <img src="images/portf.jpg" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12 mx-auto">
                    <div className="portfolio_wrapper">
                        <img src="images/portf.jpg" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12 mx-auto">
                    <div className="portfolio_wrapper">
                        <img src="images/portf.jpg" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12 mx-auto">
                    <div className="portfolio_wrapper">
                        <img src="images/portf.jpg" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12 mx-auto">
                    <div className="portfolio_wrapper">
                        <img src="images/portf.jpg" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
