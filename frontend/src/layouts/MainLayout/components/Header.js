import { Link } from "react-router-dom"

import logo from '../../../assets/images/logo.png'
import { BsSearch, BsBellFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { getUser } from '../../../utility/Utils'

const Header = (props) => {
    const [notifications, setNotifications] = useState([])
    const currentUser = getUser()

    const loadNotifications = async () => {
        try {
            const { data } = await api.get('notification')

            if (data.status === true) {
                setNotifications(data.data.notifications)
            } else {
                toast.error('Erro ao capturar as notificações')
            }
        } catch (error) {
            toast.error('Erro ao capturar as notificações')
        }
    }

    useEffect(() => {
        loadNotifications()
        const timeout = setInterval(() => {
            loadNotifications()
        }, 1e4)

        return () => clearInterval(timeout)
    }, [])

    return (
        <>
            <img className="sm-logo" src={logo} />

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
                    <Link to='/app/notifications' className={notifications.every(e => e.seen_at !== null) ? 'notification-icon' : 'notification-icon  notificated'}>
                        <BsBellFill />
                    </Link>
        
                    <Link to='/app/profile'>
                        <img src={process.env.REACT_APP_MEDIA_URL + currentUser.picture} className='contact-image' />
                    </Link>
                </section>
            </header>
        </>
    )
}

export default Header