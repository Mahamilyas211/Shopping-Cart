import React from 'react'
import Heading from '../../common/Heading'
import { blog } from '../../assets/data/data'

const Blog = () => {
  return (
    <>
    <section className='blog'>
    <Heading title='LATEST BLOG POSTS' desc='Latest marketplace news, success stories and tutorials.'/>

    <div className="posts">
        {blog.slice(0,3).map((items) => (
            <div className="post">
                <div className="content">
                    <div className="img">
                    <img src={items.cover} alt="" />
                    </div>
                <div className="text">
                    <button className='button'>{items.category}</button>
                    <p>POST DATE : <span>{items.date}</span></p>
                    <h3>{items.title.slice(0,34)} ...</h3>
                </div>
                </div>
            </div>
        ))}
    </div>

    </section>
    </>
  )
}

export default Blog