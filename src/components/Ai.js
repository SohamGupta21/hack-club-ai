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
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.addEventListener("load", () => {
      var img = new Image();
      img.src = reader.result
      // console.log(img)
      this.setState({
        file: img,
      });
    })

    // this.setState({
    //   file: URL.createObjectURL(event.target.files[0]),
    // });
    // console.log(this.state.file)
  }

  async predictImage() {
    var tensorImg = tf.browser.fromPixels(this.state.file)
    tensorImg = tensorImg.resizeBilinear([28, 28])
    console.log("SHAPE: " + tensorImg);
    tensorImg = tensorImg.mean(2);
    console.log(tensorImg)
    tensorImg = tensorImg.reshape([1, 784])
    console.log("EIURWHFERF" + tensorImg.arraySync()[0])
    tensorImg = tensorImg.asType('float32')
    tensorImg = tensorImg.arraySync()[0]
    for(var j = 0; j < tensorImg.length; j++){
      tensorImg[j] /= 255;
    }
    tensorImg = tf.tensor(tensorImg);
    tensorImg = tensorImg.reshape([1, 784]);
    console.log("EIURWHFERF" + tensorImg.arraySync()[0]);
    var prediction = this.state.model.predict(tensorImg)
    console.log(prediction)
    var predictionArr = prediction.arraySync()[0];
    for(var i = 0; i < 10; i++){
      console.log(predictionArr[i])
    }
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
        <img src={this.state.file} alt="IMGE"/>
        <button onClick={this.predictImage}>PREDICT</button>
      </div>
    );
  }
}
