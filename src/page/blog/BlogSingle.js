import React from 'react'
import BlogSingleleft from '../../components/blog/BlogSingleleft'
import BurchampSinglepage from '../../components/burchamp/BurchampSinglepage'
import BlogSidebar from './BlogSidebar'
import './blogsingle.css'

const BlogSingle = () => {
  return (
    <>
    <BurchampSinglepage category="category" subcategory="Sub Category" title="How to Tag Faces in the Android Gallery" />
    <div className='container blog-single-page'>
        <div className='row'>
            <div className='col-12 col-sm-8 col-md-9 blog-single-page-left'>
                <BlogSingleleft />
            </div>
            <div className='col-12 col-sm-4 col-md-3 blog-single-page-right'>
                <BlogSidebar />
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogSingle
