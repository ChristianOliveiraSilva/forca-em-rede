import '../../assets/scss/layouts/blog-layout.scss'

const BlogLayout = (props) => {
    return (
        <div className='blog-layout'>
            {props.children}
        </div>
    )
}

export default BlogLayout