import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

import { Link } from 'react-router-dom'
import '../../../assets/scss/pages/home.scss'

import logo from '../../../assets/images/logo.png'
import iflogo from '../../../assets/images/outras-logos/ifms.png'
import coslogo from '../../../assets/images/outras-logos/cos-full-logo.png'
import douglas from '../../../assets/images/about/douglas-foto.jpeg'
import mara from '../../../assets/images/about/image (4).jpeg'

import fecitecx from '../../../assets/images/about/fecitecx.png'
import fecitel from '../../../assets/images/about/fecitel.png'
import fetec from '../../../assets/images/about/fetec.png'
import febrace from '../../../assets/images/about/febrace.png'

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

                    <div className="row">
                        <div>
                            <img src={iflogo} />
                        </div>
                        <div>
                            <img src={coslogo} />
                        </div>
                    </div>
                </div>

                <div className='block-container creators-container'>
                    <h3>Idealizadores</h3>

                    <div className="row">
                        <div>
                            <img src={iflogo} />
                        </div>
                        <div>
                            <img src={coslogo} />
                        </div>
                        <div>
                            <img className='round' src={douglas} style={{aspectRatio: '1'}} />
                        </div>
                        <div>
                            <img className='round' src={mara} />
                        </div>
                    </div>
                </div>

                <div className='block-container promoters-container'>
                    <h3>Fomentadores</h3>

                    <div className="row">
                        <div>
                            <img src={coslogo} />
                        </div>
                    </div>
                </div>

                <div className='block-container participations-container'>
                    <h3>Participações e convites</h3>

                    <div className="row">
                        <div>
                            <img src={fecitecx} />
                        </div>
                        <div>
                            <img src={fecitel} />
                        </div>
                        <div>
                            <img src={fetec} />
                        </div>
                        <div>
                            <img src={febrace} />
                        </div>
                    </div>
                </div>

                <div className='block-container awards-container'>
                    <h3>Prêmios</h3>

                    <div className="row">
                        <div>
                            <img src={fecitecx} />
                        </div>
                        <div>
                            <img src={fecitel} />
                        </div>
                        <div>
                            <img src={fetec} />
                        </div>
                    </div>
                </div>
            </div>
        </MiscellaneousLayout>
    )
}

export default Page