import React from 'react';

function ColorPalette(props) {
    const name = "color_box";
    const colors = props.colors
    const colorBoxes = colors.map((color) => 
      <div className={name} style={{backgroundColor: color}}>
        <div className="color_box__labels">{color}</div>
      </div>
    )
    return (
      <div className="color_box__container">
        {colorBoxes}
      </div>
    )
  }

  export default ColorPalette;