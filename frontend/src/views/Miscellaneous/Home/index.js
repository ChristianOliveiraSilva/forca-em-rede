import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

import '../../../assets/scss/pages/home.scss'
import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <MiscellaneousLayout>
            <div className='home-container'>
                <div className='above-the-fold-container'>

                    <div className='box-container'>
                        <img src={logo} className='logo' alt='Logo da Força em rede' title='Logo da Força em rede' />
                        <h3 className='title'>Força em rede</h3>
                        <h3 className='subtitle'>Juntos, somos mais fortes! Conecte-se à Força em Rede e encontre apoio para sua jornada contra o câncer.</h3>
                        <Link to="/login">
                            <button>
                                    Entre na plataforma
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='block-container supporters-container'>
                    <h3>Apoiadores</h3>
                </div>

                <div className='block-container creators-container'>
                    <h3>Idealizadores</h3>
                </div>

                <section>
                    
                </section>

                <div className='block-container promoters-container'>
                    <h3>Fomentadores</h3>
                </div>

                <div className='block-container xxxxx-container'>
                    <h3>xxxxx</h3>
                </div>

                <div className='block-container thanks-container'>
                    <h3>Agradecimentos</h3>
                </div>
            </div>
        </MiscellaneousLayout>
    )
}

export default Page