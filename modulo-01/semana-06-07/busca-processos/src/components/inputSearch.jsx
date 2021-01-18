import { IoMdSearch } from 'react-icons/io';

import '../assets/styles/inputSearch.css';

const Input = props => {
  const { placeholder } = props;

  return (
    <div className="input-container">
      <IoMdSearch className="search-icon" size="1.5rem" />
      <input type="text" id="search" placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
