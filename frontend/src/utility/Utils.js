
import getCuriosity from './helpers/curiosities'

const getUser = () => (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})
const hasUser = () => !!localStorage.getItem('user')

const getGender = (gender) => {
    const genders = {
        male: 'Masculino',
        female: 'Feminino'
    }

    return genders[gender] ?? 'Outro'
}

const convertToDMY = (dateYMD, separator = '-', newSeparator = '/') => {
    return dateYMD.split(separator).reverse().join(newSeparator)    
}

export {
    getCuriosity,
    getUser,
    getGender,
    convertToDMY,
    hasUser
}