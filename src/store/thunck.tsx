import {createAsyncThunk} from "@reduxjs/toolkit"

export const getAllData = createAsyncThunk("fetchAllData", async(/*data, {rejectWithValue}*/) => {
    try {
        //@ts-ignore
        const response = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
        console.log("response from CASYNCT",response);
        return response;

    } catch(err) {
        console.log("This is the error from the createAsyncThunk", err);
        return err;
        //return rejectWithValue(err);
    }
})