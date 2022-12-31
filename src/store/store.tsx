import {configureStore} from '@reduxjs/toolkit';
import {AuthenticationReducer} from './auth.slice';


export const store = configureStore({
    reducer: {
        auth:AuthenticationReducer
    }
})

