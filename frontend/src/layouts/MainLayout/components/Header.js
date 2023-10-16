import { Link } from "react-router-dom"

import logo from '../../../assets/images/logo.png'
import { BsSearch, BsBellFill } from "react-icons/bs"

const img = 'http://localhost/media/anonimo.webp'

const Header = (props) => {
    return (
        <header className="main-header">
            <section className="logo-container">
                <img src={logo} />
            </section>

            <nav className="nav-container">
                <Link to='/app'>Feed</Link>
                <Link to='/chat'>Chat</Link>
                <Link to='/blog'>Blog</Link>
            </nav>

            <section className="search-container">
                <div className="icon-container">
                    <div className="input-icon"><BsSearch /></div>
                    <input placeholder="Pesquise algum tema" />
                </div>
            </section>

            <section className="auth-container">
                <Link to='/app/notifications' className='notification-icon notificated'>
                    <BsBellFill />
                </Link>
    
                <Link to='/app/profile'>
                    <img src={img} className='contact-image' />
                </Link>
            </section>
        </header>
    )
}

export default Header