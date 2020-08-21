import createDataContext from './createDataContext'

const welcomeReducer = (state, action) => {
    switch (action.type) {
        case 'go_signin':
            return { ...state, started: true, isLoading: false }
        default:
            return state
    }
}

const goSignIn = dispatch => () => {
    dispatch({ type: 'go_signin' })
}

export const { Provider, Context } = createDataContext(
    welcomeReducer,
    { goSignIn },
    { started: false, isLoading: true }
)