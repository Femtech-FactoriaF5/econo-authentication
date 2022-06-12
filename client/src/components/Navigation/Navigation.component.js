import { Link, Outlet } from "react-router-dom"
import * as ROUTES from '../../constants/routes';
import { Search } from "../Search";
import './Navigation.style.css';
import logo from '../../images/logo.png';
import gorilla from '../../images/gorilla-icon.svg';
import basket from '../../images/basket-icon.svg';

const Navigation = ({ logged, search, handleChange }) => {

    return (
        <>
            <header>
                <nav className="navigation-bar">
                    <Link to={ROUTES.HOME}><img src={logo} alt="Home"></img></Link>
                    <Search className='navigation-search' />
                    {logged && <ul className="user-logged">
                        <li><img src={gorilla} alt={"User Login"}></img></li>
                        <li><Link to={ROUTES.USER_PROFILE}>Profile</Link></li>
                        <li><Link to={ROUTES.USER_EXPERIENCES}>My Experiences</Link></li>
                        <li><button type="">Log out</button></li>
                    </ul>}
                    <div className="icons">
                        <Link to={ROUTES.SIGN_IN}><img src={gorilla} alt={"User Login"}></img></Link>
                        <Link to={ROUTES.BOOKING}><img src={basket} alt="Reservas"></img></Link>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

        </>
        /*         <Search value={search} onChange={handleChange}>
                Search:
              </Search>
         */
        /*       <p>Searches for {search ? search : '...'}</p> */

    )
}

export default Navigation;