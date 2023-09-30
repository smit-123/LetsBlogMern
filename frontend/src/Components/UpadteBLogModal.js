import React, { useEffect, useState } from 'react'
import { updateBlog } from '../redux/blogSlice';
import { useDispatch } from 'react-redux';

const UpadteBLogModal = ({ blogDetails }) => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title: blogDetails.title || '',
        description: blogDetails.description || '',
        category: blogDetails.category || 'Category1', // Default category or set to the initial value
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Make an API call to update the blog with formData
        // Replace the following with your actual API call
        console.log('Updated Blog Data:', formData);
        dispatch(updateBlog({ blogId: blogDetails._id, updatedData: formData }))

        window.location.reload()
        // Close the modal if needed
        // Example: document.getElementById('exampleModal').modal('hide');
    };

    useEffect(() => {
        // Update the formData when blogDetails change (e.g., when user clicks the edit button)
        setFormData({
            title: blogDetails.title || '',
            description: blogDetails.description || '',
            category: blogDetails.category || 'Category1',
        });
    }, [blogDetails]);

    return (
        <>
            <button className='btn btn-sm btn-light float-right' title='delete' data-toggle="modal"
                data-target="#exampleModal" >✏️</button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Blog
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card ">
                                <div className="card-body">

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
                                                id="Category"
                                                name="category">
                                                <option value="Category1">Category1</option>
                                                <option value="Category2">Category2</option>
                                                <option value="Category3">Category3</option>
                                                <option value="Category4">Category4</option>
                                            </select>

                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="submit" className="btn custom-btn submit__btn float-right">
                                            Save Blog
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default UpadteBLogModal