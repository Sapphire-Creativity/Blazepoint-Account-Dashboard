import React from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
const Card = (props) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<div className="Card">
			<AnimateSharedLayout>
				{expanded ? <ExpandedCard /> : <CompactCard />}
			</AnimateSharedLayout>
		</div>
	);
};


//CompactCard
function CompactCard({param}){
    return(
        <div className="CompactCard">
            bbbbbbbbbbbbbbbbbb
        </div>
    )
}

export default Card;
