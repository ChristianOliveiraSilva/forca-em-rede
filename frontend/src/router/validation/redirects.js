
import { hasUser } from '../../utility/Utils'
import { redirect } from 'react-router-dom'

const redirectIfNotLogged = async () => {
    const user = hasUser()

    if (!user) {
        throw redirect("/login")
    }

    return true
}


const redirectIfLogged = async () => {
    const user = hasUser()

    if (user) {
        throw redirect("/app")
    }

    return true
}

export {
    redirectIfNotLogged,
    redirectIfLogged
}