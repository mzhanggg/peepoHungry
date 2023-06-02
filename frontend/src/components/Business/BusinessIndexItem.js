import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
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

    return (
        <>
            <div id="biz-profile-card" onClick={handleClick}>
                <img id="profile-img" src="https://cdn.7tv.app/emote/60b2876f4f32610f15bfc5dc/4x.webp"></img>
                <ul id="biz-profile-details">
                    <li id="biz-index-name">{biz.name}</li>

                    <div id="stats">
                        <li>⭐⭐⭐⭐⭐ component</li>
                        <li># reviews</li>
                    </div>

                    <div id="details">
                        <li>{biz.category}</li>
                        <li>{dollars()}</li>
                        <span>&bull;</span>
                        <li>{biz.city}</li>
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