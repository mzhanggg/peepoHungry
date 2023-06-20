import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = () => {
    const [input, setInput] = useState('');

    return (
        <div id="search-bar">
            <input 
                id="search-input"
                type="text" 
                placeholder="burger, coffee, korean" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button id="search-button"><i id="search-icon" class="fa-solid fa-magnifying-glass"></i></button>

        </div>
    )
}

export default SearchBar;