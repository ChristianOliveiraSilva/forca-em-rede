import '../../assets/scss/layouts/auth-layout.scss'
import image from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const DefaultComponent = () => {
    return (
        <div>
            <Link to="/">
                <img src={image} />
            </Link>
        </div>
    )
}

const AuthLayout = (props) => {
    return (
        <div className='auth-layout'>
            <div className='promo-container'>
                <DefaultComponent />
            </div>
            <div className='content-container'>
                <Link to="/">
                    <img className='logo-center' src={image} />
                </Link>
                {props.children}
            </div>
        </div>
    )
}

export default AuthLayout