import { useState } from 'react'
import AuthLayout from '../../../layouts/AuthLayout/index'

import LoadingBox from './components/LoadingBox'

import Stage1 from './components/stages/Stage1'
import Stage2 from './components/stages/Stage2'
import Stage3 from './components/stages/Stage3'
import Stage4 from './components/stages/Stage4'

import { Link } from 'react-router-dom'

const Component = () => {
    const [stage, setStage] = useState(0)

    const components = [
        Stage1,
        Stage2,
        Stage3,
        Stage4
    ]

    const component = components[stage]
    const isFirstStage = stage === 0
    const isFinalStage = stage === components.length - 1
    const buttonLabel = isFinalStage ? 'Cadastrar' : 'Próxima Etapa'

    const nextStage = () => !isFinalStage && setStage(stage + 1)
    const backStage = () => !isFirstStage && setStage(stage - 1)

    return (
        <AuthLayout>
            <form className='form-container'>
                <section>
                    <h1 className='mb-4 text-light'>Cadastre-se</h1>
                    {isFirstStage && <h5>Aqui, a esperança se multiplica. Una-se à nossa comunidade de guerreiros contra o câncer no Força em Rede.</h5>}
                </section>
                <section>
                    {component()}
                    <LoadingBox stage={stage} totalStage={components.length} buttonLabel={buttonLabel} nextStage={nextStage} backStage={backStage} />
                </section>

                <div className="text-center text-light">
                    <p>Já é um membro? 💜 <Link to="/login">Logue-se</Link></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
