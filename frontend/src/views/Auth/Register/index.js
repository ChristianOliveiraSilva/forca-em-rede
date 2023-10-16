import { useState } from 'react'
import AuthLayout from '../../../layouts/AuthLayout/index'

import LoadingBox from './components/LoadingBox'
import api from '../../../services/api'

import StageBasicInfo from './components/stages/StageBasicInfo'
import StageWebInfo from './components/stages/StageWebInfo'
import StageProfile from './components/stages/StageProfile'
import StageWorkplace from './components/stages/StageWorkplace'
import StageDisease from './components/stages/StageDisease'

import '../../../assets/scss/pages/register.scss'

import { toast } from 'react-toastify'

import { Link, useNavigate } from 'react-router-dom'

const objMock = {
    name: `aaa${(Math.random() * 100)}`,
    socialName: `aaaa${(Math.random() * 100)}`,
    phone: `aaaa${(Math.random() * 100)}`,
    username: `a${(Math.random() * 100)}`,
    email: `a${(Math.random() * 100)}`,
    password: `a${(Math.random() * 100)}`,
    gender: `male`,
    birthdate: `2023-10-13`,
    pronouns: `aa${(Math.random() * 100)}`,
    address: `aqa${(Math.random() * 100)}`,
    city: `a${(Math.random() * 100)}`,
    state: `a${(Math.random() * 100)}`,
    job: `aa${(Math.random() * 100)}`,
    workplace: `aa${(Math.random() * 100)}`,
    cpf: `aa${(Math.random() * 100)}`,
    rg: `aa${(Math.random() * 100)}`,
    disease: `aaa${(Math.random() * 100)}`,
    stage: `1`,
    place_treatment: `aa${(Math.random() * 100)}`
}

const Component = () => {
    const [msg, setMsg] = useState('')
    const [stage, setStage] = useState(4)
    const [bodydata, setBodyData] = useState(objMock)
    const navigate = useNavigate()

    const addData = (key, value) => {
        setBodyData({...bodydata, [key]: value})
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

    const handleRegister = async () => {
        try {
            const { data } = await api.post('auth/register', bodydata)

            if (data.status === true) {
                toast.success('Sucesso ao fazer cadastro! Faça login para continuar!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
            toast.error('Erro ao fazer login!')
        }
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
                    {component}
                    <LoadingBox stage={stage} totalStage={components.length} buttonLabel={buttonLabel} nextStage={nextStage} backStage={backStage} />
                </section>

                {msg && <p className='text-danger text-center'>{msg}</p>}

                <div className="text-center text-light pb-5">
                    <p>Já é um membro? 💜 <Link to="/login">Logue-se</Link></p>
                </div>
            </section>
        </AuthLayout>
    )
}

export default Component
