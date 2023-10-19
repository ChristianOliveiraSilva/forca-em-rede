import MainLayout from '../../../layouts/MainLayout'

import '../../../assets/scss/pages/profile.scss'
import Post from '../../../components/Post'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { BsFillGearFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { getUser } from '../../../utility/Utils'

const App = () => {
    const { profileId } = useParams()
    const currentUser = getUser()
    
    const [user, setUser] = useState(null)

    const loadUser = async () => {
        try {
            const url = profileId ? `user/${profileId}` : `user/${currentUser.id}`
            const { data } = await api.get(url)

            if (data.status === true) {
                setUser(data.data.user)
            } else {
                toast.error('Erro ao obter Usuário, tente novamente ou contate um administrador')            
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao obter Usuário, tente novamente ou contate um administrador')            
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    if (!user) {
        return ''
    }

    return (
        <MainLayout>
            <section className='profile-container'>
                <header>
                    <img src={`${process.env.REACT_APP_MEDIA_URL}anonimo.webp`} className='picture' />
                    {user.is_memory && <h3 className='in-memory-text'>Em Memória de</h3>}
                    <h2 className='title'>{user.name} • @{user.username}</h2>
                </header>

                <section className='card-container info-container'>
                    {currentUser.id === user.id && (
                        <Link to='/app/config'>
                            <BsFillGearFill className='float-end h4 text-secondary' style={{cursor: 'pointer'}} />
                        </Link>
                    )}
                    <h3>Dados</h3>

                    <div className='row'>
                        <div className='item'>{user.info.gender}</div>
                        <div className='item'>{user.info.birthdate.split('-').reverse().join('/')}</div>
                        <div className='item'>{user.info.pronouns}</div>
                        <div className='item'>{user.info.address}</div>
                        <div className='item'>{user.info.city}</div>
                        <div className='item'>{user.info.state}</div>
                        <div className='item'>{user.info.job}</div>
                        <div className='item'>{user.info.workplace}</div>
                    </div>
                </section>

                <section className='card-container'>
                    <h3>Eventos</h3>

                    <div className='event-container'>
                        {user.responsible_events.length === 0 && <h5 className='text-center text-muted my-1'>SEM EVENTOS</h5>}

                        {user.responsible_events.map((e, i) => (
                            <div className='event' key={i} >
                                <div className='image-wrapper'>
                                    <img src={`${process.env.REACT_APP_MEDIA_URL}anonimo.webp`} />
                                    <p className='date'>
                                        {e.start_date.split(' ')[0].split('-').reverse().join('/')} - {e.end_date.split(' ')[0].split('-').reverse().join('/')}
                                    </p>
                                </div>
                                <h3 className='title'>{e.title}</h3>
                                <p className='description'><small>{e.description}</small></p>
                            </div>
                        ))}
                    </div>
                </section>

                {currentUser.id === user.id && (
                    <section className='card-container'>
                        <h3>Amigos</h3>

                        <div className='event-container'>
                            {user.friends.length === 0 && <h5 className='text-center text-muted my-1'>SEM AMIZADES</h5>}

                            {user.friends.map((e, i) => (
                                <div className='event' key={i} >
                                    <div className='image-wrapper'>
                                        <img src={`${process.env.REACT_APP_MEDIA_URL}anonimo.webp`} />
                                        <p className='date'>xxx - xxx</p>
                                    </div>
                                    <h3 className='title'>XXXX XXXX XXXX XXXX XXXX</h3>
                                    <p className='description'><small>xxx</small></p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <h3>Posts</h3>

                    {user.posts.length === 0 && <h3 className='text-center text-muted my-5'>SEM POSTS</h3>}

                    {user.posts.map((e) => (
                        <Post key={e.id} post={e} />
                    ))}
                </section>

            </section>
        </MainLayout>
    )
}

export default App