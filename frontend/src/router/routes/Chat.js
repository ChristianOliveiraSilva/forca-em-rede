import BlankLayout from '../../layouts/BlankLayout/index'

import ChatComponent from '../../views/Chat/index'

export default [
    {
        path: "chat",
        element: <ChatComponent />
    },
    {
        path: "chat/:contactId",
        element: <ChatComponent />
    }
]