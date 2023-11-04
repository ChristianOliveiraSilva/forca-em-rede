import api from '../../../../services/api'
import { getUser } from '../../../../utility/Utils'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const userId = getUser().id
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            await api.delete(`user/${userId}`)
            localStorage.clear()
            navigate('/')
        } catch (error) {
            console.error(error)
            toast.error('Erro ao deletar usuário')
        }
    }
    
    return (
        <section className='config-panel-container'>
            <h3>Deletar conta</h3>

            <p className="my-4">Você tem certeza de que deseja excluir sua conta? Esse processo é irreversível.</p>

            <button className="btn btn-danger" onClick={handleDelete}>Deletar</button>
        </section>
    )
}

export default App