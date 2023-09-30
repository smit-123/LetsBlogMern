import React, { useEffect, useState } from 'react'
import HeroHeader from '../Components/HeroHeader'
import BlogCard from '../Components/BlogCard'
import axios from 'axios'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [blogData, setBlogData] = useState([])
    const [arrayReverse, setArrayReverse] = useState(true)
    const data = { querystring: searchQuery }
    useEffect(() => {
        axios.get(`http://localhost:9000/api/blog/getallblogs/${searchQuery ? searchQuery : "all"}`).then((response) => {

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
        <div>
            <HeroHeader setSearchQuery={setSearchQuery} />
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
                            return <>
                                <BlogCard blog={blog} />
                            </>
                        })}
                    </> : <div className='text-center w-100'><h3 className='text-muted mt-4 '>No Blogs</h3></div>}


                </div>
            </div>
        </div>
    )
}

export default Home
