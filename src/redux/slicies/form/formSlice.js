import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
  },
};
export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        change:(state,action) =>{
            state.formData = {...state.formData, ...action.payload}
        }
        ,submitData : (state,action) =>{
                console.log(action.payload)
            }
    }
})

export const {change,submitData} = formSlice.actions
export default formSlice.reducer