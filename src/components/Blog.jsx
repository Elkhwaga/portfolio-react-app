import React from 'react';
import { Link } from 'react-router-dom';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { blogData } from '../utils/Data';

import '../assets/styles/blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="heading">
          <span className="text-uppercase">Latest Blog</span>
          <h2>Read Inspirational Story Every Week</h2>
        </div>
        <div className="row d-flex flex-wrap">
          {blogData.map((data) => (
            <div className="col-4" key={data.id}>
              <div className="card d-flex flex-column align-items-center">
                <div className="image">
                  <img
                    src={data.cover}
                    alt={data.title}
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <span>{data.date}</span>
                  <h5>{data.title}</h5>
                  <p>{data.category}</p>
                  <Link to="/" className="d-flex align-items-center">
                    Read More
                    <span>
                      <KeyboardDoubleArrowRightIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
