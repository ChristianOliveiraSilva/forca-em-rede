import {
    createBrowserRouter
} from "react-router-dom"

import BlankLayout from '../layouts/BlankLayout'

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
        element: <BlankLayout>About</BlankLayout>
    },
    ...Apps,
    ...Chat,
    ...Blog,
    ...Auth
])

export default router
