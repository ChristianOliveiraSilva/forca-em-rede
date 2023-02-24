import {
    createBrowserRouter
} from "react-router-dom"

import Apps from './routes/Apps'
import Chat from './routes/Chat'
import Blog from './routes/Blog'
import Auth from './routes/Auth'

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    },
    {
        path: "about",
        element: <div>About</div>
    },
    ...Apps,
    ...Chat,
    ...Blog,
    ...Auth
])

export default router
