import Card from 'react-bootstrap/Card'

import MainLayout from '../../../layouts/MainLayout'
import Post from '../../../components/Post'
const img = 'http://localhost/media/anonimo.webp'

import '../../../assets/scss/pages/feed.scss'
import { BsFillCalendarEventFill, BsFilePlus } from "react-icons/bs"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { Link } from 'react-router-dom'

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

    const handleUpload = (event) => {
        
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
                        <input type='file' id='file-upload' className='d-none' onChange={handleUpload} />

                        <div className='row align-items-center'>
                            <div className='options-container col-6 col-md-10 h4'>
                                <label htmlFor='file-upload' className='option'><BsFilePlus /></label>
                                <Link to='event/create' className='option'><BsFillCalendarEventFill /></Link>
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

    const removePostFromList = (postId) => {
        setPosts(posts.filter(e => e.id !== postId))
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

                {posts.map((e, i) => <Post key={i} post={e} removePostFromList={removePostFromList} />)}
            </section>
        </MainLayout>
    )
}

export default App