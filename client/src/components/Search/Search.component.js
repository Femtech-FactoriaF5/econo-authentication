import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import lupa from '../../images/lupa.svg';
import "./Search.style.css";
import * as ROUTES from '../../constants/routes';
export const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    const title = event.target.value;

    setSearch(title);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`${ROUTES.EXPERIENCES}?title=${search}`)
    setSearch('');
  }

  return (
    <div className='search-bar'>
      {/* <Link to={`${ROUTES.EXPERIENCES}?title=${search}`}  */}
      <button className='search-icon'
        onClick={handleSubmit}><img src={lupa} alt="lupa"></img>
      {/* </Link> */}
      </button>
      <input className='search-input'
        type="text"
        placeholder='Busca por palabras claves'
        value={search}

        onChange={handleChange}
      />
    </div>)
}