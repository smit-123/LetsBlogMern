const blogRouter = require("express").Router()
const { createBlog, updateBlog, deleteBlog, getAllBlogs, getBlogsByAuthorId } = require("../controllers/blogController.js")

blogRouter.post("/create-blog", createBlog)
blogRouter.put("/update-blog/:id", updateBlog)
blogRouter.delete("/delete-blog/:id", deleteBlog)
blogRouter.get("/blogs-by-author-id/:authorId", getBlogsByAuthorId)
blogRouter.get("/getallblogs/:queryString", getAllBlogs)

module.exports = blogRouter