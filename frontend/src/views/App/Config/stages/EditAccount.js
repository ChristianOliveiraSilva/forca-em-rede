import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../../services/api'
import { getUser, getNestedProperty } from '../../../../utility/Utils'

const App = () => {
    const currentUser = getUser()
    
    const [user, setUser] = useState(null)

    const loadUser = async () => {
        try {
            const url = `user/${currentUser.id}`
            const { data } = await api.get(url)

            if (data.status === true) {
                setUser(data.data.user)
            } else {
                toast.error('Erro ao obter Usuário, tente novamente ou contate um administrador')            
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao obter Usuário, tente novamente ou contate um administrador')            
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    if (!user) {
        return (
            <section className='config-panel-container'>
                <h4 className='text-center my-5'>Carregando dados dos usuários</h4>
            </section>
        )        
    }

    const inputs = [
        {
            label: 'Nome', name: 'name'
        },
        {
            label: 'Nome social (Preencha se houver algum)', name: 'info.social_name'
        },
        {
            label: 'Username', name: 'username'
        },
        {
            label: 'Telefone', name: 'phone'
        },
        {
            label: 'Genero', name: 'info.gender'
        },
        {
            label: 'Data de aniversário', name: 'info.birthdate', inputType: 'date'
        },
        {
            label: 'Pronome', name: 'info.pronouns'
        },
        {
            label: 'Infermidade', name: 'info.disease'
        },
        {
            label: 'Estágio', name: 'info.stage'
        },
        {
            label: 'Local de tratamento', name: 'info.place_treatment'
        },
        {
            label: 'Endereço', name: 'info.address'
        },
        {
            label: 'Cidade', name: 'info.city'
        },
        {
            label: 'Estado', name: 'info.state'
        },
        {
            label: 'Trabalho', name: 'info.job'
        },
        {
            label: 'Local de trabalho', name: 'info.workplace'
        }
    ]

    const handleEdit = async () => {
        try {
            const url = `user/${currentUser.id}`
            const { data } = await api.put(url, user)

            if (data.status === true) {
                toast.success('Dados editados com sucesso!')
            } else {
                toast.error('Erro ao editar Usuário, tente novamente ou contate um administrador')
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao editar Usuário, tente novamente ou contate um administrador')
        }
    }

    const handleInput = (event) => {
        const {name, value} = event.target

        if (name.includes('info')) {
            const obj = { ...user }
            obj.info[name.split('.')[1]] = value

            setUser(obj)            
        } else {
            setUser({...user, [name]: value})
        }
    }

    return (
        <section className='config-panel-container p-4'>
            <h4>Editar conta</h4>

            <section className="my-4">
                {
                    inputs.map((e, i) => {
                        const label = `input-${e.label.toLowerCase()}`

                        return (
                            <div key={i} className="form-group my-4">
                                <label htmlFor={label}>{e.label}</label>
                                <input type={e.inputType || 'text'} id={label} name={e.name}
                                    className="form-control" value={getNestedProperty(user, e.name)} onChange={handleInput} />
                            </div>
                        )
                    })
                }
            </section>

            <button className='btn btn-primary-color' onClick={handleEdit}>Editar</button>
        </section>
    )
}

export default App