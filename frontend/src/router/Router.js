import {
    createBrowserRouter
} from "react-router-dom"

import Miscellaneous from './routes/Miscellaneous'
import Apps from './routes/Apps'
import Chat from './routes/Chat'
import Blog from './routes/Blog'
import Auth from './routes/Auth'
import NotFound from '../views/Miscellaneous/NotFound'

const router = createBrowserRouter([
    ...Apps,
    ...Chat,
    ...Blog,
    ...Auth,
    ...Miscellaneous,
    {
        path: "*",
        element: <NotFound />
    }
])

export default router
