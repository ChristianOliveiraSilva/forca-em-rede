import BlogComponent from '../../views/Blog/index'
import SearchBlog from '../../views/Blog/SearchBlog'
import BlogPageComponent from '../../views/Blog/BlogPage'

export default [
    {
        path: "blog",
        element: <BlogComponent />
    },
    {
        path: "blog/search",
        element: <SearchBlog />
    },
    {
        path: "blog/pages/:slug",
        element: <BlogPageComponent />
    }
]