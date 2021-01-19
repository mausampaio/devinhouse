import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { IoMdSearch } from 'react-icons/io';

import '../assets/styles/inputSearch.css';

const Input = props => {
  const [searchValue, setSearchValue] = useState();

  const { placeholder, value } = props;
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/processo?q=${searchValue}`);
    console.log(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <IoMdSearch className="search-icon" size="1.5rem" />
      <input value={value} type="text" id="search" placeholder={placeholder} onChange={(e) => setSearchValue(e.target.value)}></input>
    </form>
  );
};

export default Input;
