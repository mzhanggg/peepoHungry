import { NavLink } from 'react-router-dom';
import soupImage from './Category-Images/soup.png';
import coffee from './Category-Images/coffee.png';
import burger from './Category-Images/hamburger.png';
import pepe from './Category-Images/pepe.jpg';

import './Categories.css'

const Categories = () => {
    const toTop = () => {
        window.scrollTo(0, 0)
    };

    return (
        <div id="categories-container">
            <h1 id="cat-title">Categories</h1>

            <div id="cat-boxes">
                <div id="cat">
                    <NavLink to="/category/korean" onClick={toTop}>
                        <img src={soupImage} alt=""></img>
                        <p>Korean</p>
                    </NavLink>
                </div>


                <div id="cat">
                    <NavLink to="/category/coffee" onClick={toTop}>
                        <img src={coffee} alt=""></img>
                        <p>Coffee</p>
                    </NavLink>
                </div>

                <div id="cat">
                    <NavLink to="/category/burger" onClick={toTop}>
                        <img src={burger} alt=""></img>
                        <p>Burgers</p>
                    </NavLink>
                </div>

                <div id="cat">
                    <NavLink to="/businesses" onClick={toTop}>
                    <img src={pepe} alt=""></img>
                        <p>More</p>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Categories;
