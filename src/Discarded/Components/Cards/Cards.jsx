import React from "react";
import { cardsData } from "../../assets/Data";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = () => {
	return (
		<div>
			{cardsData.map((card, id) => {
				return (
					<div className="parentContainer">
						<Card
							title={card.title}
							color={card.color}
							barValue={card.barValue}
							value={card.png}
							series={card.series}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
