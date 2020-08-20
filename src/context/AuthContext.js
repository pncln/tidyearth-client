import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-community/async-storage'
import teApi from '../apis/tidyearth'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error_message':
            return { ...state, errorMessage: action.payload, modalVisible: true, isLogged: false }
        case 'auth':
            return { ...state, errorMessage: '', token: action.payload, modalVisible: false, isLogged: true, loggedBefore: true }
        case 'signout':
            return { ...state, token: '', isLogged: false}
        case 'clear_error_message':
            return { ...state, errorMessage: '', modalVisible: false }
        case 'change_past':
            return { loggedBefore: true }
        default:
            return state
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async () => {
    try {
        const response = await teApi.post('/users/signup', { email, password })
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
            dispatch({ type: 'change_past '})
        }
    } catch (err) {
        
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await teApi.post('/users/login', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        await AsyncStorage.setItem('loggedBefore', 'true')
        dispatch({ type: 'auth', payload: response.data.token })
    } catch (err) {
        dispatch({ type: 'add_error_message', payload: 'Something went wrong. while signing in.' })
    }
} 

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout'})
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, checkPast },
    { token: null, errorMessage: '',isLogged: false, modalVisible: false, loggedBefore: true }
)