import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { logoutUser } from '../redux/authSlice'

const Navbar = () => {
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogut = () => {
        dispatch(logoutUser())
        navigate("/login")

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <Link to='/' className="navbar-brand">
                Lets Blog
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    {user.isAuthenticated ? <><li className="nav-item active">
                        <Link to="/my-blogs" className="nav-link">
                            My Blogs
                        </Link>
                    </li></>
                        : <></>}

                </ul>
                <div className=" my-2 my-lg-0">
                    {user.isAuthenticated ? <>
                        <Link to="/create-blog">
                            <button className="btn btn-outline-primary mr-2 my-2 my-sm-0" type="submit">
                                Create Blog
                            </button>
                        </Link>

                        <button className="btn btn-outline-primary mr-2 my-2 my-sm-0" onClick={() => {
                            handleLogut()
                        }} type="submit">
                            Logout
                        </button>

                        <span className='text-light'>{user?.user?.user?.fullname}</span>
                    </> : <>
                        <Link to="/login">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Login
                            </button>
                        </Link>
                    </>}



                </div>
            </div>
        </nav>

    )
}

export default Navbar