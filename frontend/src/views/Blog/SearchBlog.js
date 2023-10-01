import BlogLayout from '../../layouts/BlogLayout/index'

import BlogPost from './components/BlogPost'
import '../../assets/scss/pages/blog.scss'
import { Link } from 'react-router-dom'

import BlogService from '../../services/BlogService'
import { useState } from 'react'

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState('')

    const handleBlogSearch = (e) => {
        const value = e.target.value

        setSearch(value)

        if (value) {
            const filteredBlogs = BlogService.blogs.filter(blog => {
                const searchTerms = [blog.title, blog.subtitle, blog.description, blog.content]
                return searchTerms.some(term => term.toLowerCase().includes(value.toLowerCase()))
            })
            
            setBlogs(filteredBlogs)
        } else {
            setBlogs([])
        }
    }

    return (
        <BlogLayout>
            <main className='main-blog-container'>
                <section className='content'>
                    <h3>Pesquise sua postagem</h3>
                    <input className='blog-search-input' value={search} onChange={handleBlogSearch} placeholder='Pesquise um tema, um assunto diverso ou até mesmo uma palavra chave' />

                    {blogs.length === 0 && search !== '' && <p className='my-5'>Nenhum blog encontrado</p>}
                    {blogs.length === 0 && search === '' && <p className='my-5 text-center h3'>🫠</p>}
                    {blogs.map(
                        (blog, i) => (
                            <Link to={`/blog/pages/${blog.slug}`} key={blog.slug}>
                                <BlogPost blog={blog} />
                            </Link>
                        )
                    )}
                </section>
                <aside>
                    {(new Array(10)).fill(1).map(
                        (e, i) => (
                            <div key={i} className='ad-container'>box de algum anuncio</div>
                        )
                    )}
                </aside>
            </main>
        </BlogLayout>
    )
}

export default Blog