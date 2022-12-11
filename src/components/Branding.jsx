import React from 'react';
import { branding } from '../utils/Data';

import '../assets/styles/branding.css';

const Branding = () => {
	return (
		<section className="branding">
			<div className="container">
				<div className="row d-flex">
					{branding.map((item) => (
						<div className="col-4 d-flex" key={item.id}>
							<span className="w-25">{item.id}</span>
							<div className="info w-75">
								<h3>{item.heading}</h3>
								<p>{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Branding;
