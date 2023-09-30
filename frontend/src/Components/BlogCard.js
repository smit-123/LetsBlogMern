import React from 'react';
import moment from 'moment';

function BlogCard({ blog }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img
                    src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg"
                    className="card-img-top"
                    alt="Blog"
                />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            Date: {moment(blog.createdAt).fromNow()}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
