import React, {useState} from "react";
import * as tf from "@tensorflow/tfjs";

export default function Ai(){

  const [model, setModel] = useState(null);
  const loadmodel = async (p) => {
    console.log("here")
    this.model = await tf.loadLayersModel("https://localhost/tfjs_model/model.json");
    console.log(this.model)
  }

  loadmodel();

  const im = new Image();
  im.src = "five.jpg";
  im.onload = () => {
  const a = tf.browser.fromPixels(im, 4);
  a.print();
  console.log(a.shape)};
  return (
    <div>
      <h1>Loaded</h1>
      {/* <p>{a.shape}</p> */}
    </div>
    
  );
}