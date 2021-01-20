import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { IoMdSearch } from 'react-icons/io';

import '../assets/styles/inputSearch.css';

const Input = props => {
  const { placeholder, value } = props;
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/processos?q=${searchValue}`);
    console.log(searchValue);
  };

  useEffect(() => {
    if (value) {
      setSearchValue(value);
    }
  }, [value]);

  return (
    <form onSubmit={e => handleSubmit(e)} className="input-container">
      <IoMdSearch className="search-icon" size="1.5rem" />
      <input value={searchValue} type="text" id="search" placeholder={placeholder} onChange={(e) => setSearchValue(e.target.value)}></input>
    </form>
  );
};

export default Input;
