import ChatComponent from '../../views/Chat/index'
import { redirectIfNotLogged } from '../validation/redirects'

export default [
    {
        path: "chat",
        element: <ChatComponent />,
        loader: redirectIfNotLogged
    },
    {
        path: "chat/:contactId",
        element: <ChatComponent />,
        loader: redirectIfNotLogged
    }
]