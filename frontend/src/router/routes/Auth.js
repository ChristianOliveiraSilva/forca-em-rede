
import ConfirmMail from '../../views/Auth/ConfirmMail/index'
import ForgotPassword from '../../views/Auth/ForgotPassword/index'
import Login from '../../views/Auth/Login/index'
import Register from '../../views/Auth/Register/index'

export default [
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "confirm-mail",
        element: <ConfirmMail />
    }
]