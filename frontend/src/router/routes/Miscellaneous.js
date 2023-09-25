import BlankLayout from '../../layouts/BlankLayout'

import Home from '../../views/Miscellaneous/Home'
import Terms from '../../views/Miscellaneous/Terms'

const BlankLayoutWrapper = (props) => {
    return (
        <BlankLayout>
            {props.children}
        </BlankLayout>
    )
}

export default [
    {
        path: "/",
        element: <BlankLayoutWrapper><Home /></BlankLayoutWrapper>
    },
    {
        path: "/about",
        element: <BlankLayoutWrapper><Terms /></BlankLayoutWrapper>
    },
    {
        path: "/terms",
        element: <BlankLayoutWrapper><Terms /></BlankLayoutWrapper>
    },
    {
        path: "/informations-for-midia",
        element: <BlankLayoutWrapper><Terms /></BlankLayoutWrapper>
    }
]