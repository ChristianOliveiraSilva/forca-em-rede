import router from '../router/Router'

import {
    RouterProvider
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

export default () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}