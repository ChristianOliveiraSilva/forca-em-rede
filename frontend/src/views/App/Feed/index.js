import Card from 'react-bootstrap/Card'

import MainLayout from '../../../layouts/MainLayout'
import Post from './components/Post'
const img = 'http://localhost/media/anonimo.webp'

import '../../../assets/scss/pages/feed.scss'
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../services/api'

const HeaderApp = ({addPostToList}) => {
    const [content, setContent] = useState('')

    const handlePublish = async () => {
        try {
            const { data } = await api.post('post', {content})

            if (data.status === true) {
                addPostToList(data.data.post)
                setContent('')
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao fazer post, tente novamente ou contate um administrador')
        }
    }

    return (
        <Card>
            <Card.Body>
                <section className='header-app-container'>
                    <div className='img-container'>
                        <img src={img} />
                    </div>

                    <div className='create-post-container'>
                        <textarea placeholder='Como você está se sentindo agora?' value={content} onChange={e => setContent(e.target.value)} />

                        <div className='row align-items-center'>
                            <div className='options-container col-6 col-md-10'>
                                <div className='option'><BsFill1CircleFill /></div>
                                <div className='option'><BsFill2CircleFill /></div>
                                <div className='option'><BsFill3CircleFill /></div>
                            </div>
                            <div className='col'>
                                <button className='btn' onClick={handlePublish}>Postar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Card.Body>
        </Card>
    )
}

const App = () => {
    const [posts, setPosts] = useState([])

    const addPostToList = (post) => {
        console.log([post, ...posts])
        setPosts([post, ...posts])
    }

    const loadPosts = async () => {
        try {
            const { data } = await api.get('post')

            if (data.status === true) {
                console.log(data.data)
                setPosts(data.data.posts)
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao obter post, tente novamente ou contate um administrador')            
        }
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <MainLayout>
            <section className='feed-container'>
                <HeaderApp addPostToList={addPostToList} />

                {posts.map((e, i) => <Post key={i} post={e} />)}
            </section>
        </MainLayout>
    )
}

export default App