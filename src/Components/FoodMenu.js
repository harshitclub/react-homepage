import React from 'react'
import img1 from '../img/food-menu1.jpg'
import img2 from '../img/food-menu2.jpg'
import img3 from '../img/food-menu3.jpg'
import img4 from '../img/food-menu4.jpg'
import img5 from '../img/food-menu5.jpg'
import img6 from '../img/food-menu6.jpg'

const FoodMenu = () => {
    return (
       <>
       {/* <!-- Food Menu section  --> */}
    <section id="food-menu">
        <h2 class="food-menu-heading">
            Food Menu
        </h2>
        <div class="food-menu-container container">
            <div class="food-menu-item">
                <div class="food-image">
                    <img src={img1} alt=""/>
                </div>
                <div class="food-description">
                    <h2 class="food-title">Food Menu Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
                    <p class="food-price">Price: &#8377;249</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                    <img src={img2} alt=""/>
                </div>
                <div class="food-description">
                    <h2 class="food-title">Food Menu Item 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
                    <p class="food-price">Price: &#8377;249</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                    <img src={img3} alt=""/>
                </div>
                <div class="food-description">
                    <h2 class="food-title">Food Menu Item 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
                    <p class="food-price">Price: &#8377;249</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                    <img src={img4} alt=""/>
                </div>
                <div class="food-description">
                    <h2 class="food-title">Food Menu Item 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
                    <p class="food-price">Price: &#8377;249</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                    <img src={img5} alt=""/>
                </div>
                <div class="food-description">
                    <h2 class="food-title">Food Menu Item 5</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
                    <p class="food-price">Price: &#8377;249</p>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-image">
                    <img src={img6} alt=""/>
                </div>
                <div class="food-description">
                    <h2 class="food-title">Food Menu Item 6</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
                    <p class="food-price">Price: &#8377;249</p>
                </div>
            </div>
        </div>
    </section>
       </>
    )
}

export default FoodMenu
