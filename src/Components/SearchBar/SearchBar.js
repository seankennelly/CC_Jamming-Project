import React, {useState} from 'react';
import './searchbar.css';


function SearchBar(props) {
  const [term, setTerm] = useState();

  function search() {
    props.onSearch(term)
  };

  function handleTermChange({target}) {
    setTerm(target.value)
  } ;

  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  )
};

export default SearchBar;