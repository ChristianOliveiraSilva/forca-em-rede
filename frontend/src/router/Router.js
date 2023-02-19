import {
    createBrowserRouter
} from "react-router-dom"

import Apps from './routes/Apps'

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
    ...Apps
])

export default router
