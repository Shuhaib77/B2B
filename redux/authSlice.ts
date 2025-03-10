// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const register = createAsyncThunk("auth/register", async (data,{rejectWithValue}) =>  {
//   try {
//     const data =await axios.post("http://localhost:5000/api/register");
//   return data;
//   } catch (error) {
//     rejectWithValue(error.response.data || "registeratin failedd")
    
//   }
// });

// const initialState = {
//   data: [],
//   error: "",
//   loading: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(register.pending,(state,action)=>{
//         state.loading=true
//     })
//     builder.addCase(register.fulfilled,(state,action)=>{
//         state.loading=false
//         state.data=action.payload
//     })
//     builder.addCase(register.rejected,(state,action)=>{
//         state.loading=false
//         state.error="registariin failed"
//     })


//   },
// });

// export default authSlice.reducer;
