import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {User} from "../customType/IUser";
import {getCurrentUserApi} from "../api/CallApi";
import axios from "axios";


export const getCurrentUser2 = createAsyncThunk("user/get",async () =>{
    const res = await getCurrentUserApi();
    return res.data as User;
})
type TypeUser = {
    username: string,
    password: string
}

export const loginUser2 = createAsyncThunk("user/login",async (user:TypeUser) =>{
    const res = await axios
        .post(`${process.env.REACT_APP_API}auth/log-in`,
            user
        );
    localStorage.setItem("token", JSON.stringify(res.data.token));
    return res.data as string;
})

type UserState = {
    user: User,
    token:string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState: UserState = {
    user: {
        fullName: "",
        username: "",
    },
    token: localStorage.getItem("token") as string | "",
    loading:"idle",
}
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // loginStart: (state) =>{
        //   state.loading = "pending"
        // },
        // loginSuccess: (state, action) => {
        //     const {user,token,pending} = action.payload;
        //     state.user = user;
        //     state.token = token;
        //     state.loading = "succeeded"
        // },
        logout: (state) => {
            state.user = {fullName:"",username:""};
            state.token = "";
            state.loading = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser2.pending,(state,action)=>{
            state.loading = "pending"
        })
        builder.addCase(loginUser2.fulfilled,(state, {payload})=>{
            state.token = payload
            state.loading = "succeeded"
        })
        builder.addCase(loginUser2.rejected,(state,action )=>{
            state.loading = "failed"
        })
        builder.addCase(getCurrentUser2.pending,(state,action)=>{
            state.loading = "pending"
        })
        builder.addCase(getCurrentUser2.fulfilled,(state, {payload})=>{
            state.user = payload
            state.loading = "succeeded"
        })
        builder.addCase(getCurrentUser2.rejected,(state,action )=>{
            state.loading = "failed"
        })
    }

})
// export const {loginSuccess, logout} = UserSlice.actions
 export const {logout} = UserSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const selectToken = (state: RootState) => state.user.token

export default UserSlice.reducer
