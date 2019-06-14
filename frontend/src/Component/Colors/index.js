import React, { Component } from "react";

import axios from "axios";




export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
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
        console.log(res)
      })
  }

  render() {
    return(
      <div>
        <h1>Books</h1>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}