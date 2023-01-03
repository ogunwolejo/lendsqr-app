import {createSlice} from '@reduxjs/toolkit';

interface TABLE_LIST {
    data:number;
}

const _:TABLE_LIST  = {
    data:100
};


const TableListSlice = createSlice({
    initialState:_,
    name:"table-list",
    reducers:{
        updateTableList: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const TableListReducer = TableListSlice.reducer;

export const {updateTableList} = TableListSlice.actions;