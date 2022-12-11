import React from 'react';

import IosShareIcon from '@mui/icons-material/IosShare';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import { worksData } from '../utils/Data';

import '../assets/styles/works.css';

const Works = () => {
	return (
		<section className="works">
			<div className="container">
				<div className="heading">
					<span>My Works</span>
					<h2>Some Of My Competed Projects</h2>
				</div>
				<div className="row">
					{worksData.map((data) => (
						<div className="card" key={data.id}>
							<div className="image h-100">
								<img
									src={data.cover}
									alt={data.title}
									className="img-fluid h-100"
								/>
							</div>
							<div className="card-body d-flex align-items-center justify-content-center flex-column">
								<h5>{data.title}</h5>
								<p>{data.desc}</p>
								<div className="icons d-flex align-items-center justify-space-evenly w-100">
									<FullscreenIcon />
									<IosShareIcon />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Works;
