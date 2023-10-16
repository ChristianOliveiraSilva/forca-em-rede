import MainLayout from '../../../layouts/MainLayout'

const img = 'http://localhost/media/anonimo.webp'
const img2 = 'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg'
import '../../../assets/scss/pages/profile.scss'
import Post from '../../../components/Post'
import { BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <MainLayout>
            <section className='profile-container'>
                <header>
                    <img src={img} className='picture' />
                    <h3 className='in-memory-text'>Em Memória de</h3>
                    <h2 className='title'>Nome</h2>
                </header>

                <section className='card-container info-container'>
                    <Link to='/app/config'>
                        <BsFillGearFill className='float-end h4 text-secondary' style={{cursor: 'pointer'}} />
                    </Link>
                    <h3>Dados</h3>

                    <div className='row'>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                        <div className='item'>xxxx</div>
                    </div>
                </section>

                <section className='card-container'>
                    <h3>Eventos</h3>

                    <div className='event-container'>
                        {(new Array(4)).fill(1).map((e, i) => (
                            <div className='event'>
                                <div className='image-wrapper'>
                                    <img src={img2} />
                                    <p className='date'>xxx - xxx</p>
                                </div>
                                <h3 className='title'>XXXX XXXX XXXX XXXX XXXX</h3>
                                <p className='description'><small>xxx</small></p>
                            </div>
                        ))}
                    </div>
                </section>

                <h3>Posts</h3>

                <h3 className='text-center text-muted my-5 d-none'>SEM POSTS</h3>

                {(new Array(10)).fill(1).map((e, i) => (
                    <Post key={i} />
                ))}

            </section>
        </MainLayout>
    )
}

export default App