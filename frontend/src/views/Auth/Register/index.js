import { useState } from 'react'
import AuthLayout from '../../../layouts/AuthLayout/index'

import LoadingBox from './components/LoadingBox'

import StageBasicInfo from './components/stages/StageBasicInfo'
import StageWebInfo from './components/stages/StageWebInfo'
import StageProfile from './components/stages/StageProfile'
import StageWorkplace from './components/stages/StageWorkplace'
import StageDisease from './components/stages/StageDisease'

import '../../../assets/scss/pages/register.scss'

import { Link } from 'react-router-dom'

const Component = () => {
    const [stage, setStage] = useState(0)
    const [data, setData] = useState({})

    const addData = (key, value) => {
        setData({...data, [key]: value})
    }

    const components = [
        <StageBasicInfo addData={addData} />,
        <StageWebInfo addData={addData} />,
        <StageProfile addData={addData} />,
        <StageWorkplace addData={addData} />,
        <StageDisease addData={addData} />
    ]

    const component = components[stage]
    const isFirstStage = stage === 0
    const isFinalStage = stage === components.length - 1
    const buttonLabel = isFinalStage ? 'Cadastrar' : 'Próxima Etapa'

    const handleRegister = () => {
        console.log(data)
    }

    const nextStage = () => {
        if (isFinalStage) {
            handleRegister()
        } else {
            setStage(stage + 1)
        }
    }
    const backStage = () => !isFirstStage && setStage(stage - 1)

    return (
        <AuthLayout>
            <section className='form-container register-container'>
                <section>
                    <h1 className='mb-4 text-light'>Cadastre-se</h1>
                    {isFirstStage && <h5>Aqui, a esperança se multiplica. Una-se à nossa comunidade de guerreiros contra o câncer no Força em Rede.</h5>}
                </section>

                <section>
                    {/* <button onClick={() => console.log(data)}>show</button> */}
                    
                    {component}
                    <LoadingBox stage={stage} totalStage={components.length} buttonLabel={buttonLabel} nextStage={nextStage} backStage={backStage} />
                </section>

                <div className="text-center text-light pb-5">
                    <p>Já é um membro? 💜 <Link to="/login">Logue-se</Link></p>
                </div>
            </section>
        </AuthLayout>
    )
}

export default Component
