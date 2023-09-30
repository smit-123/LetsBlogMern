import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

export const registerUser = createAsyncThunk('auth/register', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:9000/api/auth/register', formData);
        toast.success("Registration successful")
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return rejectWithValue(error.response.data);
    }
});

export const loginUser = createAsyncThunk('auth/login', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:9000/api/auth/login', formData);
        toast.success("Login successful")
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.isAuthenticated = !!action.payload;
            state.user = action.payload;
        },
        logoutUser: state => {
            state.isAuthenticated = false;
            state.user = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(loginUser.pending, state => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export const { setCurrentUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
