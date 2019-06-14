import React, { Component } from "react";

import axios from "axios";

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
    images:[],
    };
    this.loadImages = this.loadImages.bind(this);
  }

  componentWillMount() {
    this.loadImages();
  }

  async loadImages()
  {
    const promise = await axios.get("http://localhost:8000/api/images.json");
    const status = promise.status;
    if(status===200)
    {
      console.log(promise.data)
      const data = promise.data.data;
      this.setState({images:data});
    }
  }

  render() {
    return(
      <div>
        <h1>Books</h1>
            {this.state.images.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}