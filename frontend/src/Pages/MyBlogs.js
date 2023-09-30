import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MyBlogCard from '../Components/MyBlogCard'

function MyBlogs() {
    const [searchQuery, setSearchQuery] = useState("")
    const [blogData, setBlogData] = useState([])
    const [arrayReverse, setArrayReverse] = useState(true)
    const userId = useSelector((state) => state?.auth?.user?.user._id)

    useEffect(() => {
        axios.get(`http://localhost:9000/api/blog/blogs-by-author-id/${userId}`).then((response) => {

            if (arrayReverse) {
                setBlogData(response.data.reverse())
            } else {
                setBlogData(response.data)
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [searchQuery, arrayReverse])
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <h3 className='mt-2'>All Blogs</h3>
                    <h3 className='mt-2 ml-auto'>
                        <button className='btn btn-light' onClick={() => { setArrayReverse(!arrayReverse) }}>
                            Date {arrayReverse ? "↑" : "↓ "}
                        </button>
                    </h3>
                </div>
                <hr />
                <div className='row'>
                    {blogData.length > 0 ? <>
                        {blogData && blogData.map((blog, index) => {
                            return <MyBlogCard blog={blog} />
                        })}
                    </> : <div className='text-center w-100'><h3 className='text-muted mt-4 '>No Blogs</h3></div>}
                </div>
            </div>
        </>)
}

export default MyBlogs
