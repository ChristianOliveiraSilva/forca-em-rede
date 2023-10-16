
import getCuriosity from './helpers/curiosities'

const getUser = () => (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})

export {
    getCuriosity,
    getUser
}