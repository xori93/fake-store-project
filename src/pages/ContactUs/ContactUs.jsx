import React from 'react'
import "./ContactUs.css"

function ContactUs() {
    return (
        <div className="contact-container">
            <h2>ContactUs</h2>
            <form className="form-container">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="email" />
                <textarea placeholder="Write your message here" rows="4">Message</textarea>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs