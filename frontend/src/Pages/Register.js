import React, { useState } from 'react'
import ImageSelector from '../Components/ImageSelector'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/authSlice'
import { toast } from 'react-toastify'

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        cpassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { fullname, email, password, cpassword } = formData
        if (password !== cpassword) {
            toast.warning("Password and confirm password sholud be same")
        } else {
            try {
                const response = await dispatch(registerUser({ fullname, email, password }));
                if (!response.error) {
                    navigate("/login")
                    setFormData({
                        fullname: '',
                        email: '',
                        password: '',
                        cpassword: '',
                    });
                }

            } catch (error) {
                toast.error("Something went wrong!")
            }
        }

    }
    return (
        <div className='row'>
            <div className='col-lg-6 m-auto'>
                <div className='card p-3 mt-3 m-1'>
                    <form onSubmit={handleSubmit}>
                        <div className='text-center'>
                            <h2>REGISTER HERE</h2>
                        </div>
                        <hr />
                        <ImageSelector />
                        <div className="form-group">

                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                name="fullname"
                                aria-describedby="fullname"
                                placeholder="Enter your full name"
                                value={formData.fullname}
                                onChange={handleInputChange}
                                required
                            />

                        </div>
                        <div className="form-group">

                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="email"
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
                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="cpassword"
                                name="cpassword"
                                placeholder="Confirm Password"
                                value={formData.cpassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <hr className='mt-4' />
                        <div className='w-100 '>
                            <button type="submit" className="btn btn-primary float-right submit__btn">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <Link to="/login">Already registered?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
