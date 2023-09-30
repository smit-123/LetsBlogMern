import React from 'react';


function Footer() {
    return (
        <footer className="bg-dark text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="mb-4">About Us</h5>
                        <p>
                            This project is made by smit suthar as a task for the role of mern stack developer.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">Services</a>
                            </li>
                            <li>
                                <a href="#!">Blog</a>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-4">Contact Us</h5>
                        <address>
                            123 Main Street<br />
                            City, State ZIP<br />
                            Email: example@example.com<br />
                            Phone: (123) 456-7890
                        </address>
                    </div>

                </div>
            </div>
            <div className="text-center mt-4">
                &copy; {new Date().getFullYear()} Lets Blog
            </div>
        </footer>
    );
}

export default Footer;
