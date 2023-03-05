import { useState } from 'react'
import AuthLayout from '../../../layouts/AuthLayout/index'

import LoadingBox from './components/LoadingBox'

import Stage1 from './components/stages/Stage1'
import Stage2 from './components/stages/Stage2'
import Stage3 from './components/stages/Stage3'
import Stage4 from './components/stages/Stage4'
import Stage5 from './components/stages/Stage5'

const Component = () => {
    const STAGE_1 = 0
    const STAGE_2 = 1
    const STAGE_3 = 2
    const STAGE_4 = 3
    const STAGE_5 = 4

    const [stage, setStage] = useState(STAGE_1)

    const components = [
        Stage1,
        Stage2,
        Stage3,
        Stage4,
        Stage5
    ]

    const component = components[stage]
    const isFirstStage = stage === 0
    const isFinalStage = stage === components.length - 1
    const buttonLabel = isFinalStage ? 'Cadastrar' : 'Próxima Etapa'

    const nextStage = () => !isFinalStage && setStage(stage + 1)
    const backStage = () => !isFirstStage && setStage(stage - 1)

    return (
        <AuthLayout>
            <form className='form-container bigger-container'>
                <h1 className='mb-4'>Cadastre-se</h1>

                {component()}

                <LoadingBox stage={stage} totalStage={components.length} buttonLabel={buttonLabel} nextStage={nextStage} backStage={backStage} />

                <div className="text-center">
                    <p>Já é um membro? 🤔 <a href="#!">Logue-se</a></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
