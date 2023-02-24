import BlankLayout from '../../layouts/BlankLayout/index'

import ChatComponent from '../../views/Chat/index'

const BlankLayoutWrapper = (props) => {
    return (
        <BlankLayout>
            {props.children}
        </BlankLayout>
    )
}

export default [
    {
        path: "chat",
        element: <BlankLayoutWrapper><ChatComponent /></BlankLayoutWrapper>
    },
    {
        path: "chat/:contactId",
        element: <BlankLayoutWrapper><ChatComponent /></BlankLayoutWrapper>
    }
]