import React, {useRef,useState, useEffect} from 'react';
import Webcam from "react-webcam";
import Speech from 'speak-tts';
//import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import './App.css';
import {drawHand} from "./utilities_drawing";
import * as fp from "fingerpose";
import {thumbsDownGesture} from "./thumbs_down";
import {lightGesture} from "./lighton" ;
import {gunGesture} from "./gun_symbol";
import {foodGesture} from "./food_symbol";
import {hiiGesture} from "./hii";
import {someGesture} from "./something";
import {iwillGesture} from "./I_will";
import victory from "./victory.png";
import lighton from "./lighton.png";
import lightoff from "./lightoff.png";
import help from "./help.png";
import food from "./food.png";
import thankyou from "./thankyou.png";
import water from "./water.png";
import toilet from "./toilet.png";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = {"i will do it":victory,"where is toilet":toilet,"iam thirsty":lighton,"not intersted":lightoff,"i need help":help,"iam hungry":food,thankyou:thankyou,"i don't know":water};
  const speech = new Speech()
  speech.init({'lang':'en-IN'})

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(()=>{
      detect(net)
    },100)
  };

  

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {

      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight

      const hand = await net.estimateHands(video);
      console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          lightGesture,
          thumbsDownGesture,
          gunGesture,
          foodGesture,
          hiiGesture,
          someGesture,
          iwillGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        console.log(gesture)
        if (gesture.gestures !== undefined && gesture.gestures.length>0){

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null,confidence)
          );
          console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          speech.speak({text:gesture.gestures[maxConfidence].name})
          
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand,ctx);
    }
  };

  


  return (
    <div className="App">
      <header className="App-header">
        <Webcam 
          ref = {webcamRef}
          style = {{
            position:"absolute",
            marginLeft:"auto",
            marginRight:"auto",
            left:50,
            top:50,
            textAlign:"center",
            zindex:9,
            width:640,
            height:480,

          }} 
        />
        <canvas
          ref = {canvasRef}
          style = {{
            position:"absolute",
            marginLeft:"auto",
            marginRight:"auto",
            left:50,
            top:50,
            textAlign:"center",
            zindex:9,
            width:640,
            height:480,
          }} 
        />
        {emoji !== null ?(
          <img
            src={images[emoji]}
            alt="translation"
            style={{
              position:"absolute",
              right:250,
              top:100,
              textAlign:'center',
              marginLeft:'auto',
              marginRight:'auto',
            }}
          />  
        ) : (
          ""
        )}
        

      </header>
      <button  onClick = {runHandpose} style = {{position:"absolute",left:300,top:550,textAlign:"center",color:"magneta",backgroundColor:"aqua",borderRadius:12,border:"none",padding:15,width:150, fontFamily:"sans-serif",fontSize:25}}>START</button>
      <button style={{position:"absolute",right:280,top:25,textAlign:"center",backgroundColor:"orange",color:"magneta",padding:10,borderRadius:14,border:"none",fontFamily:'sans-serif',fontSize:25}}>TRANSLATION</button>
    </div>
  );
}

export default App;
