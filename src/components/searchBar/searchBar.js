import React, { useState } from 'react';
import search from '../../images/search.png';

function SearchBar({ inputType, inputPlaceholder, inputVal, onChangeHandle }) {
  return (
    <div>
      <div>
        <div className="search-bar__wrapper">
          <input
            className="search-bar"
            onChange={onChangeHandle}
            value={inputVal}
            type={inputType}
            placeholder={inputPlaceholder}
          />
          <img className="search-bar__icon" src={search} />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
