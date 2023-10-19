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
    const [loading, setLoading] = useState(true)

    const loadPost = async () => {
        try {
            const { data } = await api.get(`post/${postId}`)

            if (data.status === true) {
                setPost(data.data.post)
            } else {
                toast.error('Erro ao obter post, tente novamente ou contate um administrador')            
            }
        } catch (error) {
            console.error(error)
            if (error.status !== 404) {
                toast.error('Erro ao obter post, tente novamente ou contate um administrador')            
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadPost()
    }, [])

    if (loading === true) {
        return (
            <MainLayout>
                <h2 className='my-5 h3 text-center'>Buscando dados...</h2>
            </MainLayout>
        )
    }

    if (post === null) {
        return (
            <MainLayout>
                <h2 className='my-5 py-5 h1 text-center text-muted'>Post não encontrado</h2>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <Post post={post} showAll />
        </MainLayout>
    )
}

export default App