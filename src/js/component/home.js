import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Nadbar } from "../component/NavBar.js";

import { Jumbotrom } from "../component/Jumbotrom.js";

import { Cardscontainer } from "../component/CardsContainer.js";

import { Footer } from "../component/Footer.js";

//create your first component

export function Home() {
	return (
		<div>
			<Nadbar title="Start Bootstrap" />
			<Jumbotrom
				title="A Warm Welcome!"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				buttonText="Call to action!"
			/>
			<Cardscontainer />
			<Footer />
		</div>
	);
}
