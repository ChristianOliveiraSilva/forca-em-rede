import { useEffect, useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
const img = 'http://localhost/media/anonimo.webp'

import { BsThreeDots, BsHandThumbsUpFill } from "react-icons/bs"
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import Post from '../../../components/Post'

const App = () => {
    const { postId } = useParams()
    const [post, setPost] = useState(null)

    const loadPost = async () => {
        try {
            const { data } = await api.get(`post/${postId}`)

            if (data.status === true) {
                setPost(data.data.post)
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao obter post, tente novamente ou contate um administrador')            
        }
    }

    useEffect(() => {
        loadPost()
    }, [])

    return (
        <MainLayout>
            {post && <Post post={post} showAll />}
            {!post && <h2 className='my-5 py-5 h1 text-center text-muted'>Post não encontrado</h2>}
        </MainLayout>
    )
}

export default App