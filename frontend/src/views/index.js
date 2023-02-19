import router from '../router/Router'

import {
    RouterProvider
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/style.scss'


export default () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}