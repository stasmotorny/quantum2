import '../styles/header.css';
import { slide as Menu } from 'react-burger-menu';
import '../styles/burger.css'

let Header = () => {
    return(
        <header className='head'>
            <h1 className='logo'><b>LOGO</b></h1>
            <nav className='headerNavigation'>
                <ul>
                    <li className="navmenu--item">
                        <a className='navmenu--item__link' href="#">How it works</a>
                    </li>
                    <li className="navmenu--item">
                        <a className='navmenu--item__link' href="#">About</a>
                    </li>
                    <li className="navmenu--item">
                        <a className='navmenu--item__link' href="#">Instructions</a>
                    </li>
                    <li className="navmenu--item">
                        <a className='navmenu--item__link' href="#">Accounts</a>
                    </li>
                    <li className="navmenu--item">
                        <a className='navmenu--item__link' href="#">Platforms</a>
                    </li>
                    <li className="navmenu--item">
                        <a className='navmenu--item__link' href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <select className='language'>
                <option>EN</option>
                <option>UA</option>
            </select>
            <a href="#" className='signbtn'>SIGN IN FOR FREE</a>
            <div className='menucontainer'>
                <Menu isOpen={ false } right >
                    <a className='navmenu--item__link' href="#">How it works</a>
                    <a className='navmenu--item__link' href="#">About</a>
                    <a className='navmenu--item__link' href="#">Instructions</a>
                    <a className='navmenu--item__link' href="#">Accounts</a>
                    <a className='navmenu--item__link' href="#">Platforms</a>
                    <a className='navmenu--item__link' href="#">Contact</a>
                </Menu>
            </div>
        </header>
    )
};

export default Header;