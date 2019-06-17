import React from 'react';

function Instructions(props) {
    return (
    <div class="instructions">
        <h1>
            10 Most Dominant Colors
        </h1>
        <p>
            Upload a photo to discover the most dominant colors in the image and their       hexidecimal codes. 
        </p>
        <p>
            <ul class="instructions__ul">
            <li class="instructions__li">Only PNG and JPEG file types are supported</li>
            <li class="instructions__li">File size is limited to 3MB</li>
            </ul>
        </p>
    </div>
    )
}

export default Instructions;