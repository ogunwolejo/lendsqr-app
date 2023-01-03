import {configureStore} from '@reduxjs/toolkit';
import {AuthenticationReducer} from './auth.slice';
import {TableListReducer} from './tableList.slice'


export const store = configureStore({
    reducer: {
        auth:AuthenticationReducer,
        tableList:TableListReducer
    }
})

