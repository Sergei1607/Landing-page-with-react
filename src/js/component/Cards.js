import React from "react";
import PropTypes from "prop-types";

import rigoImage from "../../img/rigo-baby.jpg";

let estilos = {
	display: "inline-block"
};

export function Cards(props) {
	return (
		<div className="col-3 mb-2" style={estilos}>
			<div className="card">
				<img src={rigoImage} />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						{props.buttonText}
					</a>
				</div>
			</div>
		</div>
	);
}

Cards.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string,
	link: PropTypes.string
};
