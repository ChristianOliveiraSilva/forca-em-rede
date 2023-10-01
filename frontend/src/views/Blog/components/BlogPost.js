

const BlogPost = ({blog}) => {

    return (
        <section className='blog-post-container'>
            <div className="blog-post-content">
                <h1 className="title">{blog.title}</h1>
                <h2 className="subtitle">{blog.subtitle}</h2>
                <p className="description">{blog.description}</p>
            </div>
            <div className="blog-post-image">
                <img src={blog.img} />
            </div>
        </section>
    )
}

export default BlogPost
