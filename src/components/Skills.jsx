import React from 'react';
import Progress from './Progress';
import { skillsData } from '../utils/Data';

import '../assets/styles/skills.css';

const Skills = () => {
	return (
		<section className="skills">
			<div className="container">
				<div className="heading">
					<span className="text-uppercase">Why Choose Us</span>
					<h2>Some Of My Skills</h2>
				</div>
				<div className="row d-flex">
					<div className="col-6">
						<div className="box d-flex flex-column">
							<Progress done="70" title="html" />
							<Progress done="80" title="Css" />
							<Progress done="90" title="Javascript" />
							<Progress done="70" title="React js" />
						</div>
					</div>
					<div className="col-6">
						{skillsData.map((data, index) => (
							<div className="info" key={index}>
								<h4>{data.title}</h4>
								<p>{data.para}</p>
								<p>{data.para1}</p>
								<button className="btn btn-primary">Hire Me</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
