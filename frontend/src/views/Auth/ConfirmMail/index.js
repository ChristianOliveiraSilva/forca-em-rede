import { useState } from 'react'
import AuthLayout from '../../../layouts/AuthLayout/index'

import LoadingStage from './components/stages/LoadingStage'
import VerificationStage from './components/stages/VerificationStage'
import WaitingForValidationStage from './components/stages/WaitingForValidationStage'

const Component = () => {
    const [stage, setStage] = useState(0)

    const components = [
        LoadingStage,
        VerificationStage,
        WaitingForValidationStage
    ]

    const component = components[stage]

    return (
        <AuthLayout>
            <form className='form-container text-light'>
                {component()}
            </form>
        </AuthLayout>
    )
}

export default Component
