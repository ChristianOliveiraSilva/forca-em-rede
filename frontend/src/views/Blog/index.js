import BlogLayout from '../../layouts/BlogLayout/index'

import BlogPostSample from './components/BlogPostSample'
import '../../assets/scss/pages/blog.scss'

const Blog = () => {
    return (
        <BlogLayout>
            <main className='main-blog-container'>
                <section className='content'>
                    <h3>Este é o blog do força em rede</h3>
                    <p>Compartilhe, comente e interaja com as postagens</p>

                    {(new Array(1e2 / 4)).fill(1).map(
                        (e, i) => (
                            <BlogPostSample key={i} />
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