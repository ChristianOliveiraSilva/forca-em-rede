import { getCuriosity } from '../../../../../utility/Utils'

const Component = () => {

    return (
        <>
            <h1>Estamos verificando seu código</h1>
            <p className='mt-4'>{getCuriosity()}</p>
        </>
    )
}

export default Component
