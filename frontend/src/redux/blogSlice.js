import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    blogs: [],
    loading: false,
    error: null,
};

export const createBlog = createAsyncThunk('blog/create', async (blogData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:9000/api/blog/create-blog', blogData);
        toast.success("Blog created successfully");
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
});

export const updateBlog = createAsyncThunk('blog/update', async ({ blogId, updatedData }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`http://localhost:9000/api/blog/update-blog/${blogId}`, updatedData);
        toast.success("Blog updated successfully");
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
});

export const deleteBlog = createAsyncThunk('blog/delete', async (blogId, { rejectWithValue }) => {
    try {
        await axios.delete(`http://localhost:9000/api/blog/delete-blog/${blogId}`);
        toast.success("Blog deleted successfully");
        return blogId;
    } catch (error) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
});

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createBlog.pending, state => {
                state.loading = true;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs.push(action.payload);
                state.error = null;
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(updateBlog.pending, state => {
                state.loading = true;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.loading = false;
                const updatedBlogIndex = state.blogs.findIndex(blog => blog.id === action.payload.id);
                if (updatedBlogIndex !== -1) {
                    state.blogs[updatedBlogIndex] = action.payload;
                }
                state.error = null;
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(deleteBlog.pending, state => {
                state.loading = true;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
                state.error = null;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export default blogSlice.reducer;
