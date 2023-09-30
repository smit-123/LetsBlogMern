import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
import UpadteBLogModal from './UpadteBLogModal';

function MyBlogCard({ blog }) {
    const handleDeleteBlog = (id) => {
        axios.delete(`http://localhost:9000/api/blog/delete-blog/${id}`).then((response) => {
            toast.success("Deleted successfully")
            window.location.reload()
        }).catch((error) => {
            toast.error(error.message)
        })
    }
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
                <div className='card-footer'>
                    <button className='btn btn-sm btn-danger' title='delete' onClick={() => handleDeleteBlog(blog._id)}>🗑️</button>

                    <UpadteBLogModal blogDetails={blog} />
                </div>
            </div>
        </div>
    );
}

export default MyBlogCard;
