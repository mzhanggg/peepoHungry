import { NavLink } from 'react-router-dom';
import soupImage from './Category-Images/soup.png';
import coffee from './Category-Images/coffee.png';
import burger from './Category-Images/hamburger.png';
import pepe from './Category-Images/pepe.jpg';
import dish from './Category-Images/dish.png';

import './Categories.css'

const Categories = () => {

    return (
        <div id="categories-container">
            <h1 id="cat-title">Categories</h1>

            <div id="cat-boxes">
                <div id="cat">
                    <NavLink to="/businesses">
                        <img src={soupImage} alt=""></img>
                        <p>Korean</p>
                    </NavLink>
                </div>


                <div id="cat">
                    <NavLink to="/businesses">
                        <img src={coffee} alt=""></img>
                        <p>Coffee</p>
                    </NavLink>
                </div>

                <div id="cat">
                    <NavLink to="/businesses">
                        <img src={burger} alt=""></img>
                        <p>Burgers</p>
                    </NavLink>
                </div>

                <div id="cat">
                    <NavLink to="/businesses">
                    <img src={pepe} alt=""></img>
                        <p>More</p>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Categories;
