import {configureStore} from '@reduxjs/toolkit';
import {AuthenticationReducer} from './auth.slice';
import {MainReducer} from './main.slice'


export const store = configureStore({
    reducer: {
        auth:AuthenticationReducer,
        data:MainReducer
    }
})

export type AppDispatch = typeof store.dispatch