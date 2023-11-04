import MainLayout from '../../../layouts/MainLayout'

import DeleteAccount from './stages/DeleteAccount'
import EditAccount from './stages/EditAccount'
import Example from './stages/Example'

import '../../../assets/scss/pages/config.scss'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../../services/api'

const App = () => {
    const [stage, setStage] = useState(null)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await api.post('auth/logout')
    
            localStorage.clear()
            navigate('/')
        } catch (error) {
            console.log(error)
            toast.error('Erro ao fazer logout')
        }
    }

    const components = [
        <EditAccount />,
        <DeleteAccount />
    ]

    const component = components[stage]

    return (
        <MainLayout>
            <section className="config-container">
                <section className='config-list-container'>
                    <div className="item" onClick={() => setStage(0)}>
                        Editar conta
                    </div>
                    <Link to='/about' className="item">
                        Sobre
                    </Link>
                    <Link to='/reporting-center' className="item">
                        Central de Denúncias
                    </Link>
                    <Link to='/bug-report' className="item">
                        Reportar um bug
                    </Link>
                    <Link to='/informations-for-midia' className="item">
                        Informações para mídia
                    </Link>
                    <Link to='/terms' className="item">
                        Termos de uso da plataforma
                    </Link>
                    <Link to='/contact' className="item">
                        Contate-nos
                    </Link>
                    <div className="item" onClick={() => setStage(1)}>Deletar conta</div>
                    <div className="item" onClick={handleLogout}>Deslogar</div>
                </section>

                {component}                
            </section>
        </MainLayout>
    )
}

export default App