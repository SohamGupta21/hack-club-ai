import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

export default class Ai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      im: new Image(),
      file: null,
    };
    this.loadmodel = this.loadmodel.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.predictImage = this.predictImage.bind(this)


  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
    console.log(this.state.file)
  }

  async predictImage() {
    var prediction = this.state.model.predict(this.state.file)
    console.log(prediction)
  }

  async loadmodel() {
    this.setState({
      model: await tf.loadLayersModel("/tfjs_model/model.json"),
    });
    console.log(this.state.model);
  }

  componentDidMount() {
    this.loadmodel();
  }

  render() {
    return (
      <div>
        <h1>Loaded</h1>
        <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} alt="IMAGE"/>
        <button onClick={this.predictImage} value="PREDICT"/>
      </div>
    );
  }
}
