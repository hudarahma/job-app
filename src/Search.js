import React from 'react';
import './Search.css';
import searchIcon from './assets/desktop/icon-search.svg';
import locationIcon from './assets/desktop/icon-location.svg';


function Search() {
    
  
  
    // var TrieSearch = require('trie-search');
    // var ts = new TrieSearch('name');
    // ts.addAll(arr);
    // ts.get('a');
    return (
        <div className='search__container'>
            <div className='search__by__title'>
                <img src={searchIcon}  alt='icon'/>
                <input placeholder='Filter by title, companies, expertise…' />
            </div>
            <hr />
            <div className='search__by__location'>
                 <img src={locationIcon}  alt='icon'/>
                <input placeholder='Filter by location…' />
            </div>
            <hr />
            <div className='search__by__fulltime'>
                <input type='checkbox' />
                <span>Full Time Only</span>
            </div>
           
            <button  type='submit'>Search</button>
            
        </div>
    )
}

export default Search
