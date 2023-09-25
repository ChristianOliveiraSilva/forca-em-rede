import { useEffect, useState } from 'react'
import '../../assets/scss/layouts/miscellaneous-layout.scss'
import logo from '../../assets/images/logo.svg'

const MiscellaneousLayout = (props) => {

    return (
        <div className='miscellaneous-layout'>
            <header className='minimal-header'>
                AAAAAA AAAAAA AAAAAA AAAAAA AAAAAA
            </header>
            <header className='main-header'>
                <h3 className='title'>Força em Rede</h3>

                <nav>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    
                    <button className='btn btn-auth'>
                        Logar
                    </button>

                    <a href='#' className='auth-link'>Cadastrar</a>
                </nav>
            </header>

            <section className='content-container'>
                {props.children}
            </section>

            <footer className='main-footer'>
                <div className='footer-column'>
                    <img src={logo} className='logo' alt='Logo da Força em rede' title='Logo da Força em rede' />

                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div>
                <div className='footer-column'>
                    <h3 title=''>Teste</h3>
                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div>
                <div className='footer-column'>
                    <h3 title=''>Teste</h3>
                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div>
            </footer>
        </div>
    )
}

export default MiscellaneousLayout