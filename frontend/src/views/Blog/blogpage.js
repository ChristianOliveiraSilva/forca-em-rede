import BlogLayout from '../../layouts/BlogLayout/index'

import Comment from './components/Comment'

import '../../assets/scss/pages/blog-page.scss'

const BlogPage = () => {
    return (
        <BlogLayout>
            <section className='main-blog-page-container'>
                <h1 className="title">Título do post</h1>
                <h2 className="subtitle">Subtítulo do post</h2>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>
                <img className='img' src="https://avatars.githubusercontent.com/u/41245411?v=4" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>

                <div className='my-3'>
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
                </section>

            </section>
        </BlogLayout>
    )
}

export default BlogPage