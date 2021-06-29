import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <strong className="text-center">Contact <span id='red'>us</span></strong>
            <form>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="input_fields">
                            <input placeholder="Name" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact
