import React from 'react';

function Instructions(props) {
    return (
    <div className="instructions">
        <div className="instructions__wrapper">
            <h1>
                10 Most Dominant Colors
            </h1>
            <p>
                Upload a photo to discover the most dominant colors in the image and their hexidecimal codes. 
            </p>
            <p>
                <ul className="instructions__ul">
                    <li className="instructions__li">Only PNG and JPEG file types are supported</li>
                    <li className="instructions__li">File size is limited to 3MB</li>
                </ul>
            </p>
        </div>
    </div>
    )
}

export default Instructions;