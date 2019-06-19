import React from 'react';
import lightOrDark from'./Helper';


function blackOrWhite(color) {
  const hue = lightOrDark(color)

  if (hue === 'light') {
    return '#000000'
  } else {
    return '#ffffff'
  }
}


function ColorPalette(props) {
    const name = "color_box";
    const colors = props.colors
    const colorBoxes = colors.map((color) => {
        let fontColor = blackOrWhite(color)
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