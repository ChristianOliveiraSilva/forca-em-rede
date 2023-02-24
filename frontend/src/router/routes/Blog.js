import BlogLayout from '../../layouts/BlogLayout/index'

const BlogLayoutWrapper = (props) => {
    return (
        <BlogLayout>
            {props.children}
        </BlogLayout>
    )
}

export default [
    {
        path: "blog",
        element: <BlogLayoutWrapper><h1>Blog</h1></BlogLayoutWrapper>
    }
]