import '../../assets/scss/layouts/auth-layout.scss'
import image from '../../assets/images/logo-cortada.svg'

const DefaultComponent = () => {
    return (
        <div>
            <img src={image} />
        </div>
    )
}

const AuthLayout = (props) => {
    return (
        <div className='auth-layout'>
            <div className='promo-container'>
                {props.promo ? props.promo : <DefaultComponent />}
            </div>
            <div className='content-container'>
                {props.children}
            </div>
        </div>
    )
}

export default AuthLayout