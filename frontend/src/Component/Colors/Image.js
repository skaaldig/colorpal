import React from 'react';
import { useSpring, animated } from 'react-spring';


function Image(props) {
    return (
        <div className="user_image__container">
            <img className="user_image" src={props.image} alt="Upload a new image"/>
        </div>
    )
}

export default Image;