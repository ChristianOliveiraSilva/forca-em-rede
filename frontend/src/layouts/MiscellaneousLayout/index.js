import '../../assets/scss/layouts/miscellaneous-layout.scss'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/social-media/icons8-facebook.svg'
import instagram from '../../assets/images/social-media/icons8-instagram.svg'
import twitter from '../../assets/images/social-media/icons8-twitter.svg'
import { Link } from 'react-router-dom'

const MiscellaneousLayout = (props) => {

    return (
        <div className='miscellaneous-layout'>
            <header className='minimal-header'>
                <b>Atenção!</b> Você está em um ambiente de demonstração da plataforma! <Link to='/bug-report'>Reporte bugs aqui</Link>
            </header>
            <header className='main-header'>
                <Link to='/'>
                    <h3 className='title'>Força em Rede</h3>
                </Link>

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

                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/blog">Blog</Link></p>
                    <p><Link to="/about">Sobre</Link></p>
                    <p><Link to="/terms">Termos de uso da plataforma</Link></p>
                    <p><Link to="/informations-for-midia">Informações para a mídia</Link></p>
                    <p><Link to="/contact">Contate a gente!</Link></p>
                    <p><Link to="/bug-report">Relate bugs</Link></p>
                    <p><Link to="/reporting-center">Central de Denúncias</Link></p>

                </div>
                <div className='footer-column'>
                    <h3 title='Informações para contato'>Informações para contato</h3>
                    <table className='table text-light small'>
                        <tr>
                            <td>Email institucional:</td>
                            <td>institucional@forcaemrede.com</td>
                        </tr>
                        <tr>
                            <td>Telefone institucional:</td>
                            <td>(XX) XXXX-XXXX</td>
                        </tr>
                        <tr>
                            <td>Whatsapp institucional:</td>
                            <td>(XX) XXXXX-XXXX</td>
                        </tr>
                    </table>

                    <h3 title='Informações para contato' className='mt-4'>Nossas rede sociais</h3>
                    <Link to="https://www.facebook.com/"><img src={facebook} className='social-img' /></Link>
                    <Link to="https://www.instagram.com/"><img src={instagram} className='social-img' /></Link>
                    <Link to="https://www.twitter.com/"><img src={twitter} className='social-img' /></Link>

                </div>
            </footer>
        </div>
    )
}

export default MiscellaneousLayout