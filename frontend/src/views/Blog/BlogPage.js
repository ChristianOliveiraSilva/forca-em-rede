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

                {/* <div className='my-3'>
                    <button>Curtir</button>
                    <button>Comentar</button>
                    <button>Compartilhar</button>
                </div>

                <section className='mt-5'>
                    <h3>Comentários</h3>

                    {(new Array(10)).fill(1).map(
                        (e, i) => (
                            <Comment key={i} />
                        )
                    )}
                </section> */}

            </section>
        </BlogLayout>
    )
}

export default BlogPage