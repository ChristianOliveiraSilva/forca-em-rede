import BlogLayout from '../../layouts/BlogLayout/index'

import BlogPost from './components/BlogPost'
import '../../assets/scss/pages/blog.scss'
import { Link } from 'react-router-dom'

import BlogService from '../../services/BlogService'

const Blog = () => {
    return (
        <BlogLayout>
            <main className='main-blog-container'>
                <section className='content'>
                    <h3>Este é o blog do força em rede</h3>
                    <p>Compartilhe, comente e interaja com as postagens</p>

                    {BlogService.blogs.map(
                        (blog, i) => (
                            <Link to={`/blog/pages/${blog.slug}`}>
                                <BlogPost key={blog.slug} blog={blog} />
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