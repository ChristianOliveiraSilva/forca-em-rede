
import { Link } from 'react-router-dom'
import '../../../assets/scss/pages/not-found.scss'
import logo from '../../../assets/images/logo.png'

const NotFound = () => {
    return (
        <header className='not-found-container'>
            <section>
                <img src={logo} className='contact-image' />
                <h1 className='contact-name'>A página que você está prucrando não existe!</h1>
                <Link to='/app' className="btn">Voltar</Link>
            </section>
        </header>
    )
}

export default NotFound