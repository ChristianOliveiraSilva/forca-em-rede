import BlogLayout from '../../layouts/BlogLayout/index'

import '../../assets/scss/pages/blog-page.scss'
import BlogService from '../../services/BlogService'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const BlogPage = () => {
    const { slug } = useParams()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const currentBlog = BlogService.blogs.find(e => e.slug === slug)
        setBlog(currentBlog)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <BlogLayout>
                <h1>Carregando Post</h1>
            </BlogLayout>
        )
    }

    if (!blog) {
        return (
            <BlogLayout>
                <h1>Nenhum blog selecioando</h1>
                <Link to='/blog'>Voltar ao blog</Link>
            </BlogLayout>
        )
    }

    return (
        <BlogLayout>
            <section className='main-blog-page-container'>
                <h1 className="title">{blog.title}</h1>
                <h2 className="subtitle">{blog.subtitle}</h2>
                <p className="description">{blog.description}</p>

                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                <img className='img' src={blog.img} />
            </section>
        </BlogLayout>
    )
}

export default BlogPage