

const BlogPostSample = () => {
    return (
        <section className='blog-post-sample-container'>
            <div className="blog-post-sample-content">
                <h1 className="title">Título do post</h1>
                <h2 className="subtitle">Subtítulo do post</h2>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis eleifend tellus ac mattis. Sed porta, libero et rutrum dapibus, dolor sapien commodo nibh, vel tristique ex lorem eget erat. Aliquam cursus placerat est, ac tempor libero maximus a. Nunc sagittis molestie tellus nec ultrices. Quisque ut quam nunc.</p>

                <div>
                    <button>Curtir</button>
                    <button>Comentar</button>
                    <button>Compartilhar</button>
                </div>
            </div>
            <div className="blog-post-sample-image">
                <img src="https://avatars.githubusercontent.com/u/41245411?v=4" />
            </div>
        </section>
    )
}

export default BlogPostSample
