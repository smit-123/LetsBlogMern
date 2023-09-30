// blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    createdAt: { type: Date, default: Date.now },
});

// Add a static method to the schema for searching blogs
blogSchema.statics.search = async function (searchString) {
    const regex = new RegExp(searchString, 'i'); // 'i' for case-insensitive search

    return this.find({
        $or: [
            { title: regex },
            { description: regex }
        ],
    });
};

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
