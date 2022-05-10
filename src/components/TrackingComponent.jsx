import React, { useRef, useEffect, useState } from "react";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Camera } from "@mediapipe/camera_utils";
import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
// import * as tf from "@tensorflow/tfjs";
// import Webcam from "react-webcam";
// import * as handPose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
// import { drawHand } from "./DrawingUtilities";
import {
  plus,
  zero,
  one,
  two,
  equals,
  three,
  four,
  nine,
  five,
  six,
  seven,
  eight,
  Okay,
  minus,
  multiply,
  divide,
  clear,
} from "../gestures";

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  },
});

hands.setOptions({
  maxNumHands: 5,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

const speak = (whatToSpeak) => {
  let utterrance = new SpeechSynthesisUtterance(whatToSpeak);
  if (!speechSynthesis.speaking) {
    speechSynthesis.speak(utterrance);
  }
};

const Numbers = {
  // zero: 0,
  // one: 1,
  // two: 2,
  // three: 3,
  // four: 4,
  // five: 5,
  // six: 6,
  // seven: 7,
  // eight: 8,
  // nine: 9,
};

var Numb = {
  var1: 0,
  var2: "",
  pre: 0,
  curr: 0,
  op: "",
  out: "",
  op1: "",
};

function roundRect(ctx, x, y, width, height, radius) {
  radius = { tl: radius, tr: radius, br: radius, bl: radius };
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
}

const arithmeticOperations = ["+", "*", "-", "/"];

const TrackingComponent = () => {
  const setNumber = (gesture, Num, currGesture) => {
    Numbers["zero"] = 0;
    Numbers["one"] = 1;
    Numbers["two"] = 2;
    Numbers["three"] = 3;
    Numbers["four"] = 4;
    Numbers["five"] = 5;
    Numbers["six"] = 6;
    Numbers["seven"] = 7;
    Numbers["eight"] = 8;
    Numbers["nine"] = 9;
    if (Num.var2 !== "stop") {
      if (gesture === "clear") {
        Num.var1 = Num.var1 / 10;
      } else {
        Num.var1 = Num.var1 * 10 + Numbers[`${gesture}`];
        Num.var2 = "stop";
      }
      // let utterrance = new SpeechSynthesisUtterance(Num.var1);
      // speechSynthesis.speak(utterrance);
      speak(Num.var1);
      console.log("spoken num");
    }
    // console.log(Num, "setNumber");
  };

  const performOperation = (Num, operation) => {
    if (Num.op !== "stop") {
      Num.pre = Num.var1;
      Num.var1 = 0;
      Num.op = operation;
      Num.op = "stop";
      Num.op1 = operation;
      console.log(Num, "Perform Operation");
      // let utterrance = new SpeechSynthesisUtterance(Num.op1);
      // speechSynthesis.speak(utterrance);
      speak(Num.op1);
      console.log("spoken operation", Num.op1);
    }
  };

  const outputAnswer = (Num) => {
    if (Num.out !== "stop") {
      Num.curr = Num.pre;
      if (Num.op1 === "+") {
        Num.curr = Num.curr + Num.var1;
      } else if (Num.op1 === "-") {
        Num.curr = Math.abs(Num.curr - Num.var1);
      } else if (Num.op1 === "*") {
        Num.curr = Num.curr * Num.var1;
      }
      Num.pre = Num.curr;
      Num.out = "stop";
      speak(Num.curr);
      console.log("Spoken curr", Num.curr);
    }
  };

  const setGesture = (gesture, Num) => {
    Num.var2 = gesture;
    //console.log(Num, "setGesture");
  };

  // const [num, setNum] = useState("");

  useEffect(() => {
    hands.onResults(onResults);
    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current });
      },
      width: 1280,
      height: 720,
    });
    camera.start();
    console.log("camera started");
  }, []);

  const callFun = async (results) => {
    let arr = [];
    for (let i = 0; i < 21; i++) {
      arr[i] = [results[i].x * 100, results[i].y * 100, results[i].z * 100];
    }
    return arr;
  };

  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const onResults = async (results) => {
    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const GE = new fp.GestureEstimator([
      zero,
      one,
      two,
      plus,
      equals,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      Okay,
      minus,
      multiply,
      divide,
      clear,
    ]);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    if (results.multiHandLandmarks) {
      // console.log(results.multiHandLandmarks)
      for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 5,
        });
        drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });
      }
    }
    canvasCtx.fontStyle = "black";
    roundRect(canvasCtx, 70, 70, 400, 300, 30);
    canvasCtx.font = "20px DM sans";
    canvasCtx.fillStyle = "#000000";
    if (results.multiHandLandmarks.length !== 0) {
      let arr = await callFun(results.multiHandLandmarks[0]);
      const gestures = await GE.estimate(arr, 9.5);
      if (
        gestures.gestures.length > 0 &&
        gestures.gestures[0] !== "undefined"
      ) {
        canvasCtx.font = "50px Arial";
        if (gestures.gestures[0].name === "=") {
          outputAnswer(Numb);
        } else if (
          gestures.gestures[0].name !== "Done" &&
          !arithmeticOperations.includes(gestures.gestures[0].name)
        ) {
          setGesture(gestures.gestures[0].name, Numb);
          // console.log("this is number", num);
        } else if (arithmeticOperations.includes(gestures.gestures[0].name)) {
          performOperation(Numb, gestures.gestures[0].name);
        } else if (gestures.gestures[0].name === "Done") {
          // setWholeNum(wholeNum * 10 + Numbers[num]);
          setNumber(Numb.var2, Numb);
          // console.log(wholeNum * 10 + Numbers[num], " :Number");
        }
        canvasCtx.font = "20px DM sans";
        canvasCtx.fillStyle = "#000000";
        canvasCtx.fillText(
          `Detected Gesture: ${gestures.gestures[0].name}`,
          120,
          170
        );
      }
    } else {
      canvasCtx.font = "20px DM sans";
      canvasCtx.fillStyle = "#000000";
      canvasCtx.fillText(`Detected Gesture: None`, 120, 170);
    }
    canvasCtx.font = "20px DM sans";
    canvasCtx.fillStyle = "#000000";
    canvasCtx.fillText(`Current Number: ${Numb.var1}`, 120, 220);
    canvasCtx.fillText(`Output: ${Numb.curr}`, 120, 270);
    canvasCtx.restore();
  };

  return (
    <div className="containor">
      <video
        ref={videoRef}
        style={{ display: "none" }}
        className="input_video"
      ></video>
      <canvas
        ref={canvasRef}
        className="output_canvas"
        width={"1280px"}
        height={"720px"}
      ></canvas>
      {/* <button
        style={{ position: "absolute", top: 100, right: 100 }}
        onClick={() => {
          let utterance = new SpeechSynthesisUtterance("1");
          speechSynthesis.speak(utterance);
        }}
      >
        Speak
      </button> */}
      {/* <div className="output_box">
        <p>Detected Gesture : {results.detected_gesture}</p>
        <p>Current Number: {results.current_number}</p>
        <p>Result : {results.result}</p>
      </div> */}
      <img src={require("../assets/google_gif.gif")} className="output_box" />
    </div>
  );
};

export default TrackingComponent;
