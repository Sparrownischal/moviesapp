import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault(); 
        if (searchQuery.trim() !== '') {
            navigate(`/searchResults?keyword=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search movies and TV shows"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className='me-2'>Search</button>
        </form>
    );
}

export default SearchInput;
