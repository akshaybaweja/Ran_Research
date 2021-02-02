import React from 'react';
import './App.css';
import emotion from "./Icons/Small Icons/mood-24px-grey.svg";
import tactor from "./Icons/Small Icons/tactor-grey.svg";
import behavior from "./Icons/Small Icons/touch-grey.svg";
import neutral from "./Icons/Emotion/Emotion_Neutral.svg";
import happiness from "./Icons/Emotion/Emotion_Happiness .svg";
import fear from "./Icons/Emotion/Emotion_Fear.svg";
import sympathy from "./Icons/Emotion/Emotion_Sympathy.svg";
import sadness from "./Icons/Emotion/Emotion_Sadness.svg";
import anger from "./Icons/Emotion/Emotion_Anger.svg";
import disgust from "./Icons/Emotion/Emotion_Disgust.svg";
import love from "./Icons/Emotion/Emotion_Love.svg";
import gratitude from "./Icons/Emotion/Emotion_Gratitude.svg";
import shake from "./Icons/Tactor/Gesture icons_Shake.svg";
import squeeze from "./Icons/Tactor/Gesture icons_Squeeze-15.svg";
import hit from "./Icons/Tactor/Gesture icons_Hit.svg";
import pat from "./Icons/Tactor/Gesture icons_Pat-14.svg";
import push from "./Icons/Tactor/Gesture icons_Push-21.svg";
import rub from "./Icons/Tactor/Gesture icons_Rub-18.svg";
import stroke from "./Icons/Tactor/Gesture icons_Stroke.svg";
import tap from "./Icons/Tactor/Gesture icons_Tap-17.svg";
import trange from "./Icons/Small Icons/touch_range.svg";
import tspeed from "./Icons/Small Icons/speed-touch.svg";
import rspeed from "./Icons/Small Icons/speed_retreat.svg";
import randomness from "./Icons/Small Icons/Touch_randomness.svg";
import tint from "./Icons/Small Icons/touch_interval.svg";
import irand from "./Icons/Small Icons/interval_randomness.svg";
import play from "./Icons/play-filled.svg";
import pause from "./Icons/pause-filled.svg";
import arrow from "./Icons/Small Icons/arrow.svg";
import Emotion from './emotion';
import Sketch from 'react-p5';

//TO DO: Add the emotion and placeholders to the left bar.
//Allow users to go home with the top navigation
//Allow users to clear selection of tactor and emotion
//Add graph and sliders
//Add serial library
//Add Archive


class LeftNav extends React.Component{


angle = 0;
count = 0;
x =0;
timer;
from = false;
volhistory = [];


constructor(props) {
  super(props);
  this.state = {
    home: true,
    emotion: false,
    estate: null,
    tactor: false,
    tstate: null,
    behavior: false,
    bstate: null,
    eselected:false,
    eicon: null,
    ename: null,
    tselected:false,
    ticon: null,
    tname: null,
    trange:[],
    tspeed:[],
    rspeed:[],
    randomness:[],
    tint:[],
    irand:[],
    shake: null,
    squeeze: null,
    hit: null,
    pat: null,
    push: null,
    rub: null,
    stroke: null,
    tap: null,
  };
}

handleClick(name) {
  switch (name) {
    case "emotion":
      this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      break;
    case "tactor":
      this.setState({home: false, emotion: false, estate:null, tactor: true, tstate:"active", behavior: false, bstate: null});
      break;
    case "emotionselect":
      if(this.state.tselected){
        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({home: false, emotion: false, estate:null, tactor: true, tstate:"active", behavior: false, bstate: null});
      }
      break;
    case "tactselect":
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    case "behavior":
    this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      break;
  }
}

emotionSelect(name){
this.setState({eselected:true});
let tname = this.state.tname;
  switch (name) {
    case "happiness":
      this.setState({eicon:happiness, ename: "Happiness", shake:"suggested", squeeze: "suggested",hit: null,pat: null,push: null,rub: null,stroke: null,tap: null,});
      if(tname!=null){
        this.tactorSelect(tname.toLowerCase(), "happiness");
      }
      break;
    case "fear":
        this.setState({eicon:fear, ename: "Fear", shake:"suggested", squeeze: "suggested",hit: null,pat: null,push: null,rub: null,stroke: null,tap: null,});
        if(tname!=null){
        this.tactorSelect(tname.toLowerCase(), "fear");
      }
        break;
    case "sympathy":
        this.setState({eicon: sympathy, ename: "Sympathy",shake:"suggested", squeeze: null,hit: null,pat: "suggested",push: null,rub: "suggested",stroke: "suggested",tap: null,});
        if(tname!=null){
        this.tactorSelect(tname.toLowerCase(), "sympathy");
      }
        break;
    case "sadness":
      this.setState({eicon: sadness, ename: "Sadness", shake:"suggested", squeeze: "suggested",hit: null,pat: "suggested",push:"suggested",rub: null,stroke: "suggested",tap: null,});
      if(tname!=null){
      this.tactorSelect(tname.toLowerCase(), "sadness");
    }
      break;
    case "anger":
      this.setState({eicon: anger, ename: "Anger", shake:null, squeeze: "suggested",hit: "suggested",pat: null,push:"suggested",rub: null,stroke: null,tap: null,});
      if(tname!=null){
      this.tactorSelect(tname.toLowerCase(), "anger");
    }
      break;
    case "disgust":
      this.setState({eicon: disgust, ename:"Disgust", shake:null, squeeze: null,hit: null,pat: null,push: "suggested",rub: null,stroke: null,tap: null,});
      if(tname!=null){
      this.tactorSelect(tname.toLowerCase(), "disgust");
    }
      break;
    case "love":
      this.setState({eicon: love, ename: "Love", shake:"suggested", squeeze: "suggested",hit: null,pat: "suggested",push: null,rub: "suggested",stroke: "suggested",tap: null,});
      if(tname!=null){
      this.tactorSelect(tname.toLowerCase(), "love");
    }
      break;
    case "gratitude":
      this.setState({eicon: gratitude, ename:"Gratitude", shake:"suggested", squeeze: "suggested",hit: null,pat: "suggested",push: null,rub: null,stroke: null,tap: "suggested",});
      if(tname!=null){
      this.tactorSelect(tname.toLowerCase(), "gratitude");
    }
      break;
  }
}

tactorSelect(name, ename){
this.setState({tselected:true});


var tr = [0,180]; //touch range slider max and min
var trr = 100/(tr[1]-tr[0]);
var ts = [0,360]; //touch speed slider max and min
var tsr = 100/(ts[1]-ts[0]);
var rs = [0,360]; //retreat speed slider max and min
var rsr = 100/(rs[1]-rs[0]);
var rand = [0,50]; //touch randomness max and min
var randr = 100/(rand[1]-rand[0]);
var ti = [0,1000]; //touch interval max and min
var tir = 100/(ti[1]-ti[0]);
var ir = [0,300] // interval randomness max and min
var irr = 100/(ir[1]-ir[0]);



  switch (name.toLowerCase()) {
    case "shake":
      this.setState({ticon:shake, tname: "Shake"});
      if(ename!=null){
      if (ename.toLowerCase() === "gratitude") {
          this.setState({trange:[40,20*trr,50*trr], tspeed:[125,90*tsr,160*tsr], rspeed:[90,85*rsr,105*rsr], randomness:[12,4*randr,20*randr], tint: [200,165*tir,270*tir], irand:[27,0*irr,87*irr],});
        }else if(ename.toLowerCase() === "happiness"){
          this.setState({trange:[40,30*trr,60*trr], tspeed:[108,96*tsr,136*tsr], rspeed:[105,84*rsr,108*rsr], randomness:[5,0*randr,15*randr], tint: [160,120*tir,240*tir], irand:[0,0*irr,10*irr],});
        }else if(ename.toLowerCase() === "sadness"){
          this.setState({trange:[40,30*trr,40*trr], tspeed:[35,30*tsr,35*tsr], rspeed:[48,40*rsr,54*rsr], randomness:[5,2*randr,8*randr], tint: [265,247*tir,282*tir], irand:[0,0*irr,0*irr],});
        }else if(ename.toLowerCase() === "sympathy"){
          this.setState({trange:[30,20*trr,40*trr], tspeed:[36,30*tsr,66*tsr], rspeed:[24,24*rsr,66*rsr], randomness:[0,0*randr,5*randr], tint:[50,25*tir,525*tir], irand:[0,0*irr,20*irr],});
        }else if(ename.toLowerCase() === "love"){
          this.setState({trange:[60,40*trr,70*trr], tspeed:[48,33*tsr,70*tsr], rspeed:[60,50*rsr,66*rsr], randomness:[2,0*randr,5*randr], tint:[40,7*tir,252*tir], irand:[16,9*irr,22*irr],});
        }else{
          this.setState({trange:[0,0*trr,0*trr], tspeed:[0,0*tsr,0*tsr], rspeed:[0,0*rsr,0*rsr], randomness:[0,0*randr,0*randr], tint: [0,0*tir,0*tir], irand:[0,0*irr,0*irr],});
        }
      }
      break;
    case "squeeze":
        this.setState({ticon:squeeze, tname: "Squeeze"});
        if(ename!=null){
        if (ename.toLowerCase() === "anger") {
            this.setState({trange:[60,60*trr,60*trr], tspeed:[285,257*tsr,315*tsr], rspeed:[120,99*rsr,153*rsr], randomness:[17,13*randr,21*randr], tint: [135,117*tir,152*tir], irand:[97,83*irr,111*irr],});
          }else if(ename.toLowerCase() === "fear"){
            this.setState({trange:[40,20*trr,40*trr], tspeed:[165,105*tsr,204*tsr], rspeed:[120,72*rsr,156*rsr], randomness:[10,10*randr,25*randr], tint: [160,50*tir,250*tir], irand:[30,0*irr,60*irr],});
          }else if(ename.toLowerCase() === "gratitude"){
            this.setState({trange:[50,40*trr,50*trr], tspeed:[82,70*tsr,94*tsr], rspeed:[60,50*rsr,70*rsr], randomness:[8,4*randr,11*randr], tint: [635,467*tir,802*tir], irand:[25,12*irr,40*irr],});
          }else if(ename.toLowerCase() === "happiness"){
            this.setState({trange:[70,60*trr,80*trr], tspeed:[133,132*tsr,135*tsr], rspeed:[144,126*rsr,162*rsr], randomness:[12,8*randr,16*randr], tint:[50,25*tir,75*tir], irand:[0,0*irr,0*irr],});
          }else if(ename.toLowerCase() === "love"){
            this.setState({trange:[70,50*trr,90*trr], tspeed:[72,72*tsr,72*tsr], rspeed:[48,42*rsr,54*rsr], randomness:[0,0*randr,5*randr], tint: [10,5*tir,155*tir], irand:[0,0*irr,24*irr],});
          }else{
            this.setState({trange:[0,0*trr,0*trr], tspeed:[0,0*tsr,0*tsr], rspeed:[0,0*rsr,0*rsr], randomness:[0,0*randr,0*randr], tint: [0,0*tir,0*tir], irand:[0,0*irr,0*irr],});
          }
        }
        break;
    case "hit":
        this.setState({ticon: hit, tname: "Hit"});
        if(ename!=null){
        if (ename.toLowerCase() === "anger") {
            this.setState({trange:[70,30*trr,70*trr], tspeed:[225,198*tsr,258*tsr], rspeed:[90,66*rsr,132*rsr], randomness:[5,0*randr,5*randr], tint: [280,170*tir,290*tir], irand:[0,0*irr,40*irr],});
          }else{
            this.setState({trange:[0,0*trr,0*trr], tspeed:[0,0*tsr,0*tsr], rspeed:[0,0*rsr,0*rsr], randomness:[0,0*randr,0*randr], tint: [0,0*tir,0*tir], irand:[0,0*irr,0*irr],});
          }
        }
        break;
    case "pat":
      this.setState({ticon: pat, tname: "Pat"});
      if(ename!=null){
      if (ename.toLowerCase() === "gratitude") {
          this.setState({trange:[50,40*trr,50*trr], tspeed:[82,70*tsr,94*tsr], rspeed:[60,50*rsr,70*rsr], randomness:[8,4*randr,15*randr], tint: [635,467*tir,802*tir], irand:[25,12*irr,38*irr],});
        }else if(ename.toLowerCase() === "love"){
          this.setState({trange:[60,40*trr,60*trr], tspeed:[90,87*tsr,93*tsr], rspeed:[48,46*rsr,48*rsr], randomness:[0,0*randr,5*randr], tint: [280,255*tir,375*tir], irand:[0,0*irr,0*irr],});
        }else if(ename.toLowerCase() === "sadness"){
          this.setState({trange:[40,30*trr,60*trr], tspeed:[50,30*tsr,71*tsr], rspeed:[42,27*rsr,57*rsr], randomness:[2,0*randr,9*randr], tint: [320,262*tir,422*tir], irand:[15,0*irr,52*irr],});
        }else if(ename.toLowerCase() === "sympathy"){
          this.setState({trange:[40,30*trr,50*trr], tspeed:[36,30*tsr,63*tsr], rspeed:[33,25*rsr,45*rsr], randomness:[12,8*randr,16*randr], tint:[50,25*tir,75*tir], irand:[0,0*irr,0*irr],});
        }else{
          this.setState({trange:[0,0*trr,0*trr], tspeed:[0,0*tsr,0*tsr], rspeed:[0,0*rsr,0*rsr], randomness:[0,0*randr,0*randr], tint: [0,0*tir,0*tir], irand:[0,0*irr,0*irr],});
        }}
      break;
    case "push":
      this.setState({ticon: push, tname: "Push"});
      if(ename!=null){
      if (ename.toLowerCase() === "anger") {
          this.setState({trange:[60,50*trr,70*trr], tspeed:[105,96*tsr,144*tsr], rspeed:[120,84*rsr,144*rsr], randomness:[10,0*randr,15*randr], tint: [0,0*tir,300*tir], irand:[0,0*irr,70*irr],});
        }else if(ename.toLowerCase() === "disgust"){
          this.setState({trange:[40,30*trr,50*trr], tspeed:[105,30*tsr,168*tsr], rspeed:[70,60*rsr,90*rsr], randomness:[0,0*randr,25*randr], tint: [220,50*tir,370*tir], irand:[0,0*irr,65*irr],});
        }else if(ename.toLowerCase() == "sadness"){
          this.setState({trange:[50,40*trr,50*trr], tspeed:[54,39*tsr,70*tsr], rspeed:[66,57*rsr,75*rsr], randomness:[5,5*randr,5*randr], tint: [390,230*tir,550*tir], irand:[50,45*irr,55*irr],});
        }else{
          this.setState({trange:[0,0*trr,0*trr], tspeed:[0,0*tsr,0*tsr], rspeed:[0,0*rsr,0*rsr], randomness:[0,0*randr,0*randr], tint: [0,0*tir,0*tir], irand:[0,0*irr,0*irr],});
        }}
      break;
    case "rub":
      this.setState({ticon: rub, tname:"Rub"});
      break;
    case "stroke":
      this.setState({ticon: stroke, tname: "Stroke"});
      break;
    case "tap":
      this.setState({ticon: tap, tname:"Tap"});
      if(ename!=null){
      if (ename.toLowerCase() === "anger") {
          this.setState({trange:[50,40*trr,70*trr], tspeed:[125,110*tsr,140*tsr], rspeed:[85,72*rsr,90*rsr], randomness:[5,3*randr,15*randr], tint: [300,190*tir,480*tir], irand:[20,10*irr,40*irr],});
        }else{
          this.setState({trange:[0,0*trr,0*trr], tspeed:[0,0*tsr,0*tsr], rspeed:[0,0*rsr,0*rsr], randomness:[0,0*randr,0*randr], tint: [0,0*tir,0*tir], irand:[0,0*irr,0*irr],});
        }}
      break;
  }

}


handleSlider(name){
switch (name) {
  case "trange":
    let tranger = [this.state.trange];
    tranger[0] = document.getElementById("touch-range").value;
    this.setState({trange: tranger});
    break;
  case "tspeed":
    let tspeeder = [this.state.tspeed];
    tspeeder[0] = document.getElementById("speed-touch").value;
    this.setState({tspeed: tspeeder});
    break;
  case "rspeed":
    let rspeeder = [this.state.rspeed];
    rspeeder[0] = document.getElementById("speed-retreat").value;
    this.setState({rspeed: rspeeder});
    break;
  case "randomness":
    let rander = [this.state.randomness];
    rander[0] = document.getElementById("touch-randomness").value;
    this.setState({randomness: rander});
    break;
  case "tint":
    let tinter = [this.state.tint];
    tinter[0] = document.getElementById("touch-interval").value;
    this.setState({tint:tinter});
    break;
  case "irand":
    let irander = [this.state.irand];
    irander[0] = document.getElementById("interval-randomness").value;
    this.setState({irand:irander});
    break;
}

}





  render(){

  return(

      <section className="page-content">
            <div className ="row left-nav group1">
              <div className="col-2 bg-light  sidebar d-flex">
                <div className ="row left-nav group1">
                <div className="col-12 left-col">
                <nav className="navbar left-nav navbar-expand navbar-light">
                <ul className="left-nav nav-item text-left">
                  <li className={"left-nav nav-link " + this.state.estate} href="#"  onClick={() => this.handleClick("emotion")}><a className="left-nav nav-link"><img src={emotion} alt="" className="left-nav icon"/>Emotion</a></li>
                  {this.state.eselected && (
                  <div className="row justify-content-center">
                    <div className="col col-auto bg-white sidebar-emotion-box">
                      <img src={this.state.eicon} alt="" className="emotion-logo happiness sidebar-emotion" />
                      <h4 className="text-center">{this.state.ename}</h4>
                    </div>
                  </div>
                )}
                  <li className={"left-nav nav-link " + this.state.tstate} href="#" onClick={() => this.handleClick("tactor")}><a className="left-nav nav-link" ><img src={tactor} alt="" className="left-nav icon"/>Tactor</a></li>
                  {this.state.tselected && (
                  <div className="row justify-content-center">
                    <div className="col col-auto bg-white sidebar-tactor-box">
                      <img src={this.state.ticon} alt="" className="tactor-logo happiness sidebar-tactor"/>
                      <h4 className="text-center">{this.state.tname}</h4>
                    </div>
                  </div>
                )}
                  <li className={"left-nav nav-link "+ this.state.bstate} href="#"><a className="left-nav nav-link" onClick={() => this.handleClick("behavior")}><img src={behavior} alt="" className="left-nav icon"/>Behavior</a></li>
                </ul>
              </nav>
                </div>
                </div>

              </div>
              {this.state.home && (

              <div className="col-10 main-content">
              <section className="main-head">


                <h2>Touch Generator</h2>
                <h3>Create a new emotional robot touch clip</h3>

              </section>
              <section className="generator-table">
                <div className="row generator justify-content-center">
                  <div className="col col-auto" >
                    <div className="bg-light touchgen-box touchgen d-flex align-items-center" onClick={() => this.handleClick("emotion")}>
                    <img src={neutral} alt="" className="generator-logo"/>
                  </div>

                    <h4 className="text-center text-uppercase mx-auto">Emotion</h4>

                  </div>
                  <div className="col col-auto d-flex align-items-center">
                    <h2 className="generator">OR</h2>
                    </div>
                  <div className="col col-auto">
                    <div className="bg-light  touchgen-box  touchgen d-flex align-items-center" onClick={() => this.handleClick("tactor")}>
                      <img src={squeeze} alt="" className="generator-logo"/>
                    </div>
                    <h4 className="text-center text-uppercase mx-auto">Tactor</h4>
                  </div>
                </div>

              </section>
              </div>
            )}
            {this.state.emotion && (
              <div className="col-10 main-content">
              <section className="main-head">


                <h2>Emotion</h2>
                <h3>Select one emotion to start</h3>

              </section>
              <section className="emotion-table">
                <div className="row emotion">
                  <div className="col">
                    <div className="bg-light emotion-box emotion d-flex align-items-center" onClick={() => (this.emotionSelect("happiness"), this.handleClick("emotionselect"))}>
                    <img src={happiness} alt="" className="emotion-logo happiness"/>
                  </div>

                    <h4 className="text-center">Happiness</h4>

                  </div>
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center" onClick={() => (this.emotionSelect("fear"), this.handleClick("emotionselect"))}>
                      <img src={fear} alt="" className="emotion-logo fear"/>
                    </div>
                    <h4 className="text-center">Fear</h4>
                  </div>
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center"  onClick={() => (this.emotionSelect("sympathy"), this.handleClick("emotionselect"))}>
                        <img src={sympathy} alt="" className="emotion-logo sympathy"/>
                    </div>
                    <h4 className="text-center">Sympathy</h4>
                  </div>
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center"  onClick={() => (this.emotionSelect("sadness"), this.handleClick("emotionselect"))}>
                      <img src={sadness} alt="" className="emotion-logo sadness"/>
                    </div>
                    <h4 className="text-center">Sadness</h4>
                  </div>
                </div>
                <div className="row emotion">
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center" onClick={() => (this.emotionSelect("anger"), this.handleClick("emotionselect"))}>
                      <img src={anger} alt="" className="emotion-logo anger"/>
                  </div>
                  <h4 className="text-center">Anger</h4>
                  </div>
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center" onClick={() => (this.emotionSelect("disgust"), this.handleClick("emotionselect"))}>
                      <img src={disgust} alt="" className="emotion-logo disgust"/>
                    </div>
                    <h4 className="text-center">Disgust</h4>
                  </div>
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center" onClick={() => (this.emotionSelect("love"), this.handleClick("emotionselect"))}>
                      <img src={love} alt="" className="emotion-logo love"/>
                    </div>
                    <h4 className="text-center">Love</h4>
                  </div>
                  <div className="col">
                    <div className="bg-light  emotion-box emotion d-flex align-items-center" onClick={() => (this.emotionSelect("gratitude"), this.handleClick("emotionselect"))}>
                      <img src={gratitude} alt="" className="emotion-logo gratitude"/>
                    </div>
                    <h4 className="text-center">Gratitude</h4>
                  </div>
                </div>
              </section>
            </div>

            )}
            {this.state.tactor && (
              <div className="col-10 main-content">
                <section className="main-head">


                  <h2>Tactor</h2>
                  <h3>Select one tactor, recommendation is provided based on study</h3>

                </section>
                <section className="emotion-table">
                  <div className="row emotion">
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.shake}  onClick={() => (this.tactorSelect("shake", this.state.ename), this.handleClick("tactselect"))}>
                      <img src={shake} alt="" className="emotion-logo happiness"/>
                    </div>

                      <h4 className="text-center">Shake</h4>

                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.squeeze} onClick={() => (this.tactorSelect("squeeze", this.state.ename), this.handleClick("tactselect"))}>
                        <img src={squeeze} alt="" className="emotion-logo fear"/>
                      </div>
                      <h4 className="text-center">Squeeze</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.hit}  onClick={() => (this.tactorSelect("hit", this.state.ename), this.handleClick("tactselect"))}>
                          <img src={hit} alt="" className="emotion-logo sympathy"/>
                      </div>
                      <h4 className="text-center">Hit</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.pat}  onClick={() => (this.tactorSelect("pat", this.state.ename), this.handleClick("tactselect"))}>
                        <img src={pat} alt="" className="emotion-logo sadness"/>
                      </div>
                      <h4 className="text-center">Pat</h4>
                    </div>
                  </div>
                  <div className="row emotion">
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.push}  onClick={() => (this.tactorSelect("push", this.state.ename), this.handleClick("tactselect"))}>
                        <img src={push} alt="" className="emotion-logo anger"/>
                    </div>
                    <h4 className="text-center">Push</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.rub}  onClick={() => (this.tactorSelect("rub", this.state.ename), this.handleClick("tactselect"))}>
                        <img src={rub} alt="" className="emotion-logo disgust"/>
                      </div>
                      <h4 className="text-center">Rub</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.stroke}  onClick={() => (this.tactorSelect("stroke", this.state.ename), this.handleClick("tactselect"))}>
                        <img src={stroke} alt="" className="emotion-logo love"/>
                      </div>
                      <h4 className="text-center">Stroke</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.tap}  onClick={() => (this.tactorSelect("tap", this.state.ename), this.handleClick("tactselect"))}>
                        <img src={tap} alt="" className="emotion-logo gratitude"/>
                      </div>
                      <h4 className="text-center">Tap</h4>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {this.state.behavior && (
              <div className="col-10 main-content">
                <section className="main-head">


                  <h2>Touch</h2>
                  <h3>Default setting recommended range are showed in the dashboard</h3>

                </section>
                <section className="touch-config">
                  <div className="row touch">
                    <div className="col">
                      <div className="bg-light dashboard-box">
                          <h4 className="">Dashboard</h4>
                          <div className="slider-div">
                            <h6 className="slider-label">Touch Range (degree)</h6>
                            <h6 className="slider-value float-right">{this.state.trange[0]}</h6>
                            <br/>
                            <img src={trange} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="touch-range" name="touch-range" value={this.state.trange[0]} onInput={() => (this.handleSlider("trange"))} onChange={() => (this.handleSlider("trange"))} min="0" max="180" step="10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.trange[1]+'%, rgba(244,179,33,1) '+this.state.trange[1]+'%, rgba(244,179,33,1) '+this.state.trange[2]+ '%, rgba(255,255,255,1) '+ this.state.trange[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Speed of Touching (degree/s)</h6>
                            <h6 className="slider-value float-right">{this.state.tspeed[0]}</h6>
                            <br/>
                            <img src={tspeed} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="speed-touch" name="speed-touch" value={this.state.tspeed[0]} onInput={() => (this.handleSlider("tspeed"))} onChange={() => (this.handleSlider("tspeed"))} min="0" max="360" step="15" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.tspeed[1]+'%, rgba(244,179,33,1) '+this.state.tspeed[1]+'%, rgba(244,179,33,1) '+this.state.tspeed[2]+ '%, rgba(255,255,255,1) '+ this.state.tspeed[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Speed of Retreating (degree/s)</h6>
                            <h6 className="slider-value float-right">{this.state.rspeed[0]}</h6>
                            <br/>
                            <img src={rspeed} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="speed-retreat" value={this.state.rspeed[0]} onInput={() => (this.handleSlider("rspeed"))} onChange={() => (this.handleSlider("rspeed"))} min="0" max="360" step="15" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.rspeed[1]+'%, rgba(244,179,33,1) '+this.state.rspeed[1]+'%, rgba(244,179,33,1) '+this.state.rspeed[2]+ '%, rgba(255,255,255,1) '+ this.state.rspeed[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Touch Randomness (Tremble)</h6>
                            <h6 className="slider-value float-right">{this.state.randomness[0]}</h6>
                            <br/>
                            <img src={randomness} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="touch-randomness" value={this.state.randomness[0]} onInput={() => (this.handleSlider("randomness"))} onChange={() => (this.handleSlider("randomness"))} min="0" max="50" step="5" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.randomness[1]+'%, rgba(244,179,33,1) '+this.state.randomness[1]+'%, rgba(244,179,33,1) '+this.state.randomness[2]+ '%, rgba(255,255,255,1) '+ this.state.randomness[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Touch Interval (ms)</h6>
                            <h6 className="slider-value float-right">{this.state.tint[0]}</h6>
                            <br/>
                            <img src={tint} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="touch-interval" value={this.state.tint[0]} onInput={() => (this.handleSlider("tint"))} onChange={() => (this.handleSlider("tint"))} min="0" max="1000" step="10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.tint[1]+'%, rgba(244,179,33,1) '+this.state.tint[1]+'%, rgba(244,179,33,1) '+this.state.tint[2]+ '%, rgba(255,255,255,1) '+ this.state.tint[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Interval Randomness</h6>
                            <h6 className="slider-value float-right">{this.state.irand[0]}</h6>
                            <br/>
                            <img src={irand} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="interval-randomness" value={this.state.irand[0]} onInput={() => (this.handleSlider("irand"))} onChange={() => (this.handleSlider("irand"))} min="0" max="300" step="10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.irand[1]+'%, rgba(244,179,33,1) '+this.state.irand[1]+'%, rgba(244,179,33,1) '+this.state.irand[2]+ '%, rgba(255,255,255,1) '+ this.state.irand[2]+ '%)'}}/>
                          </div>
                    </div>



                    </div>
                    <div className="col">
                      <div className="bg-light  dashboard-box">
                          <h4 className="">Motion (degree/s)</h4>
                            <div className="graph">
                            <Sketch
                    					setup={(p5, parentRef) => {
                    						p5.createCanvas(550, 200).parent(parentRef);

                    					}}
                    					draw={p5 => {
                    						p5.background("#f8f9fa");
                    						p5.fill(255, this.y * 1.3, 0);
                                let touchRange = this.state.trange[0];
                                let speedOfTouching = this.state.tspeed[0];
                                let speedOfRetreating = this.state.rspeed[0];
                                let touchRandomness = this.state.randomness[0];
                                let touchInverval =this.state.tint[0];
                                let intervalRandomness = this.state.irand[0];
                                let amplitude = 8;
                                    if(!this.from){
                                      if (this.count <= touchRange){
                                        this.angle = this.count + p5.random(touchRandomness);
                                        this.timer = p5.millis();

                                      } else {

                                        let delay = touchInverval + p5.random(intervalRandomness);
                                        //let timer = millis();
                                        if((p5.millis()-this.timer)>delay){
                                          this.count = 0;
                                          this.from = true;
                                        }

                                      }
                                      this.count = this.count + speedOfTouching * 0.001*60;
                                    }



                                    if(this.from){

                                      if (this.count <= touchRange){
                                        this.angle = p5.abs(touchRange -(this.count + p5.random(touchRandomness)));
                                        this.timer = p5.millis();

                                      } else {

                                          this.count = 0;
                                          this.from = false;
                                      }
                                      this.count = this.count + speedOfRetreating * 0.001*60;
                                    }



                                    //console.log(this.angle);

                                    p5.push();
                                    p5.stroke(220);
                                    p5.strokeWeight(2);
                                    p5.noFill();
                                    p5.rect(0, 0, 550, 200);
                                    p5.pop();
                                    var vol = this.angle;
                                    this.volhistory.push(vol);
                                    p5.stroke(50);

                                    //strokeWeight(1);
                                    p5.noFill();
                                    p5.push();
                                    p5.strokeWeight(2);
                                    //var currentY = map(vol, 0, 40, height, 0);
                                    p5.translate(0, 40);
                                    p5.beginShape();
                                    for (var i = 0; i < this.volhistory.length; i += 4) {
                                      var y = p5.map(this.volhistory[i], 0, 180, 150, 0);
                                    //var y = 100 - volhistory[i];
                                      p5.vertex(i, y);

                                    }
                                    p5.endShape();
                                    p5.pop();
                                    if (this.volhistory.length > 540) {
                                    this.volhistory.splice(0, 4);
                                    }

                                    // p5.push();
                                    // p5.stroke(100);
                                    // p5.strokeWeight(2);
                                    // p5.noFill();
                                    // p5.circle(30,50,50);
                                    // p5.rect(60, 83, 247, 120);
                                    // p5.pop();
                                    // var vol = this.angle;
                                    // this.volhistory.push(vol);
                                    // p5.stroke(50);
                                    // //strokeWeight(1);
                                    // p5.noFill();
                                    // p5.push();
                                    // p5.strokeWeight(2);
                                    // p5.translate(0, p5.height - 80);
                                    // p5.beginShape();
                                    // for (var i = 0; i < this.volhistory.length; i += 4) {
                                    //   var y = p5.map(this.volhistory[i], 0, 180, 180, 0);
                                    //   //var y = 100 - volhistory[i];
                                    //   p5.vertex(i, y);
                                    //   console.log(i, y);
                                    // }
                                    // p5.endShape();
                                    // p5.pop();
                                    // if (this.volhistory.length > 20) {
                                    //   this.volhistory.splice(0, 4);
                                    // }
                                    this.x = this.x+1;
                    					}}
                    				/>
                            </div>
                            <div className="d-flex justify-content-center pp">
                            <img src={play} alt="" id="play-icon" />
                            <img src={pause} alt="" id="pause-icon"/>
                          </div>
                      </div>
                      <div className="name-input">
                        <h6 className="name-label">Name</h6>
                        <input type="text" className="text-input" value="Timeline Sample 1"/>
                        <button className="archive float-right">
                        <h6 className="archive slider-label">Refer to Archive</h6>
                        <img src={arrow} alt="" className="archive"/>
                      </button>
                      </div>
                      <div className="buttons">
                        <button className="float-right align-items-center" id="save">
                        <h6>Save</h6>
                      </button>
                        <button className="float-right align-items-center" id="export">
                        <h6>Export</h6>
                      </button>

                      </div>
                    </div>



                  </div>
                  </section>
                </div>
            )}

              </div>
          </section>
)
}
}

export default LeftNav;
