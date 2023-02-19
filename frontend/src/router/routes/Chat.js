import MainLayout from '../../layouts/MainLayout/index'

import ChatComponent from '../../views/Chat/index'

const MainLayoutWrapper = (props) => {
    return (
        <MainLayout>
            {props.children}
        </MainLayout>
    )
}

export default [
    {
        path: "chat",
        element: <MainLayoutWrapper><ChatComponent /></MainLayoutWrapper>
    },
    {
        path: "chat/:contactId",
        element: <MainLayoutWrapper><ChatComponent /></MainLayoutWrapper>
    }
]