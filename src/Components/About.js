import React from 'react'
import aboutphoto from '../img/about-photo.jpg'

const About = () => {
    return (
        <>
         {/* <!-- About section  -----------> */}
    <section id="about">
        <p class="small">About Us</p>
        <div class="about-wrapper container">
            <div class="about-text">
                <h2>We've been making healthy food for last 10 years </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusantium. Laudantium distinctio
                    laboriosam debitis odit soluta et cum tempora voluptas qui perspiciatis voluptatum incidunt ut
                    aspernatur fugiat facilis dolorum numquam quibusdam harum molestiae cupiditate blanditiis, iure
                    error commodi repellendus. Iure!</p>
            </div>
            <div class="about-img">
                <img src={aboutphoto} alt="About Us" />
            </div>
        </div>
    </section>
        </>
    )
}

export default About
