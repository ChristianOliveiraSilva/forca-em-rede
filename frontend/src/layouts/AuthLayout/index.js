import '../../assets/scss/layouts/auth-layout.scss'

const DefaultComponent = () => {

    return (
        <p>Colocar seu SVG bonito aqui</p>
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