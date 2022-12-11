import React from 'react';
import { wrapperData } from '../utils/Data';

import '../assets/styles/wrapper.css';

const Wrapper = () => {
	return (
		<section className="wrapper">
			<div className="container">
				{wrapperData.map((data, index) => (
					<div
						className="info d-flex flex-column align-items-center"
						key={index}
					>
						<span>{data.title}</span>
						<h4>{data.heading}</h4>
						<p>{data.desc}</p>
						<button className="btn btn-primary">Contact Us</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Wrapper;
