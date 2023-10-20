
import ConfirmMail from '../../views/Auth/ConfirmMail/index'
import ForgotPassword from '../../views/Auth/ForgotPassword/index'
import Login from '../../views/Auth/Login/index'
import Register from '../../views/Auth/Register/index'
import { redirectIfNotLogged, redirectIfLogged } from '../validation/redirects'

export default [
    {
        path: "login",
        element: <Login />,
        loader: redirectIfLogged
    },
    {
        path: "register",
        element: <Register />,
        loader: redirectIfLogged
    },
    {
        path: "forgot-password",
        element: <ForgotPassword />,
        loader: redirectIfLogged
    },
    {
        path: "confirm-mail",
        element: <ConfirmMail />,
        loader: redirectIfNotLogged
    }
]