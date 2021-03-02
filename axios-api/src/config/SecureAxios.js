import axios from 'axios'

const SecureAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

SecureAxios.interceptors.request.use(config => {
    config.headers['Authorization'] = 'token'
    return config
})

SecureAxios.interceptors.response.use(response => {
    console.log('server call is a success')
    return response
}, error => {
    console.log('server error')
    return 'Errored'
})

export default SecureAxios