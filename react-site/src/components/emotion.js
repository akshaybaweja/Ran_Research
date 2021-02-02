import React from 'react';
import './App.css';
import happiness from "./Icons/Emotion/Emotion_Happiness .svg";
import fear from "./Icons/Emotion/Emotion_Fear.svg";
import sympathy from "./Icons/Emotion/Emotion_Sympathy.svg";
import sadness from "./Icons/Emotion/Emotion_Sadness.svg";
import anger from "./Icons/Emotion/Emotion_Anger.svg";
import disgust from "./Icons/Emotion/Emotion_Disgust.svg";
import love from "./Icons/Emotion/Emotion_Love.svg";
class Emotion extends React.Component{
  render(){
    return(
<div class="col-10 main-content">
  <section class="main-head">


    <h2>Emotion</h2>
    <h3>Select one emotion to start</h3>

  </section>
  <section class="emotion-table">
    <div class="row emotion">
      <div class="col">
        <div class="bg-light emotion-box emotion d-flex align-items-center">
        <img src={happiness} alt="" class="emotion-logo happiness"/>
      </div>

        <h4 class="text-center">Happiness</h4>

      </div>
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
          <img src={fear} alt="" class="emotion-logo fear"/>
        </div>
        <h4 class="text-center">Fear</h4>
      </div>
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
            <img src={sympathy} alt="" class="emotion-logo sympathy"/>
        </div>
        <h4 class="text-center">Sympathy</h4>
      </div>
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
          <img src={sadness} alt="" class="emotion-logo sadness"/>
        </div>
        <h4 class="text-center">Sadness</h4>
      </div>
    </div>
    <div class="row emotion">
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
          <img src={anger} alt="" class="emotion-logo anger"/>
      </div>
      <h4 class="text-center">Anger</h4>
      </div>
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
          <img src={disgust} alt="" class="emotion-logo disgust"/>
        </div>
        <h4 class="text-center">Disgust</h4>
      </div>
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
          <img src={love} alt="" class="emotion-logo love"/>
        </div>
        <h4 class="text-center">Love</h4>
      </div>
      <div class="col">
        <div class="bg-light  emotion-box emotion d-flex align-items-center">
          <img src={disgust} alt="" class="emotion-logo gratitude"/>
        </div>
        <h4 class="text-center">Disgust</h4>
      </div>
    </div>
  </section>
</div>
)
}
}

export default Emotion;
