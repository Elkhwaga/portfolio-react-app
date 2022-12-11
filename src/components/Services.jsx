import React from 'react';
import { servicesData } from '../utils/Data';

const Services = () => {
	return (
		<section className="services">
			<div className="container">
				<div className="heading">
					<span className="text-uppercase">My Services</span>
					<h2>Interactive Services Offered Me</h2>
				</div>
				<div className="row d-flex flex-wrap">
					{servicesData.map((data) => (
						<div className="col-4" key={data.id}>
							<div className="card d-flex flex-column align-items-center">
								<div className="iamge">
									<img
										src={data.cover}
										alt={data.title}
										className="img-fluid"
									/>
								</div>
								<div className="card-body">
									<h5>{data.title}</h5>
									<p>{data.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
