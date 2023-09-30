import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage as the storage engine
import authReducer from './authSlice';
import blogReducer from './blogSlice';

const persistConfig = {
    key: 'root', // Change this key as needed
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedBlogReducer = persistReducer(persistConfig, blogReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        blog: persistedBlogReducer
    },
});

const persistor = persistStore(store); // This will persist your Redux store

export { store, persistor };
