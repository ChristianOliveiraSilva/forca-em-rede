import { getCuriosity } from '../../../../../utility/Utils'

const Component = () => {
    return (
        <>
            <h1>Estamos enviando o código para você! Espere um segundo!</h1>
            <p className='mt-4'>{getCuriosity()}</p>
        </>
    )
}

export default Component
