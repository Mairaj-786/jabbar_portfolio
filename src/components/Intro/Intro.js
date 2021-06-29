import React from 'react'
import './intro.css'
const Intro = () => {
    return (
        <div className="intro">
            <div className="left_side">
                <div className="IMG">
                    <img src="images/jb.jpg" />
                </div>
            </div>
            <div className="right_side">
                <strong>Hello, I Am Ab Jabbar Iqbal</strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.
                </p>
                <div className="bio_data">
                    <div className="name">
                        <strong>
                            Name
                        </strong>
                        <p>: Ab Jabbar</p>
                    </div>
                    <div className="name">
                        <strong>
                            Email
                        </strong>
                        <p>: jabbar@gmail.com</p>
                    </div>
                    <div className="name">
                        <strong>
                            Phone
                        </strong>
                        <p>: +9233 000 000 00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro
