import React from 'react';
import styles from '../style.css'

const Card = (props) => {
    const city = props.city
    let img1 = props.city.images ? props.city.images[0] : ""

    return (
        <div className="card_layout" onClick={() => window.location.pathname = city.route}>
            <img className="image_card" src={img1} alt="" />
            <h1 >{city?.title}</h1>
            <ol>
                <div className="description_card">{city?.content}</div>
            </ol>
        </div>
    );
};

export default Card;