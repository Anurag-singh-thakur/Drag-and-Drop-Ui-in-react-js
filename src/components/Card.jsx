
import React, { useState } from 'react';
import './Card.css';

const Card = ({ text }) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => setShowMore(true);

    return (
        <div className="card">
            <p>{showMore ? text : text.slice(0, 20) + '...'}</p>
            {!showMore && <button onClick={handleShowMore}>Show More</button>}
        </div>
    );
};

export default Card;
