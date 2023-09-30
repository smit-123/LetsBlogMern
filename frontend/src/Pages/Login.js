import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/authSlice';
import { toast } from 'react-toastify';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await dispatch(loginUser(formData));
            if (!response.error) {
                setFormData({
                    email: '',
                    password: ''
                });
                navigate("/")
            }
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    return (
        <div className='row'>
            <div className='col-lg-6 m-auto'>
                <div className='card p-3 mt-3 m-1'>
                    <form onSubmit={handleSubmit}>
                        <div className='text-center'>
                            <h2>LOGIN HERE</h2>
                        </div>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />

                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <hr className='mt-4' />
                        <div className='w-100 '>
                            <button type="submit" className="btn btn-primary submit__btn float-right">
                                Submit
                            </button>
                        </div>

                    </form>
                    <div className='text-center'>
                        <Link to="/register">Register new account</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
