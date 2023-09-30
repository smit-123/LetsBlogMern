import React from 'react';

function SingleBlog() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-post">
                        <h1 className="blog-title">Unique Blog Post Title</h1>
                        <p className="blog-meta">
                            <span className="blog-date">September 15, 2023</span> by{' '}
                            <span className="blog-author">John Doe</span>
                        </p>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Blog "
                            className="img-fluid mb-4"
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            hendrerit, urna vel suscipit vestibulum, metus augue interdum
                            urna, eu tincidunt ligula elit et risus.
                        </p>
                        <p>
                            Nulla nec interdum arcu. Sed tristique sapien vitae justo
                            consequat, a volutpat metus luctus. Nunc facilisis facilisis
                            augue, in iaculis tellus volutpat id. Sed id metus purus. Nullam
                            sed orci tortor. Aenean ut augue et sapien malesuada ultrices vel
                            ac ex.
                        </p>
                        <blockquote className="blockquote">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus ac vehicula lectus. Fusce pharetra at orci sed
                                vehicula."
                            </p>
                            <footer className="blockquote-footer">Jane Smith</footer>
                        </blockquote>
                        <p>
                            Maecenas eu leo sit amet purus condimentum mattis. In euismod
                            tristique justo a aliquam. Integer facilisis mauris vitae
                            scelerisque. Nam nec ipsum ac odio cursus mattis. Praesent
                            eleifend, elit vel varius bibendum, libero nisi convallis eros,
                            eu pellentesque metus tortor et nibh.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4" >
                    <div className="sidebar">
                        <div className="widget">
                            <h5>Related Posts</h5>
                            <ul className="list-unstyled list-unstyledSB">
                                <li>
                                    <a href="#!">Related Post 1</a>
                                </li>
                                <li>
                                    <a href="#!">Related Post 2</a>
                                </li>
                                <li>
                                    <a href="#!">Related Post 3</a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h5>Categories</h5>
                            <ul className="list-unstyled list-unstyledSB">
                                <li>
                                    <a href="#!">Category 1</a>
                                </li>
                                <li>
                                    <a href="#!">Category 2</a>
                                </li>
                                <li>
                                    <a href="#!">Category 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
