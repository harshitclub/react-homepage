import React from 'react'
import harshit from '../img/harshit.jpg'
import deepanshu from '../img/deepanshu.jpg'
import sudhanshu from '../img/sudhanshu.JPG'

const Reviews = () => {
    return (
       <>
       {/* <!-- Rating section like customer section --------> */}
    <section id="testimonials">
        <h2 class="testimonial-title">What Our Customers Say?</h2>
        <div class="testimonial-container container">
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span
                        class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span
                        class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti
                    perspiciatis nostrum? Cum, perspiciatis velit.</p>
                <div class="customer-detail">
                    <div class="customer-photo"><img src={sudhanshu} alt=""/></div>
                    <p class="customer-name">Sudhanshu</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span
                        class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span
                        class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti
                    perspiciatis nostrum? Cum, perspiciatis velit.</p>
                <div class="customer-detail">
                    <div class="customer-photo"><img src={harshit} alt=""/></div>
                    <p class="customer-name">Harshit</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span
                        class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span
                        class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti
                    perspiciatis nostrum? Cum, perspiciatis velit.</p>
                <div class="customer-detail">
                    <div class="customer-photo"><img src={deepanshu} alt=""/></div>
                    <p class="customer-name">Deepanshu</p>
                </div>
            </div>
        </div>
    </section>
       </>
    )
}

export default Reviews
