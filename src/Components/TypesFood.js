import React from 'react'
import img1 from '../img/food-menu1.jpg'
import img2 from '../img/food-menu2.jpg'
import img3 from '../img/food-menu3.jpg'

const TypesFood = () => {
    return (
       <>
        {/* <!-- TYPES OF FOOD SECTION --------------- --> */}
    <section id="food">
        <h2>Types of Food</h2>
        <div class="food-container container">
            <div class="food-type fruit">
                <div class="img-container">
                    <img src={img1} alt="" />
                    <div class="img-content">
                        <h3>Fruit</h3>
                        <a href="https://en.wikipedia.org/wiki/fruit" class="btn btn-primary" target="_blank">Learn
                            More</a>
                    </div>
                </div>
            </div>
            <div class="food-type vegetable">
                <div class="img-container">
                    <img src={img2} alt="" />
                    <div class="img-content">
                        <h3>vegetable</h3>
                        <a href="https://en.wikipedia.org/wiki/vegetable" class="btn btn-primary" target="_blank">Learn
                            More</a>
                    </div>
                </div>
            </div>
            <div class="food-type grain">
                <div class="img-container">
                    <img src={img3} alt="" />
                    <div class="img-content">
                        <h3>Grain</h3>
                        <a href="https://en.wikipedia.org/wiki/grain" class="btn btn-primary" target="_blank">Learn
                            More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
       </>
    )
}

export default TypesFood
