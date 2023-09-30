import '../../assets/scss/layouts/miscellaneous-layout.scss'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const MiscellaneousLayout = (props) => {

    return (
        <div className='miscellaneous-layout'>
            <header className='minimal-header'>
                AAAAAA AAAAAA AAAAAA AAAAAA AAAAAA
            </header>
            <header className='main-header'>
                <h3 className='title'>Força em Rede</h3>

                <nav>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/terms">Termos</Link>
                    
                    <Link to="/login" className='btn btn-auth'>
                            Logar
                    </Link>
                    
                    <Link to="/register" className='auth-link'>
                        Cadastrar
                    </Link>
                </nav>
            </header>

            <section className='content-container'>
                {props.children}
            </section>

            <footer className='main-footer'>
                <div className='footer-column'>
                    <img src={logo} className='logo' alt='Logo da Força em rede' title='Logo da Força em rede' />
                </div>
                <div className='footer-column'>
                    <h3 title='Links'>Links</h3>
                    <p><Link to="/blog">Blog</Link></p>
                    <p><Link to="/about">Sobre</Link></p>
                    <p><Link to="/terms">Termos</Link></p>
                </div>
                <div className='footer-column'>
                    <h3 title='Informações para contato'>Informações para contato</h3>
                    <p>Email institucional: </p>
                    <p>Telefone institucional: </p>
                    <p>Whatsapp institucional: </p>

                    <h5 title='Informações para contato' className='mt-4'>Nossas rede sociais</h5>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                </div>
            </footer>
        </div>
    )
}

export default MiscellaneousLayout