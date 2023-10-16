import router from '../router/Router'

import {
    RouterProvider
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/style.scss'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default () => {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer />
        </>
    )
}