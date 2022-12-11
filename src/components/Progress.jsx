import React from 'react';

const Progress = ({ title, done }) => {
	return (
		<div className="progress">
			<div className="content d-flex justify-space-between align-items-center">
				<h5 className="text-uppercase">{title}</h5>
				<span>{done} %</span>
			</div>
			<div className="prog">
				<div
					className="progress-done"
					style={{ opacity: 1, width: `${done}%` }}
				></div>
			</div>
		</div>
	);
};

export default Progress;
