import React from "react";
import * as tf from "@tensorflow/tfjs";

export default class Ai extends React.Component{

  constructor(props){
    super(props);
    this.state={
      model: null,
    };
    this.loadmodel();
  }

  loadmodel = async (p) => {
    console.log("here");
    this.setState({"model": await tf.loadLayersModel("/tfjs_model/model.json")});
    console.log(this.state.model)
  }

  render() {
    return (
    <h1>Loaded</h1>
    );
  }


}