import React from 'react';
import lightOrDark from'./Helper';

function ColorPalette(props) {
    const name = "color_box";
    const colors = props.colors
    const colorBoxes = colors.map((color) => {
      let fontColor
      let brightness = lightOrDark(color)
      if (brightness === 'light') {
        fontColor = '#000000';
      } else {
        fontColor = '#ffffff';
      }
      return (
      <div className={name} style={{backgroundColor: color}}>
        <div className="color_box__labels" style={{color: fontColor}}>{color}</div>
      </div>
      )
      }
    )
    return (
      <div className="color_box__container">
        {colorBoxes}
      </div>
    )
  }

  export default ColorPalette;