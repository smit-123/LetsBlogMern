const User = require("../models/User");
const Blog = require("../models/blog");
const mongoose = require("mongoose")

// Function to delete a blog
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming you pass the blog ID as a parameter
        const deletedBlog = await Blog.findByIdAndRemove(blogId);

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to update a blog
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id; // Assuming you pass the blog ID as a parameter
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        return res.status(200).json(updatedBlog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Function to create a new blog
const createBlog = async (req, res) => {
    try {
        const { title, description, category, author } = req.body;

        // Check if any required field is missing
        if (!title || !description || !category || !author) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate that author is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(author)) {
            return res.status(400).json({ message: 'Invalid author ID' });
        }

        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        return res.status(201).json(savedBlog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const querystring = req.params.queryString

        if (querystring === "all" || querystring === null) {
            const blogs = await Blog.find({});
            res.status(200).json(blogs);
        } else {
            const searchResults = await Blog.search(querystring);
            res.status(200).json(searchResults);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching blogs.' });
    }
};

const getBlogsByAuthorId = async (req, res) => {
    const authorId = req.params.authorId; // Assuming you pass authorId as a route parameter
    try {
        const blogs = await Blog.find({ author: authorId });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching blogs by author ID.' });
    }
};


module.exports = {
    deleteBlog,
    updateBlog,
    createBlog,
    getAllBlogs,
    getBlogsByAuthorId
};
