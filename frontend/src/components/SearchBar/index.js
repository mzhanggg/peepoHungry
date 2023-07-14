import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

const SearchBar = () => {
    const nav = useNavigate();
    const [query, setQuery] = useState('');

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const handleClick = () => {
        (query === '') ? nav(`/businesses`) : nav(`/search/${query}`);
        
        setQuery('');
    }

    useEffect(() => {
        
    }, [query])

    return (
        <div id="search-bar">
            <input 
                id="search-input"
                type="text" 
                placeholder="burger, coffee, korean" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button id="search-button" onClick={handleClick}>
                <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
            </button>

        </div>
    )
}

export default SearchBar;