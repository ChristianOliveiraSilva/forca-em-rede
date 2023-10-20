import {
    createBrowserRouter
} from "react-router-dom"

import Miscellaneous from './routes/Miscellaneous'
import Apps from './routes/Apps'
import Chat from './routes/Chat'
import Blog from './routes/Blog'
import Auth from './routes/Auth'

const router = createBrowserRouter([
    ...Apps,
    ...Chat,
    ...Blog,
    ...Auth,
    ...Miscellaneous
])

export default router
