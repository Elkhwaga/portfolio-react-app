import React from 'react';
import { testimonialData } from '../utils/Data';

import '../assets/styles/testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row d-flex">
          {testimonialData.map((data, index) => (
            <div className="col-3" key={index}>
              <h4>{data.num}</h4>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
