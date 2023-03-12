import BlogComponent from '../../views/Blog/index'
import BlogPageComponent from '../../views/Blog/blogpage'

export default [
    {
        path: "blog",
        element: <BlogComponent />
    },
    {
        path: "blog/pages/:page",
        element: <BlogPageComponent />
    }
]