// import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
// import axiosClient from "./utils/axiosClient";


// export const registerUser = createAsyncThunk(
//     'user/register',
//     async(userData, { rejectWithValue }) =>{
//         try{
//             const formattedData = {
//                 firstName: userData.firstName,
//                 emailId: userData.emailId,
//                 password: userData.password
//             };

//             const response = await axiosClient.post('/user/register', formattedData, {
//                 withCredentials: true
//             });

//             return response.data.user;
//         }
//         catch(error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

// export const loginUser = createAsyncThunk(
//   'user/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axiosClient.post('/user/login', credentials, {
//         withCredentials: true
//       });
//       return response.data.user;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );


// export const checkAuth = createAsyncThunk(
//   'user/check',
//   async(_, { rejectWithValue }) => {
//     try {
//       const { data } = await axiosClient.get('/user/check', {
//         withCredentials: true
//       });
//       return data.user;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { message: error.message });
//     }
//   }
// );


// export const logoutUser = createAsyncThunk(
//   'user/logout',
//   async(_, { rejectWithValue }) => {
//     try {
//       await axiosClient.post('/user/logout');
//       return null;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { message: error.message });
//     }
//   }
// );


// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         isAuthenticated: false,
//         isLoading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) =>{
//         builder
//         .addCase(registerUser.pending, (state) =>{
//             state.isLoading = true;
//             state.error = null;
//         })
//         .addCase(registerUser.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isAuthenticated = !!action.payload;
//             state.user = action.payload;
//         })
//         .addCase(registerUser.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.error = action.payload?.message || "Something went wrong";
//             state.isAuthenticated = false;
//             state.user = null;
//         })

//         // Login user cases
//         .addCase(loginUser.pending, (state) =>{
//             state.isLoading = true;
//             state.error = null;
//         })
//         .addCase(loginUser.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isAuthenticated = !!action.payload;
//             state.user = action.payload;
//         })
//         .addCase(loginUser.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.error = action.payload?.message || "Something went wrong";
//             state.isAuthenticated = false;
//             state.user = null;
//         })

//         // CheckAuth cases
//         .addCase(checkAuth.pending, (state) =>{
//             state.isLoading = true;
//             state.error = null;
//         })
//         .addCase(checkAuth.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isAuthenticated = !!action.payload;
//             state.user = action.payload;
//         })
//         .addCase(checkAuth.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.error = action.payload?.message || "Something went wrong";
//             state.isAuthenticated = false;
//             state.user = null;
//         })

//         // Logout user cases
//         .addCase(logoutUser.pending, (state) =>{
//             state.isLoading = true;
//             state.error = null;
//         })
//         .addCase(logoutUser.fulfilled, (state) =>{
//             state.isLoading = false;
//             state.isAuthenticated = false;
//             state.user = null;
//             state.error = null;
//         })
//         .addCase(logoutUser.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.error = action.payload?.message || "Something went wrong";
//             state.isAuthenticated = false;
//             state.user = null;
//         })
//     }

// })

// export default authSlice.reducer;













import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from './utils/axiosClient'

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
    const response =  await axiosClient.post('/user/register', userData);
    return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('/user/login', credentials);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.get('/user/check');
      return data.user;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue(null); // Special case for no session
      }
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axiosClient.post('/user/logout');
      return null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // Register User Cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })
  
      // Login User Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })
  
      // Check Auth Cases
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      })
  
      // Logout User Cases
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.isAuthenticated = false;
        state.user = null;
      });
  }
});

export default authSlice.reducer;