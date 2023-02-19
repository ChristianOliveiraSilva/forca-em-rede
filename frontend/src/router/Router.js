import {
    createBrowserRouter
} from "react-router-dom"

import Apps from './routes/Apps'
import Chat from './routes/Chat'

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
    ...Chat
])

export default router
