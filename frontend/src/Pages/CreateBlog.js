import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createBlog } from '../redux/blogSlice';

function CreateBlog() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: ''
    });

    const user = useSelector((state) => state.auth?.user?.user)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(createBlog({ ...formData, author: user._id }))

            if (!response.error) {
                setFormData({
                    title: '',
                    description: '',
                    category: ''
                });
            }
        } catch (error) {

        }
    };

    return (
        <div className="container mt-5 ">
            <div className="card custom-card">
                <div className="card-body">
                    <h1 className="card-title">Create a Blog</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Enter title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Description</label>
                            <textarea
                                className="form-control"
                                id="content"
                                name="description"
                                rows="4"
                                placeholder="Enter blog Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Category">Category</label>
                            <select className="form-control"
                                onChange={handleInputChange} value={formData.category} id="Category"
                                name="category">
                                <option value="Category1">Category1</option>
                                <option value="Category2">Category2</option>
                                <option value="Category3">Category3</option>
                                <option value="Category4">Category4</option>
                            </select>

                        </div>
                        <button type="submit" className="btn custom-btn submit__btn float-right">
                            Create Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
