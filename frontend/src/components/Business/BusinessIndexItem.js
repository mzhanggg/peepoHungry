import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import BusinessStars from './BusinessStars';
import "./BusinessIndexItem.css"

const BusinessIndexItem = ({biz}) => {
    const navigate = useNavigate();
    
    const handleClick = e => {
        e.preventDefault();
        navigate(`/businesses/${biz.id}`)
    }

    const dollars = () => {
        switch (biz.priceRange) {
            case 25: 
                return '$';
            case 50:
                return '$$';
            case 75:
                return '$$$';
            case 100: 
                return '$$$$';
        };
    };

    const rating = Math.round(biz.avgRating)

    const zeroStar = ( 
        <>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const oneStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const twoStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const threeStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const fourStar = ( 
        <>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </>
    )

    const fiveStar = ( 
        <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </>
    )


    const stars = () => {
        switch (rating) {
            case 1:
                return oneStar;
            case 2:
                return twoStar;
            case 3: 
                return threeStar;
            case 4: 
                return fourStar;
            case 5: 
                return fiveStar;
            default:
                return zeroStar;
        };
    };

    return (
        <>
            <div id="biz-profile-card" onClick={handleClick}>
                <img id="profile-img" src={biz.photo}></img>
                <ul id="biz-profile-details">
                    <li id="biz-index-name">{biz.name}</li>

                    <div id="stats">
                        <li>{stars()}</li>
                        <li># reviews</li>
                    </div>

                    <div id="details">
                        <li>{biz.category}</li>
                        <li>{dollars()}</li>
                        <span>&bull;</span>
                        <li>{biz.neighborhood}</li>
                    </div>

                    <div id="review">
                        <span>&#x1F4AC;</span>
                        <p>According to all known laws of aviation, there is no 
                            way a bee should be able to fly. Its wings are too 
                            small to get its fat little body off the ground. 
                            The bee, of course, flies anyway because bees don't 
                            care what humans think is impossible. Yellow, black. 
                            Yellow, black. Yellow, black. Yellow, black. Ooh, 
                            black and yellow! Let's shake it up a little. Barry! 
                            Breakfast is ready! Ooming!</p>
                    </div>
                </ul>
            </div>
        </>
    )

}

export default BusinessIndexItem;