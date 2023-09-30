
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CreateBlog from './Pages/CreateBlog';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import SingleBlog from './Pages/SingleBlog';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import { ToastContainer } from 'react-toastify';
import MyBlogs from './Pages/MyBlogs';
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ToastContainer />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/single-blog" element={<SingleBlog />} />
              <Route path="/my-blogs" element={<MyBlogs />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>

    </>
  );
}

export default App;
