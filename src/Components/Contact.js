import React from 'react'
import Restaurant from '../img/restraunt-image.jpg'

const Contact = () => {
    return (
        <>
        {/* <!-- contact us section ------------------> */}
    <section id="contact">
        <div class="contact-container container">
            <div class="contact-image">
                <img src={Restaurant} alt=""/>
            </div>
            <div class="form-container">
                <h2>Contact Us</h2>
                <input type="text" name="" id="" placeholder="Name"/>
                <input type="email" name="" id="" placeholder="E-Mail"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Type Your Message Here!"></textarea>
                <a href="#" class="btn btn-primary">Submit</a>
            </div>
        </div>
    </section>
        </>
    )
}

export default Contact
