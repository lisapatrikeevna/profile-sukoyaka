import {Dispatch} from 'redux'
import {authAPI} from "./userApi";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {setToken, setUserId, setUserName} from "./userSlice";

type InitialStateType = {
    isLoggedIn: boolean
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
}
const initialState = {
    isLoggedIn: false,
    error: null,
    status: 'idle',
}
// type InitialStateType = typeof initialState
//@ts-ignore
export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

// thunks
// export const registrationTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
export const registrationTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    console.log('data',data);
    //@ts-ignore
    let newData={username:data.username,password:data.password}
    console.log('newData',newData);
    dispatch(setAppStatusAC('loading'))
    //@ts-ignore
    authAPI.registration(data).then(res => {
        console.log('res',res.data.status);
        if (res.data.status === true) {
        // if (res.data.resultCode === '200') {
            console.log('res',res.data);
            // dispatch(setIsLoggedInAC(true))
            // dispatch(setAppStatusAC('succeeded'))
            // dispatch(setUserId(res.data.userId));
            // dispatch(setUserName(res.data.name));
            // dispatch(setToken(res.data.token));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    }).catch((error: any) => {
        handleServerNetworkError(error, dispatch)
    })

}
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    //@ts-ignore
    authAPI.login(data).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch);
        }
    }).catch((error: any) => {
        handleServerNetworkError(error, dispatch)
    })

}
export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    //@ts-ignore
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch((error: any) => {
            handleServerNetworkError(error, dispatch)
        })
}


export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
type ActionsType = ReturnType<typeof setIsLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType


// types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type LoginParamsType = {
    username: string
    password: string
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
export type myResponseType = {
    id: number
    email: string
    login: string
}
