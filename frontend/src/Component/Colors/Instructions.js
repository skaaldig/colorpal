import React from 'react';
import { useSpring, animated } from 'react-spring';

function Instructions(props) {
    const slideIn = useSpring({from: {marginLeft: -700}, to: {marginLeft: 0}})
    return (
    <div className="instructions">
        <animated.div className="instructions__wrapper" style={slideIn}>
            <h1>
                10 Most Dominant Colors
            </h1>
            <p>
                Upload a photo to discover the most dominant colors in the image and their hexidecimal codes.
            </p>
        </animated.div>
    </div>
    )
}

export default Instructions;