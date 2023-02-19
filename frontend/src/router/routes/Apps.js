import MainLayout from '../../layouts/MainLayout'

import AppComponent from '../../views/App/index'

const MainLayoutWrapper = (props) => {
    return (
        <MainLayout>
            {props.children}
        </MainLayout>
    )
}

export default [
    {
        path: "app",
        element: <MainLayoutWrapper><AppComponent /></MainLayoutWrapper>
    }
]