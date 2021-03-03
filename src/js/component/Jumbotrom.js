import React from "react";
import PropTypes from "prop-types";

export function Jumbotrom(props) {
	return (
		<div className="container">
			<div className="jumbotron mt-4">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead mb-4">{props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.link}
					role="button">
					{props.buttonText}
				</a>
			</div>
		</div>
	);
}

Jumbotrom.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string,
	link: PropTypes.string
};
