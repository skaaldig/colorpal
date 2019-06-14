import React, { Component } from "react";

import axios from "axios";

function makeHexArray(hexObject) {
  const hexArray = Object.values(hexObject).slice(1,10)
  return hexArray
}

function ColorPalette(props) {
  const name = "boxy";
  const colors = props.colors
  const colorBoxes = colors.map((color) => 
  	<div className={name} style={{backgroundColor: color}}>{color}</div>
  )
  return (
    <div>
      {colorBoxes}
    </div>
  )
}

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      uploadedImage: null,
      colors: null,
    }

    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileSelectedHandler(event) {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler() {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('http://localhost:8000/api/images/', fd)
      .then(res => {
        this.setState({uploadedImage: res.data.image})
        this.setState({colors: makeHexArray(res.data.top_colors)})
      })
  }

  render() {
    const hasColors = this.state.colors
    let colors
    if (hasColors) {
      colors = <ColorPalette colors={this.state.colors}/>
    } else {
      colors = null
    }

    return(
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
        <img src={this.state.uploadedImage} alt="none"></img>
        {colors}
      </div>
    )
  }
}