import React from 'react'

const Header = () => {
    return (
        <>
           {/* <!-- navbar --------------> */}
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="Checkbox"/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            {/* <!-- menuitems-------------> */}
            <ul class="menu-items">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#showcase">Category</a></li>
                <li><a href="#food-menu">Menu</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <h1 class="logo">Harshit Food</h1>
        </div>
    </nav>
    {/* <!-- showcase area ---------> */}
    <section class="showcase-area" id="showcase">
        <div class="showcase-container">
            <h1 class="main-title">Eat Right Food</h1>
            <p>What are you waiting for eat healthy food!</p>
            <a href="#food-menu" class="btn btn-primary">Menu</a>
        </div>
    </section> 
        </>
    )
}

export default Header
