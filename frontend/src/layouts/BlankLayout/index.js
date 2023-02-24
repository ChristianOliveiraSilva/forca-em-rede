import '../../assets/scss/layouts/blank-layout.scss'

const BlankLayout = (props) => {
    return (
        <div className='blank-layout'>
            {props.children}
        </div>
    )
}

export default BlankLayout