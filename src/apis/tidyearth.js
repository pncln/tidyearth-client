import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const instance = axios.create({
    baseURL: 'http://8e53f91ea9ec.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance