import { useState } from 'react'
import AuthLayout from '../../../layouts/AuthLayout/index'

import LoadingStage from './components/stages/LoadingStage'
import VerificationStage from './components/stages/VerificationStage'
import WaitingForValidationStage from './components/stages/WaitingForValidationStage'

const Component = () => {
    const LOADING_STAGE = 0
    const VERIFICATION_STAGE = 1
    const WAITING_FOR_VALIDATION_STAGE = 2

    const [stage, setStage] = useState(LOADING_STAGE)

    const components = [
        LoadingStage,
        VerificationStage,
        WaitingForValidationStage
    ]

    const component = components[stage]

    return (
        <AuthLayout>
            <form className='form-container'>
                {component()}
            </form>
        </AuthLayout>
    )
}

export default Component
