import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-community/async-storage'
import teApi from '../apis/tidyearth'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'formDisabled':
            return { ...state, formDisabled: action.payload }
        case 'add_error_message':
            return { ...state, errorMessage: action.payload, modalVisible: true }
        case 'auth':
            return { ...state, errorMessage: '', token: action.payload, isLogged: true, loggedBefore: true }
        case 'signout':
            return { ...state, token: '', isLogged: false}
        case 'clear_error_message':
            return { ...state, errorMessage: '', modalVisible: false, formDisabled: false}
        case 'change_past':
            return { ...state, loggedBefore: true }
        case 'fetch_data':
            return { ...state, data: action.payload }
        case 'fetch_avatar':
            return { ...state, avatar: action.payload }
        default:
            return state
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ name, email, password, birthDate }) => {
    try {
        dispatch({ type: 'formDisabled', payload: true })
        const response = await teApi.post('/users', { name, email, password, birthDate })
        await AsyncStorage.setItem('token', response.data.token)
        await AsyncStorage.setItem('loggedBefore', 'true')
        dispatch({ type: 'auth', payload: response.data.token})
    } catch (err) {
        dispatch({ type: 'add_error_message', payload: 'Something went wrong while signing up'})
    }
}

const checkPast = dispatch => async () => {
    try {
        const value = await AsyncStorage.getItem('loggedBefore')
        if (value) {
            dispatch({ type: 'change_past'})
            const token = await AsyncStorage.getItem('token')
            if (token) {
                dispatch({ type: 'auth', payload: token})
            }
        }
    } catch (err) {
        
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        dispatch({ type: 'formDisabled', payload: true })
        const response = await teApi.post('/users/login', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        await AsyncStorage.setItem('loggedBefore', 'true')
        dispatch({ type: 'auth', payload: response.data.token })
    } catch (err) {
        dispatch({ type: 'add_error_message', payload: 'Something went wrong while signing in.' })
    }
} 

const fetchData = dispatch => async ({ token }) => {
    try {
        const response = await teApi.get('/users/me', {}, { 
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        }) 
        dispatch({ type: 'fetch_data', payload: response.data })
    } catch (e) {
        dispatch({ type: 'add_error_message', payload: 'Oops, could not fetch user data!' })
    }
}

const fetchAvatar = dispatch => async ({ token }) => {
    try {
        const response = await teApi.get('/users/me/avatar', {}, { 
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch({ type: 'fetch_avatar', payload: response.data })
    } catch (e) {
        dispatch({ type: 'add_error_message', payload: 'Oops, could not fetch user avatar!' })
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout'})
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, checkPast, fetchData, fetchAvatar },
    { token: null,
        errorMessage: '',isLogged: false, modalVisible: false, loggedBefore: false, formDisabled: false,
        data: null, avatar: null
    }
)