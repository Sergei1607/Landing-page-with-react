import React from "react";
import PropTypes from "prop-types";
import { Cards } from "../component/Cards.js";

export function Cardscontainer() {
	return (
		<div className="container">
			<Cards
				title="Card Title1"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
				buttonText="Find Out More!"
			/>
			<Cards
				title="Card Title2"
				description="Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using."
				buttonText="Find Out More!"
			/>
			<Cards
				title="Card Title3"
				description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
				buttonText="Find Out More!"
			/>
			<Cards
				title="Card Title4"
				description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable as opposed to using."
				buttonText="Find Out More!"
			/>
		</div>
	);
}
