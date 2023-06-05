import { NavLink } from 'react-router-dom';
import './Categories.css'

const Categories = () => {

    return (
        <div id="categories-container">
            <h1 id="cat-title">Categories</h1>

            <div id="cat-boxes">
                <div id="cat">
                    <NavLink to="/businesses">
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/8bc05b287157/assets/img/svg_illustrations/40x40_food_v2.svg" alt=""></img>
                        <p>Restaurants</p>
                    </NavLink>
                </div>


                <div id="cat">
                    <NavLink to="/businesses">
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/8bc05b287157/assets/img/svg_illustrations/40x40_food_v2.svg" alt=""></img>
                        <p>Restaurants</p>
                    </NavLink>
                </div>

                <div id="cat">
                    <NavLink to="/businesses">
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/8bc05b287157/assets/img/svg_illustrations/40x40_food_v2.svg" alt=""></img>
                        <p>Restaurants</p>
                    </NavLink>
                </div>

                <div id="cat">
                    <NavLink to="/businesses">
                    <img src="https://i.kym-cdn.com/photos/images/original/001/050/668/6e3.png" alt=""></img>
                        <p>More</p>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Categories;