import React, {useState} from "react";
import * as tf from "@tensorflow/tfjs";

export default function Ai(){

  const [model, setModel] = useState(null);
  const loadmodel = async (p) => {
    console.log("here")
    this.model = await tf.loadLayersModel("/tfjs_model/model.json");
    console.log(this.model)
  }

  loadmodel();
  return (
    <h1>Loaded</h1>
  );
}