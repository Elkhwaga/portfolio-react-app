import React, { Fragment } from 'react';
import { aboutData } from '../utils/Data';

import '../assets/styles/about.css';

const About = () => {
	return (
		<section className="about vh-100">
			<div className="container h-100">
				<div className="row d-flex align-items-center h-100">
					{aboutData.map((data, index) => (
						<Fragment key={index}>
							<div className="col-6">
								<span className="text-uppercase">About Me</span>
								<h2>{data.title}</h2>
								<p>{data.desc1}</p>
								<p>{data.desc2}</p>
								<p>{data.desc3}</p>
								<button className="btn btn-primary">Download CV</button>
							</div>
							<div className="col-6 h-100 overlay">
								<img src={data.cover} alt="" className="img-fluid" />
							</div>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
