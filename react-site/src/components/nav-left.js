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
import del from "./Icons/delete.svg";
import info from "./Icons/info.svg";
import arrow from "./Icons/Small Icons/arrow.svg";
import hitw from "./Icons/Tactor_white/Gesture_white_Hit.svg";
import patw from "./Icons/Tactor_white/Gesture_white_Pat-14.svg";
import pushw from "./Icons/Tactor_white/Gesture_white_Push-21.svg";
import rubw from "./Icons/Tactor_white/Gesture_white_Rub-18.svg";
import shakew from "./Icons/Tactor_white/Gesture_white_Shake.svg";
import squeezew from "./Icons/Tactor_white/Gesture_white_Squeeze-15.svg";
import strokew from "./Icons/Tactor_white/Gesture_white_Stroke.svg";
import tapw from "./Icons/Tactor_white/Gesture_white_Tap-17.svg";
import link from "./Icons/link.svg";
import patup from "./Icons/Tactor Image/Pat/yellow_pat_up.png";
import patcut from "./Icons/Tactor Image/Pat/yellow_pat_cut.png";
import pushup from "./Icons/Tactor Image/Push/yellow_push_up.png";
import pushcut from "./Icons/Tactor Image/Push/yellow_push_cut.png";
import rubup from "./Icons/Tactor Image/Rub/yellow_rub_up.png";
import rubcut from "./Icons/Tactor Image/Rub/yellow_rub_cut.png";
import shakeup from "./Icons/Tactor Image/Shake/yellow_shake_up.png";
import shakecut from "./Icons/Tactor Image/Shake/yellow_shake_cut.png";
import squeezeup from "./Icons/Tactor Image/Squeeze/yellow_squeeze_up.png";
import squeezecut from "./Icons/Tactor Image/Squeeze/yellow_squeeze_cut.png";
import strokeup from "./Icons/Tactor Image/Stroke/yellow_stroke_up.png";
import strokecut from "./Icons/Tactor Image/Stroke/yellow_stroke_cut.png";
import tapup from "./Icons/Tactor Image/Tap/yellow_tap_up.png";
import tapcut from "./Icons/Tactor Image/Tap/yellow_tap_cut.png";
import hitplace from "./Icons/Placement Image/Hit_placement-12.png";
import patplace from "./Icons/Placement Image/Pat_placement-13.png";
import pushplace from "./Icons/Placement Image/Push_placement-14.png";
import rubplace from "./Icons/Placement Image/Rub_placement-15.png";
import shakeplace from "./Icons/Placement Image/Shake_placement-16.png";
import squeezeplace from "./Icons/Placement Image/Squeeze_placement-17.png";
import strokeplace from "./Icons/Placement Image/Stroke_placement-18.png";
import tapplace from "./Icons/Placement Image/Tap_placement-19.png";

import Emotion from './emotion';
import Sketch from 'react-p5';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// const SerialPort = require('serialport');
// const port = new SerialPort('/dev/tty-usbserial1');

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
port = null;
serialmsg = [0, 12, 12, 90, 25, 150, 0, 50, 0];

constructor(props) {
  super(props);
  
  let foundUser = 'default';
  let loggedInUser = localStorage.getItem("username");
  if (loggedInUser) {
    foundUser = loggedInUser
    this.setState({username: foundUser});
  }

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
    trange:[90,0,0],
    tspeed:[180,0,0],
    rspeed:[180,0,0],
    randomness:[25,0,0],
    tint:[500,0,0],
    irand:[150,0,0],
    shake: null,
    squeeze: null,
    hit: null,
    pat: null,
    push: null,
    rub: null,
    stroke: null,
    tap: null,
    port:null,
    generator:[true,"active"],
    tinfo:[false, null],
    archive:[false,null],
    shake1:[false,null,false,"Tactor 5", "Pin 5"], //selected, "active", activated
    squeeze1:[false,null,false, "Tactor 6", "Pin 6"],
    hit1:[true, "active",false, "Tactor 1", "Pin 2"],
    pat1:[false,null,false, "Tactor 2", "Pin 2"],
    push1:[false,null,false, "Tactor 3", "Pin 3"],
    rub1: [false,null,false, "Tactor 4", "Pin 4"],
    stroke1: [false,null,false, "Tactor 7", "Pin 7"],
    tap1: [false,null,false, "Tactor 8", "Pin 8"],
    place:hitplace,
    cut:patcut,
    up:patup,
    acttact:[hit, "Tactor 1", "Pin 2", "Hit", false],
    happiness:null,
    fear:null,
    sympathy:null,
    sadness:null,
    anger: null,
    disgust: null,
    love: null,
    gratitude: null,
    archiveData: [],
    username: foundUser,
    fileName: "Timeline Sample 1",
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({fileName: event.target.value});
}

async write(port, slider){
  const writer = port.writable.getWriter();
  //const toWrite = new TextEncoder().encode("h");
  //parseInt(slider);
  var data = new Uint8Array(9);
  for(var i=0;i<slider.length;i++){
  data[i] = parseInt(slider[i]);
}
  //

  // console.log(port.writable);
  await writer.write(data);
  console.log(data);
//
//   const textEncoder = new TextEncoder();
// const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
//
// const writer = textEncoder.writable.getWriter();

// await writer.write("hello");
writer.releaseLock();
};

async start(data) {
  if (this.state.port == null) {
    if (window.confirm("This app is requesting to use your serial port.\nAre you alright with this action?")) {
      this.port = await navigator.serial.requestPort();
      const ports = await navigator.serial.getPorts();

      if (this.port.readable === null) {
        await this.port.open({
          baudRate: 9600
        });
      }
      console.log(this.port);
      console.log(ports);
      this.setState({
        port: true,
      });

    }
    console.log(this.state.port);
    this.write(this.port, data);
  } else {
    toast("Action Suspended");
  }
};

handleClick(name) {
  var hitstate=this.state.hit1;
  var patstate=this.state.pat1;
  var pushstate=this.state.push1;
  var rubstate=this.state.rub1;
  var shakestate=this.state.shake1;
  var squeezestate=this.state.squeeze1;
  var strokestate=this.state.stroke1;
  var tapstate=this.state.tap1;
  switch (name) {
    case "emotion":
      this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      //alert(localStorage.getItem('test'));
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
    case "tbots":
    this.setState({home:true, emotion: false,  tactor:false, behavior:false});
    break;
    case "tgen":
    this.setState({generator:[true,"active"], tinfo:[false,null], archive:[false,null]});
    break;
    case "tinfo":
    this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
    break;
    case "archive":
    this.setState({generator:[false,null], tinfo:[false,null], archive:[true,"active"]});
    // alert("Archive is not yet an active feature. Stay Tuned!");
    break;
    case "hit":
    if(hitstate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");

      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:hitplace,cut:patcut,up:patup,acttact:[hit,hitstate[3],hitstate[4], "Hit"],hit1:[true,"active",hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});

    }
    break;
    case "pat":
    if(patstate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");

      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:patplace,cut:patcut,up:patup,acttact:[pat,patstate[3],patstate[4], "Pat"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[true,"active",patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3], pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    }
    break;
    case "push":
    if(pushstate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");

      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:pushplace,cut:pushcut,up:pushup,acttact:[push,pushstate[3],pushstate[4], "Push"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[true,"active",pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});

    }
    break;
    case "rub":
    if(rubstate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");

      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:rubplace,cut:rubcut,up:rubup,acttact:[rub,rubstate[3],rubstate[4], "Rub"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[true,"active",rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});

    }

    break;
    case "shake":
    if(shakestate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");

      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:shakeplace,cut:shakecut,up:shakeup,acttact:[shake,shakestate[3],shakestate[4], "Shake"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,shakestate[2],shakestate[3],shakestate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[true,"active",shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});

    }

    break;
    case "squeeze":
    if(squeezestate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");
      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:squeezeplace,cut:squeezecut,up:squeezeup,acttact:[squeeze,squeezestate[3],squeezestate[4], "Squeeze"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[true,"active",squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});

    }

    break;
    case "stroke":
    if(strokestate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");
      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:strokeplace,cut:strokecut,up:strokeup,acttact:[stroke,strokestate[3],strokestate[4], "Stroke"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[true,"active",strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});

    }

    break;
    case "tap":
    if(tapstate[2]){
      if(this.state.eselected){

        this.setState({home: false, emotion: false, estate:null, tactor: false, tstate:null, behavior: true, bstate:"active"});
      }else{

        this.setState({ home: false, emotion:true, estate:"active", tactor: false, tstate:null, behavior: false, bstate:null});
      }
      break;
    }else{
      toast("You need to activate this tactor before continuing.");
      this.setState({generator:[false,null], tinfo:[true,"active"], archive:[false,null]});
      this.setState({place:tapplace,cut:tapcut,up:tapup,acttact:[tap,tapstate[3],tapstate[4],"Tap"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[true,"active",tapstate[2],tapstate[3],tapstate[4]],});

    }

    break;
    case "hit1":
    this.setState({place:hitplace,cut:patcut,up:patup,acttact:[hit,hitstate[3],hitstate[4], "Hit"],hit1:[true,"active",hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "pat1":
    this.setState({place:patplace,cut:patcut,up:patup,acttact:[pat,patstate[3],patstate[4], "Pat"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[true,"active",patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3], pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "push1":
    this.setState({place:pushplace,cut:pushcut,up:pushup,acttact:[push,pushstate[3],pushstate[4], "Push"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[true,"active",pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "rub1":
    this.setState({place:rubplace,cut:rubcut,up:rubup,acttact:[rub,rubstate[3],rubstate[4], "Rub"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[true,"active",rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "shake1":
    this.setState({place:shakeplace,cut:shakecut,up:shakeup,acttact:[shake,shakestate[3],shakestate[4], "Shake"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,shakestate[2],shakestate[3],shakestate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[true,"active",shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "squeeze1":
    this.setState({place:squeezeplace,cut:squeezecut,up:squeezeup,acttact:[squeeze,squeezestate[3],squeezestate[4], "Squeeze"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[true,"active",squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "stroke1":
    this.setState({place:strokeplace,cut:strokecut,up:strokeup,acttact:[stroke,strokestate[3],strokestate[4], "Stroke"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[true,"active",strokestate[2],strokestate[3],strokestate[4]],tap1:[false,null,tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "tap1":
    this.setState({place:tapplace,cut:tapcut,up:tapup,acttact:[tap,tapstate[3],tapstate[4],"Tap"],hit1:[false,null,hitstate[2],hitstate[3],hitstate[4]], pat1:[false,null,patstate[2],patstate[3],patstate[4]], push1:[false,null,pushstate[2],pushstate[3],pushstate[4]], rub1:[false,null,rubstate[2],rubstate[3],rubstate[4]],shake1:[false,null,shakestate[2],shakestate[3],shakestate[4]],squeeze1:[false,null,squeezestate[2],squeezestate[3],squeezestate[4]],stroke1:[false,null,strokestate[2],strokestate[3],strokestate[4]],tap1:[true,"active",tapstate[2],tapstate[3],tapstate[4]],});
    break;
    case "save2archive":

    var formdata = new FormData();

    formdata.append("name", this.state.fileName);
    formdata.append("emotion", this.state.ename);
    formdata.append("tactor", this.state.tname);
    formdata.append("touch_range", document.getElementById("touch-range").value);
    formdata.append("touch_speed", document.getElementById("speed-touch").value);
    formdata.append("retreat_speed", document.getElementById("speed-retreat").value);
    formdata.append("touch_random", document.getElementById("touch-randomness").value);
    formdata.append("touch_interval", document.getElementById("touch-interval").value);
    formdata.append("interval_random", document.getElementById("interval-randomness").value);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch('https://akshaybaweja.com/ran/api.php/archive/' + this.state.username, requestOptions)
      .then(response => response.json())
      .then(data => data.response==="success"?toast("Saved Successfully ✅"):toast("❌ Error while saving"))
      .then(() => this.getArchiveData());
    break;
    case "login": 
    let name = window.prompt("Enter your username", "default");

    fetch('https://akshaybaweja.com/ran/api.php/user/' + name, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.response !== "success") {
          name = 'default';
          toast("Inavlid Username");
        }

        this.setState({
          username: name
        }, () => {
          toast(({ closeToast }) => <div>Username set to [<b>{this.state.username}</b>]</div>);
          localStorage.setItem("username", this.state.username);
          this.getArchiveData();
        });
      });
    break;
    default: console.log("handleClick: defaultState");
  }
}

isActive(name) {
  let status = false;
  switch (name.toLowerCase()) {
    case "hit":
      status = this.state.hit1[2];
      break;
    case "pat":
      status = this.state.pat1[2];
      break;
    case "push":
      status = this.state.push1[2];
      break;
    case "rub":
      status =this.state.rub1[2];
      break;
    case "shake":
      status = this.state.shake1[2];
      break;
    case "squeeze":
      status = this.state.squeeze1[2];
      break;
    case "stroke":
      status = this.state.stroke1[2];
      break;
    case "tap":
      status = this.state.tap1[2];
      break;
    default:
      status = false;
      console.log(">isActive: default", name);
  }
  return status;
}

activate(name, callback = () => {}) {
  if (!this.isActive(name)) {
    var hitstate = this.state.hit1;
    var patstate = this.state.pat1;
    var pushstate = this.state.push1;
    var rubstate = this.state.rub1;
    var shakestate = this.state.shake1;
    var squeezestate = this.state.squeeze1;
    var strokestate = this.state.stroke1;
    var tapstate = this.state.tap1;

    switch (name) {
      case "Hit":
        this.setState({
          hit1: [hitstate[0], hitstate[1], true, hitstate[3], hitstate[4]]
        }, callback);
        break;
      case "Pat":
        this.setState({
          pat1: [patstate[0], patstate[1], true, patstate[3], patstate[4]]
        }, callback);
        break;
      case "Push":
        this.setState({
          push1: [pushstate[0], pushstate[1], true, pushstate[3], pushstate[4]]
        }, callback);
        break;
      case "Rub":
        this.setState({
          rub1: [rubstate[0], rubstate[1], true, rubstate[3], rubstate[4]]
        }, callback);
        break;
      case "Shake":
        this.setState({
          shake1: [shakestate[0], shakestate[1], true, shakestate[3], shakestate[4]]
        }, callback);
        break;
      case "Squeeze":
        this.setState({
          squeeze1: [squeezestate[0], squeezestate[1], true, squeezestate[3], squeezestate[4]]
        }, callback);
        break;
      case "Stroke":
        this.setState({
          stroke1: [strokestate[0], strokestate[1], true, strokestate[3], strokestate[4]]
        }, callback);
        break;
      case "Tap":
        this.setState({
          tap1: [tapstate[0], tapstate[1], true, tapstate[3], tapstate[4]]
        }, callback);
        break;
      default:
        console.log("activate: defaultState", name);
    }
    toast(name + " was activated!");
  } else {
    callback();
  }
}

deactivate(name, callback = () => {}) {
    if (this.isActive(name)) {
      var hitstate = this.state.hit1;
      var patstate = this.state.pat1;
      var pushstate = this.state.push1;
      var rubstate = this.state.rub1;
      var shakestate = this.state.shake1;
      var squeezestate = this.state.squeeze1;
      var strokestate = this.state.stroke1;
      var tapstate = this.state.tap1;
  
      switch (name) {
        case "Hit":
          this.setState({
            hit1: [hitstate[0], hitstate[1], false, hitstate[3], hitstate[4]]
          }, callback);
          break;
        case "Pat":
          this.setState({
            pat1: [patstate[0], patstate[1], false, patstate[3], patstate[4]]
          }, callback);
          break;
        case "Push":
          this.setState({
            push1: [pushstate[0], pushstate[1], false, pushstate[3], pushstate[4]]
          }, callback);
          break;
        case "Rub":
          this.setState({
            rub1: [rubstate[0], rubstate[1], false, rubstate[3], rubstate[4]]
          }, callback);
          break;
        case "Shake":
          this.setState({
            shake1: [shakestate[0], shakestate[1], false, shakestate[3], shakestate[4]]
          }, callback);
          break;
        case "Squeeze":
          this.setState({
            squeeze1: [squeezestate[0], squeezestate[1], false, squeezestate[3], squeezestate[4]]
          }, callback);
          break;
        case "Stroke":
          this.setState({
            stroke1: [strokestate[0], strokestate[1], false, strokestate[3], strokestate[4]]
          }, callback);
          break;
        case "Tap":
          this.setState({
            tap1: [tapstate[0], tapstate[1], false, tapstate[3], tapstate[4]]
          }, callback);
          break;
        default:
          console.log("activate: defaultState", name);
      }
      toast(name + " was deactivated!");
    } else {
      callback();
    }
}

emotionSelect(name, callback = () => {}){
this.setState({
  eselected: true
});
let tname = this.state.tname;
switch (name) {
  case "happiness":
    this.setState({
      eicon: happiness,
      ename: "Happiness",
      shake: "suggested",
      squeeze: "suggested",
      hit: null,
      pat: null,
      push: null,
      rub: null,
      stroke: null,
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "happiness");
    }
    break;
  case "fear":
    this.setState({
      eicon: fear,
      ename: "Fear",
      shake: "suggested",
      squeeze: "suggested",
      hit: null,
      pat: null,
      push: null,
      rub: null,
      stroke: null,
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "fear");
    }
    break;
  case "sympathy":
    this.setState({
      eicon: sympathy,
      ename: "Sympathy",
      shake: "suggested",
      squeeze: null,
      hit: null,
      pat: "suggested",
      push: null,
      rub: "suggested",
      stroke: "suggested",
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "sympathy");
    }
    break;
  case "sadness":
    this.setState({
      eicon: sadness,
      ename: "Sadness",
      shake: "suggested",
      squeeze: "suggested",
      hit: null,
      pat: "suggested",
      push: "suggested",
      rub: null,
      stroke: "suggested",
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "sadness");
    }
    break;
  case "anger":
    this.setState({
      eicon: anger,
      ename: "Anger",
      shake: null,
      squeeze: "suggested",
      hit: "suggested",
      pat: null,
      push: "suggested",
      rub: null,
      stroke: null,
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "anger");
    }
    break;
  case "disgust":
    this.setState({
      eicon: disgust,
      ename: "Disgust",
      shake: null,
      squeeze: null,
      hit: null,
      pat: null,
      push: "suggested",
      rub: null,
      stroke: null,
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "disgust");
    }
    break;
  case "love":
    this.setState({
      eicon: love,
      ename: "Love",
      shake: "suggested",
      squeeze: "suggested",
      hit: null,
      pat: "suggested",
      push: null,
      rub: "suggested",
      stroke: "suggested",
      tap: null,
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "love");
    }
    break;
  case "gratitude":
    this.setState({
      eicon: gratitude,
      ename: "Gratitude",
      shake: "suggested",
      squeeze: "suggested",
      hit: null,
      pat: "suggested",
      push: null,
      rub: null,
      stroke: null,
      tap: "suggested",
    }, callback);
    if (tname != null) {
      this.tactorSelect(tname.toLowerCase(), "gratitude");
    }
    break;
  default:
    console.log("emotionSelect: defaultState", name);
}
}

tactorSelect(name, ename, callback = () => {}) {

  this.setState({
    tselected: true
  });


  var tr = [0, 180]; //touch range slider max and min
  var trr = 100 / (tr[1] - tr[0]);
  var ts = [0, 360]; //touch speed slider max and min
  var tsr = 100 / (ts[1] - ts[0]);
  var rs = [0, 360]; //retreat speed slider max and min
  var rsr = 100 / (rs[1] - rs[0]);
  var rand = [0, 50]; //touch randomness max and min
  var randr = 100 / (rand[1] - rand[0]);
  var ti = [0, 1000]; //touch interval max and min
  var tir = 100 / (ti[1] - ti[0]);
  var ir = [0, 300] // interval randomness max and min
  var irr = 100 / (ir[1] - ir[0]);

  switch (name.toLowerCase()) {

    case "shake":
      this.serialmsg[0] = 5;
      this.setState({
        ticon: shake,
        tname: "Shake",
        happiness: "suggested",
        fear: null,
        sympathy: "suggested",
        sadness: "suggested",
        anger: null,
        disgust: null,
        love: "suggested",
        gratitude: "suggested",
      });
      if (ename != null) {
        if (ename.toLowerCase() === "gratitude") {
          this.setState({
            trange: [40, 20 * trr, 50 * trr],
            tspeed: [125, 90 * tsr, 160 * tsr],
            rspeed: [90, 85 * rsr, 105 * rsr],
            randomness: [12, 4 * randr, 20 * randr],
            tint: [200, 165 * tir, 270 * tir],
            irand: [27, 0 * irr, 87 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "happiness") {
          this.setState({
            trange: [40, 30 * trr, 60 * trr],
            tspeed: [108, 96 * tsr, 136 * tsr],
            rspeed: [105, 84 * rsr, 108 * rsr],
            randomness: [5, 0 * randr, 15 * randr],
            tint: [160, 120 * tir, 240 * tir],
            irand: [0, 0 * irr, 10 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "sadness") {
          this.setState({
            trange: [40, 30 * trr, 40 * trr],
            tspeed: [35, 30 * tsr, 35 * tsr],
            rspeed: [48, 40 * rsr, 54 * rsr],
            randomness: [5, 2 * randr, 8 * randr],
            tint: [265, 247 * tir, 282 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "sympathy") {
          this.setState({
            trange: [30, 20 * trr, 40 * trr],
            tspeed: [36, 30 * tsr, 66 * tsr],
            rspeed: [24, 24 * rsr, 66 * rsr],
            randomness: [0, 0 * randr, 5 * randr],
            tint: [50, 25 * tir, 525 * tir],
            irand: [0, 0 * irr, 20 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "love") {
          this.setState({
            trange: [60, 40 * trr, 70 * trr],
            tspeed: [48, 33 * tsr, 70 * tsr],
            rspeed: [60, 50 * rsr, 66 * rsr],
            randomness: [2, 0 * randr, 5 * randr],
            tint: [40, 7 * tir, 252 * tir],
            irand: [16, 9 * irr, 22 * irr],
          }, callback);
        } else {
          this.setState({
            trange: [0, 0 * trr, 0 * trr],
            tspeed: [0, 0 * tsr, 0 * tsr],
            rspeed: [0, 0 * rsr, 0 * rsr],
            randomness: [0, 0 * randr, 0 * randr],
            tint: [0, 0 * tir, 0 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        }
      }
      break;
    case "squeeze":
      this.serialmsg[0] = 6;
      this.setState({
        ticon: squeeze,
        tname: "Squeeze",
        happiness: "suggested",
        fear: "suggested",
        sympathy: null,
        sadness: "suggested",
        anger: "suggested",
        disgust: null,
        love: "suggested",
        gratitude: "suggested",
      });
      if (ename != null) {
        if (ename.toLowerCase() === "anger") {
          this.setState({
            trange: [60, 60 * trr, 60 * trr],
            tspeed: [285, 257 * tsr, 315 * tsr],
            rspeed: [120, 99 * rsr, 153 * rsr],
            randomness: [17, 13 * randr, 21 * randr],
            tint: [135, 117 * tir, 152 * tir],
            irand: [97, 83 * irr, 111 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "fear") {
          this.setState({
            trange: [40, 20 * trr, 40 * trr],
            tspeed: [165, 105 * tsr, 204 * tsr],
            rspeed: [120, 72 * rsr, 156 * rsr],
            randomness: [10, 10 * randr, 25 * randr],
            tint: [160, 50 * tir, 250 * tir],
            irand: [30, 0 * irr, 60 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "gratitude") {
          this.setState({
            trange: [50, 40 * trr, 50 * trr],
            tspeed: [82, 70 * tsr, 94 * tsr],
            rspeed: [60, 50 * rsr, 70 * rsr],
            randomness: [8, 4 * randr, 11 * randr],
            tint: [635, 467 * tir, 802 * tir],
            irand: [25, 12 * irr, 40 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "happiness") {
          this.setState({
            trange: [70, 60 * trr, 80 * trr],
            tspeed: [133, 132 * tsr, 135 * tsr],
            rspeed: [144, 126 * rsr, 162 * rsr],
            randomness: [12, 8 * randr, 16 * randr],
            tint: [50, 25 * tir, 75 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "love") {
          this.setState({
            trange: [70, 50 * trr, 90 * trr],
            tspeed: [72, 72 * tsr, 72 * tsr],
            rspeed: [48, 42 * rsr, 54 * rsr],
            randomness: [0, 0 * randr, 5 * randr],
            tint: [10, 5 * tir, 155 * tir],
            irand: [0, 0 * irr, 24 * irr],
          }, callback);
        } else {
          this.setState({
            trange: [0, 0 * trr, 0 * trr],
            tspeed: [0, 0 * tsr, 0 * tsr],
            rspeed: [0, 0 * rsr, 0 * rsr],
            randomness: [0, 0 * randr, 0 * randr],
            tint: [0, 0 * tir, 0 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        }
      }
      break;
    case "hit":
      this.serialmsg[0] = 2;
      this.setState({
        ticon: hit,
        tname: "Hit",
        happiness: null,
        fear: null,
        sympathy: null,
        sadness: null,
        anger: "anger",
        disgust: null,
        love: null,
        gratitude: null,
      });
      if (ename != null) {
        if (ename.toLowerCase() === "anger") {
          this.setState({
            trange: [70, 30 * trr, 70 * trr],
            tspeed: [225, 198 * tsr, 258 * tsr],
            rspeed: [90, 66 * rsr, 132 * rsr],
            randomness: [5, 0 * randr, 5 * randr],
            tint: [280, 170 * tir, 290 * tir],
            irand: [0, 0 * irr, 40 * irr],
          }, callback);
        } else {
          this.setState({
            trange: [0, 0 * trr, 0 * trr],
            tspeed: [0, 0 * tsr, 0 * tsr],
            rspeed: [0, 0 * rsr, 0 * rsr],
            randomness: [0, 0 * randr, 0 * randr],
            tint: [0, 0 * tir, 0 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        }
      }
      break;
    case "pat":
      this.serialmsg[0] = 2;
      this.setState({
        ticon: pat,
        tname: "Pat",
        happiness: null,
        fear: null,
        sympathy: "suggested",
        sadness: "suggested",
        anger: null,
        disgust: null,
        love: "suggested",
        gratitude: "suggested",
      });
      if (ename != null) {
        if (ename.toLowerCase() === "gratitude") {
          this.setState({
            trange: [50, 40 * trr, 50 * trr],
            tspeed: [82, 70 * tsr, 94 * tsr],
            rspeed: [60, 50 * rsr, 70 * rsr],
            randomness: [8, 4 * randr, 15 * randr],
            tint: [635, 467 * tir, 802 * tir],
            irand: [25, 12 * irr, 38 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "love") {
          this.setState({
            trange: [60, 40 * trr, 60 * trr],
            tspeed: [90, 87 * tsr, 93 * tsr],
            rspeed: [48, 46 * rsr, 48 * rsr],
            randomness: [0, 0 * randr, 5 * randr],
            tint: [280, 255 * tir, 375 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "sadness") {
          this.setState({
            trange: [40, 30 * trr, 60 * trr],
            tspeed: [50, 30 * tsr, 71 * tsr],
            rspeed: [42, 27 * rsr, 57 * rsr],
            randomness: [2, 0 * randr, 9 * randr],
            tint: [320, 262 * tir, 422 * tir],
            irand: [15, 0 * irr, 52 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "sympathy") {
          this.setState({
            trange: [40, 30 * trr, 50 * trr],
            tspeed: [36, 30 * tsr, 63 * tsr],
            rspeed: [33, 25 * rsr, 45 * rsr],
            randomness: [12, 8 * randr, 16 * randr],
            tint: [50, 25 * tir, 75 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        } else {
          this.setState({
            trange: [0, 0 * trr, 0 * trr],
            tspeed: [0, 0 * tsr, 0 * tsr],
            rspeed: [0, 0 * rsr, 0 * rsr],
            randomness: [0, 0 * randr, 0 * randr],
            tint: [0, 0 * tir, 0 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        }
      }
      break;
    case "push":
      this.serialmsg[0] = 3;
      this.setState({
        ticon: push,
        tname: "Push",
        happiness: null,
        fear: null,
        sympathy: null,
        sadness: "suggested",
        anger: "suggested",
        disgust: "suggested",
        love: null,
        gratitude: null,
      });
      if (ename != null) {
        if (ename.toLowerCase() === "anger") {
          this.setState({
            trange: [60, 50 * trr, 70 * trr],
            tspeed: [105, 96 * tsr, 144 * tsr],
            rspeed: [120, 84 * rsr, 144 * rsr],
            randomness: [10, 0 * randr, 15 * randr],
            tint: [0, 0 * tir, 300 * tir],
            irand: [0, 0 * irr, 70 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "disgust") {
          this.setState({
            trange: [40, 30 * trr, 50 * trr],
            tspeed: [105, 30 * tsr, 168 * tsr],
            rspeed: [70, 60 * rsr, 90 * rsr],
            randomness: [0, 0 * randr, 25 * randr],
            tint: [220, 50 * tir, 370 * tir],
            irand: [0, 0 * irr, 65 * irr],
          }, callback);
        } else if (ename.toLowerCase() === "sadness") {
          this.setState({
            trange: [50, 40 * trr, 50 * trr],
            tspeed: [54, 39 * tsr, 70 * tsr],
            rspeed: [66, 57 * rsr, 75 * rsr],
            randomness: [5, 5 * randr, 5 * randr],
            tint: [390, 230 * tir, 550 * tir],
            irand: [50, 45 * irr, 55 * irr],
          }, callback);
        } else {
          this.setState({
            trange: [0, 0 * trr, 0 * trr],
            tspeed: [0, 0 * tsr, 0 * tsr],
            rspeed: [0, 0 * rsr, 0 * rsr],
            randomness: [0, 0 * randr, 0 * randr],
            tint: [0, 0 * tir, 0 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        }
      }
      break;
    case "rub":
      this.serialmsg[0] = 4;
      this.setState({
        ticon: rub,
        tname: "Rub",
        happiness: null,
        fear: null,
        sympathy: "suggested",
        sadness: null,
        anger: null,
        disgust: null,
        love: "suggested",
        gratitude: null,
      });
      this.setState({
        trange: [0, 0 * trr, 0 * trr],
        tspeed: [0, 0 * tsr, 0 * tsr],
        rspeed: [0, 0 * rsr, 0 * rsr],
        randomness: [0, 0 * randr, 0 * randr],
        tint: [0, 0 * tir, 0 * tir],
        irand: [0, 0 * irr, 0 * irr],
      }, callback);
      break;
    case "stroke":
      this.serialmsg[0] = 7;
      this.setState({
        ticon: stroke,
        tname: "Stroke",
        happiness: null,
        fear: null,
        sympathy: "suggested",
        sadness: "suggested",
        anger: null,
        disgust: null,
        love: "suggested",
        gratitude: null,
      });
      this.setState({
        trange: [0, 0 * trr, 0 * trr],
        tspeed: [0, 0 * tsr, 0 * tsr],
        rspeed: [0, 0 * rsr, 0 * rsr],
        randomness: [0, 0 * randr, 0 * randr],
        tint: [0, 0 * tir, 0 * tir],
        irand: [0, 0 * irr, 0 * irr],
      }, callback);
      break;
    case "tap":
      this.serialmsg[0] = 8;
      this.setState({
        ticon: tap,
        tname: "Tap",
        happiness: null,
        fear: null,
        sympathy: null,
        sadness: null,
        anger: null,
        disgust: null,
        love: null,
        gratitude: "suggested",
      });
      if (ename != null) {
        if (ename.toLowerCase() === "anger") {
          this.setState({
            trange: [50, 40 * trr, 70 * trr],
            tspeed: [125, 110 * tsr, 140 * tsr],
            rspeed: [85, 72 * rsr, 90 * rsr],
            randomness: [5, 3 * randr, 15 * randr],
            tint: [300, 190 * tir, 480 * tir],
            irand: [20, 10 * irr, 40 * irr],
          }, callback);
        } else {
          this.setState({
            trange: [0, 0 * trr, 0 * trr],
            tspeed: [0, 0 * tsr, 0 * tsr],
            rspeed: [0, 0 * rsr, 0 * rsr],
            randomness: [0, 0 * randr, 0 * randr],
            tint: [0, 0 * tir, 0 * tir],
            irand: [0, 0 * irr, 0 * irr],
          }, callback);
        }
      }
      break;
    default:
      console.log("tactorSelect: defaultState", name);
  }
}

bitshift(number){
  let data=new Uint8Array(2);
  data[0] = number & 0xFF;
  data[1] = (number >> 8) & 0xFF;
  let reverse=data.join();
  reverse = reverse.replace(',','')
  console.log(parseInt(reverse,reverse.length));
  return data;
}

handleSlider(name){
switch (name) {
  case "trange":
    let tranger = [this.state.trange];
    tranger[0] = document.getElementById("touch-range").value;
    this.setState({trange: tranger});
    this.serialmsg[3] = tranger[0];
    break;
  case "tspeed":
    let tspeeder = [this.state.tspeed];
    tspeeder[0] = document.getElementById("speed-touch").value;
    this.setState({tspeed: tspeeder});
    this.serialmsg[1] = (tspeeder[0]/15);
    break;
  case "rspeed":
    let rspeeder = [this.state.rspeed];
    rspeeder[0] = document.getElementById("speed-retreat").value;
    this.setState({rspeed: rspeeder});
    this.serialmsg[2] = (rspeeder[0]/15);
    break;
  case "randomness":
    let rander = [this.state.randomness];
    rander[0] = document.getElementById("touch-randomness").value;
    this.setState({randomness: rander});
    this.serialmsg[4] = rander[0];
    break;
  case "tint":
    let tinter = [this.state.tint];
    tinter[0] = document.getElementById("touch-interval").value;
    this.setState({tint:tinter});
    this.serialmsg[7] = (tinter[0]/10);
    break;
  case "irand":
    let irander = [this.state.irand];
    irander[0] = document.getElementById("interval-randomness").value;
    this.setState({irand:irander});
    this.serialmsg[5] = irander[0];
    break;
    default: console.log("handleSlider: defaultState", name);

}
  console.log(this.serialmsg);
  this.start(this.serialmsg);

}

pp(play) {
  if (this.state.tselected) {
    if (play) {
      this.serialmsg[8] = 0;
    } else {
      this.serialmsg[8] = 1;
    }
    console.log(this.serialmsg);
    this.start(this.serialmsg);
  } else {
    toast("Tactor not selected, you must select a tactor before uploading tactor behavior.");
  }

  //this.start(this.serialmsg);
}

componentDidMount(){
    this.getArchiveData();
}

getArchiveData(){
  return fetch('https://akshaybaweja.com/ran/api.php/archive/'+this.state.username)
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.results)) {
      this.setState({ archiveData: data.results});
    } else {
      this.setState({ archiveData: []});
    }
  });
}

setFromArchive(item){

  let routine = () => {
    this.emotionSelect(item.emotion.toLowerCase(), () => {
      this.tactorSelect(item.tactor.toLowerCase(), this.state.ename, () => {

        let params = item.params;

        let tranger = this.state.trange;
        tranger[0] = params.touch_range;

        let tspeeder = this.state.tspeed;
        tspeeder[0] = params.touch_speed;

        let rspeeder = this.state.rspeed;
        rspeeder[0] = params.retreat_speed;

        let rander = this.state.randomness;
        rander[0] = params.touch_random;

        let tinter = this.state.tint;
        tinter[0] = params.touch_interval;

        let irander = this.state.irand;
        irander[0] = params.interval_random;

        this.setState({
          trange: tranger,
          tspeed: tspeeder,
          rspeed: rspeeder,
          randomness: rander,
          tint: tinter,
          irand: irander,
          fileName: item.name
        }, () => {
          this.handleClick("tgen");
          this.handleClick("behavior");
        });
      });
    });
  }

  if (this.isActive(item.tactor)) {
    routine();
  } else {
    if (window.confirm("The required tactor is not activated.\nDo you want to activate it now?")) {
      this.handleClick("tinfo");
      this.handleClick(item.tactor.toLowerCase() + '1');
    } else {
      routine();
    }
  }
}

render(){

//console.log(this.bitshift(400));

  return(
    <div>
    <nav className="navbar top-nav navbar-expand navbar-light bg-white ">
      <h6 className="navbar-brand" onClick={() => this.handleClick("tbots")}>TactorBots</h6>

      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="top-nav navbar-nav mr-auto ml-auto d-flex align-content-center">
          <li className={"top-nav nav-item active text-center "+ this.state.generator[1]}>
            <a className= {"top-nav nav-link " + this.state.generator[1]}   onClick={() => this.handleClick("tgen")}>Touch Generator{this.state.generator[0]&&(<span className="sr-only">(current)</span>)}</a>
          </li>
          <li className={"top-nav nav-item active text-center "+ this.state.tinfo[1]}>
            <a className={"top-nav nav-link " + this.state.tinfo[1]}   onClick={() => this.handleClick("tinfo")}>Tactor Information{this.state.tinfo[0]&&(<span className="sr-only">(current)</span>)}</a>
          </li>
          <li className={"top-nav nav-item active text-center "+ this.state.archive[1]}>
            <a className={"top-nav nav-link " + this.state.archive[1]}    onClick={() => this.handleClick("archive")}>Archive{this.state.archive[0]&&(<span className="sr-only">(current)</span>)}</a>
          </li>
        </ul>

      </div>
  </nav>

    <section className="page-content">
        <main role="main page">

      {this.state.tinfo[0] &&(
        <div className="row left-nav group1 tinfo">
          <div className="col-2 bg-light  sidebar d-flex tinfo">
            <div className ="row left-nav group1">
              <div className="col-12 left-col">
                <nav className="navbar left-nav navbar-expand navbar-light">
                  <ul className="left-nav text-left tinfo">
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.hit1[1]} onClick={() => this.handleClick("hit1")}>
                    <div className="row flex-nowrap">
                      <div className="col">
                        <div className={"tactoricon d-flex justify-content-start " + this.state.hit1[1]}>
                          <img src={this.state.hit1[0] ? hitw  : hit} alt="" className="tactorinfoicon"/>
                        </div>
                      </div>
                      <div className="col tactinfo">
                        <h4 className="tactinfo">Hit</h4>
                        <br/>
                        <h5 className="tactinfo">Tactor 1</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 2</h5>
                      </div>
                    </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.pat1[1]}  onClick={() => this.handleClick("pat1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.pat1[1]}>
                            <img src={this.state.pat1[0] ? patw  : pat} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Pat</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 2</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 2</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.push1[1]}  onClick={() => this.handleClick("push1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.push1[1]}>
                            <img src={this.state.push1[0] ? pushw  : push} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Push</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 3</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 3</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.rub1[1]}  onClick={() => this.handleClick("rub1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.rub1[1]}>
                            <img src={this.state.rub1[0] ? rubw  : rub} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Rub</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 4</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 4</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.shake1[1]}  onClick={() => this.handleClick("shake1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.shake1[1]}>
                            <img src={this.state.shake1[0] ? shakew  : shake} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Shake</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 5</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 5</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.squeeze1[1]}  onClick={() => this.handleClick("squeeze1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.squeeze1[1]}>
                            <img src={this.state.squeeze1[0] ? squeezew  : squeeze} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Squeeze</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 6</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 6</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.stroke1[1]}  onClick={() => this.handleClick("stroke1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.stroke1[1]}>
                            <img src={this.state.stroke1[0] ? strokew  : stroke} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Stroke</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 7</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 7</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav nav-link col col-auto tactorlink nav-link " + this.state.tap1[1]}  onClick={() => this.handleClick("tap1")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start " + this.state.tap1[1]}>
                            <img src={this.state.tap1[0] ? tapw  : tap} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Tap</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 8</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 8</h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
          
          <div className="col-10 main-content">
            <section className="main-head">

              <h2>{this.state.acttact[3]} Tactor</h2>

            </section>
            
            <section className="generator-table">
              <div className="row generator justify-content-center">
                <div className="col col-auto">
                  <div className="row">
                    <div className="col">
                  <div className="bg-light tactortop-box  d-flex align-items-center">
                  <img src={this.state.up} alt="" className="generator-logo tactortop"/>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
              <div className="bg-light tactorside-box  d-flex align-items-center">
              <img src={this.state.cut} alt="" className="generator-logo tactorside"/>
            </div>

              <h4 className="d-flex justify-content-center text-center mx-auto tactoroverview">Tactor Overview</h4>
            </div>
          </div>
                </div>


                <div className="col col-auto">
                  <div className="bg-light  tactorplacement-box  tactorinfo d-flex align-items-center">
                    <img src={this.state.place} alt="" className="generator-logo tactorplacement"/>
                  </div>
                  <h4 className="text-center mx-auto">Tactor Placement</h4>
                </div>

                <div className="col col-auto">
                  <div className="bg-light  tactorplacement-box  tactorinfo d-flex align-items-center">

                    {this.state.hit1[0] &&(
                      <div className="row tactor-emotion d-flex justify-items-center">
                      <div className="col col-12 tactor-emotion">
                      <img src={anger} alt="" className="tactor-emotion"/>
                      <h4 className="text-center tactor-emotion">Anger</h4>
                    </div>
                    </div>
                  )}
                  {this.state.tap1[0] &&(
                    <div className="row tactor-emotion d-flex justify-items-center">
                    <div className="col col-12 tactor-emotion">
                    <img src={gratitude} alt="" className="tactor-emotion"/>
                    <h4 className="text-center tactor-emotion">Gratitude</h4>
                  </div>
                  </div>
                )}
                {this.state.stroke1[0] &&(
                  <div className="row tactor-emotion d-flex justify-items-center">
                  <div className="col col-7 tactor-emotion mx-auto">
                  <img src={love} alt="" className="tactor-emotion"/>
                  <h4 className="text-center tactor-emotion">Love</h4>
                </div>
                  <div className="w-100"></div>
                <div className="col col-7 tactor-emotion mx-auto">
                <img src={sympathy} alt="" className="tactor-emotion"/>
                <h4 className="text-center tactor-emotion">Sympathy</h4>
              </div>
              <div className="w-100"></div>
              <div className="col col-7 tactor-emotion mx-auto">
              <img src={sadness} alt="" className="tactor-emotion"/>
              <h4 className="text-center tactor-emotion">Sadness</h4>
            </div>
            </div>
          )}{this.state.squeeze1[0] &&(
            <div className="row tactor-emotion d-flex justify-items-center">
                  <div className="col col-6 tactor-emotion">
                  <img src={fear} alt="" className="tactor-emotion"/>
                  <h4 className="text-center tactor-emotion">Fear</h4>
                </div>
                    <div className="col col-6 tactor-emotion">
                      <img src={love} alt="" className="tactor-emotion"/>
                      <h4 className="text-center tactor-emotion">Love</h4>
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-6 tactor-emotion">
                    <img src={anger} alt="" className="tactor-emotion"/>
                    <h4 className="text-center tactor-emotion">Anger</h4>
                    </div>
                    <div className="col col-6 tactor-emotion">
                      <img src={happiness} alt="" className="tactor-emotion"/>
                      <h4 className="text-center tactor-emotion">Happiness</h4>
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-6 tactor-emotion">
                    <img src={gratitude} alt="" className="tactor-emotion"/>
                    <h4 className="text-center tactor-emotion">Gratitude</h4>
                    </div>
                    <div className="col col-6 tactor-emotion">
                      <img src={sadness} alt="" className="tactor-emotion"/>
                      <h4 className="text-center tactor-emotion">Sadness</h4>
                    </div>
                  </div>)}
                    {this.state.shake1[0] &&(
                      <div className="row tactor-emotion d-flex justify-items-center">
                            <div className="col col-6 tactor-emotion">
                            <img src={happiness} alt="" className="tactor-emotion"/>
                            <h4 className="text-center tactor-emotion">Happiness</h4>
                          </div>
                              <div className="col col-6 tactor-emotion">
                                <img src={gratitude} alt="" className="tactor-emotion"/>
                                <h4 className="text-center tactor-emotion">Gratitude</h4>
                              </div>
                              <div className="w-100"></div>
                              <div className="col col-6 tactor-emotion">
                              <img src={love} alt="" className="tactor-emotion"/>
                              <h4 className="text-center tactor-emotion">Love</h4>
                              </div>
                              <div className="col col-6 tactor-emotion">
                                <img src={sadness} alt="" className="tactor-emotion"/>
                                <h4 className="text-center tactor-emotion">Sadness</h4>
                              </div>
                              <div className="w-100"></div>
                              <div className="col col-6 tactor-emotion">
                              <img src={sympathy} alt="" className="tactor-emotion"/>
                              <h4 className="text-center tactor-emotion">Sympathy</h4>
                              </div>
                              </div>
                            )}
                            {this.state.rub1[0] &&(
                              <div className="row tactor-emotion d-flex justify-items-center">
                              <div className="col col-7 tactor-emotion mx-auto">
                              <img src={love} alt="" className="tactor-emotion"/>
                              <h4 className="text-center tactor-emotion">Love</h4>
                            </div>
                            <div className="w-100"></div>
                            <div className="col col-7 tactor-emotion mx-auto">
                            <img src={sympathy} alt="" className="tactor-emotion"/>
                            <h4 className="text-center tactor-emotion">Sympathy</h4>
                          </div>
                          </div>
                      )}  {this.state.push1[0] &&(
                        <div className="row tactor-emotion d-flex justify-items-center">
                          <div className="col col-7 tactor-emotion mx-auto">
                          <img src={disgust} alt="" className="tactor-emotion"/>
                          <h4 className="text-center tactor-emotion">Disgust</h4>
                        </div>
                        <div className="w-100"></div>
                        <div className="col col-7 tactor-emotion mx-auto">
                        <img src={anger} alt="" className="tactor-emotion"/>
                        <h4 className="text-center tactor-emotion">Anger</h4>
                      </div>
                      <div className="w-100"></div>
                      <div className="col col-7 tactor-emotion mx-auto">
                      <img src={sadness} alt="" className="tactor-emotion"/>
                      <h4 className="text-center tactor-emotion">Sadness</h4>
                    </div>
                    </div>
                  )}
                  {this.state.pat1[0] &&(
                    <div className="row tactor-emotion d-flex justify-items-center">
                          <div className="col col-6 tactor-emotion">
                          <img src={sympathy} alt="" className="tactor-emotion"/>
                          <h4 className="text-center tactor-emotion">Sympathy</h4>
                        </div>
                            <div className="col col-6 tactor-emotion">
                              <img src={love} alt="" className="tactor-emotion"/>
                              <h4 className="text-center tactor-emotion">Love</h4>
                            </div>
                            <div className="w-100"></div>
                            <div className="col col-6 tactor-emotion">
                            <img src={gratitude} alt="" className="tactor-emotion"/>
                            <h4 className="text-center tactor-emotion">Gratitude</h4>
                            </div>

                            <div className="col col-6 tactor-emotion">
                              <img src={sadness} alt="" className="tactor-emotion "/>
                              <h4 className="text-center tactor-emotion">Sadness</h4>
                            </div>
                          </div>)}


                  </div>
                  <h4 className="text-center  mx-auto">Associated Emotion</h4>
                </div>
              </div>
            </section>
            
            <div className="row buttons">
              <div className="col col-3 tactorinfonav d-flex align-content-end tactselected">
                <div className="row flex-nowrap">
                  <div className="col">
                    <div className="tactoricon d-flex justify-content-start">
                      <img src={this.state.acttact[0]} alt="" className="tactorinfoicon"/>
                    </div>
                  </div>
                  <div className="col tactinfo">
              <h4 className="tactinfo">{this.state.acttact[3]}</h4>
            <br/>
              <h5 className="tactinfo">{this.state.acttact[1]}</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> {this.state.acttact[2]}</h5>
            </div>

            </div>
          </div>
              <div className="col float-right activated d-flex align-items-end justify-content-end">

              <h4 className="activated">Please make sure you have activated the tactor.</h4>
              
              {this.isActive(this.state.acttact[3])?
                (<button className="align-items-center" id="deactivated"  onClick={() => this.deactivate(this.state.acttact[3])}>
                  <h6 className="text-center deactivated">Deactivate</h6>
                </button>) : 
                (<button className="align-items-center" id="activated"  onClick={() => this.activate(this.state.acttact[3])}>
                  <h6 className="text-center activated">Activate</h6>
                </button>)}

            </div>
          </div>
          </div>
        </div>
      )}

      {this.state.generator[0] && (
        <div className ="row left-nav group1 dflex flex-nowrap">
              <div className="col col-2 bg-light  sidebar d-flex">
                <div className ="row left-nav group1">
                  <div className="col-12 left-col">
                    <nav className="navbar left-nav navbar-expand navbar-light">
                      <ul className="left-nav nav-item text-left">
                        <li className={"left-nav nav-link " + this.state.estate}    onClick={() => this.handleClick("emotion")}>
                          <a className="left-nav nav-link">
                            <img src={emotion} alt="" className="left-nav icon"/>
                            Emotion
                          </a>
                        </li>

                        {this.state.eselected && (
                          <div className="row justify-content-center">
                            <div className="col col-auto bg-white sidebar-emotion-box">
                              <img src={this.state.eicon} alt="" className="emotion-logo happiness sidebar-emotion" />
                              <h4 className="text-center">{this.state.ename}</h4>
                            </div>
                          </div>
                        )}

                        <li className={"left-nav nav-link " + this.state.tstate}   onClick={() => this.handleClick("tactor")}>
                          <a className="left-nav nav-link" >
                            <img src={tactor} alt="" className="left-nav icon"/>
                            Tactor
                          </a>
                        </li>

                        {this.state.tselected && (
                        <div className="row justify-content-center">
                          <div className="col col-auto bg-white sidebar-tactor-box">
                            <img src={this.state.ticon} alt="" className="tactor-logo happiness sidebar-tactor"/>
                            <h4 className="text-center">{this.state.tname}</h4>
                          </div>
                        </div>
                        )}

                        <li className={"left-nav nav-link "+ this.state.bstate}  >
                          <a className="left-nav nav-link" onClick={() => this.handleClick("behavior")}>
                            <img src={behavior} alt="" className="left-nav icon"/>
                            Touch
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>


              </div>

              {this.state.home && (

              <div className="col col-10 main-content">
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
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.happiness} onClick={() => (this.emotionSelect("happiness"), this.handleClick("emotionselect"))}>
                    <img src={happiness} alt="" className="emotion-logo happiness"/>
                  </div>

                    <h4 className="text-center">Happiness</h4>

                  </div>
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.fear} onClick={() => (this.emotionSelect("fear"), this.handleClick("emotionselect"))}>
                      <img src={fear} alt="" className="emotion-logo fear"/>
                    </div>
                    <h4 className="text-center">Fear</h4>
                  </div>
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.sympathy} onClick={() => (this.emotionSelect("sympathy"), this.handleClick("emotionselect"))}>
                        <img src={sympathy} alt="" className="emotion-logo sympathy"/>
                    </div>
                    <h4 className="text-center">Sympathy</h4>
                  </div>
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.sadness}  onClick={() => (this.emotionSelect("sadness"), this.handleClick("emotionselect"))}>
                      <img src={sadness} alt="" className="emotion-logo sadness"/>
                    </div>
                    <h4 className="text-center">Sadness</h4>
                  </div>
                </div>
                <div className="row emotion">
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.anger} onClick={() => (this.emotionSelect("anger"), this.handleClick("emotionselect"))}>
                      <img src={anger} alt="" className="emotion-logo anger"/>
                  </div>
                  <h4 className="text-center">Anger</h4>
                  </div>
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.disgust} onClick={() => (this.emotionSelect("disgust"), this.handleClick("emotionselect"))}>
                      <img src={disgust} alt="" className="emotion-logo disgust"/>
                    </div>
                    <h4 className="text-center">Disgust</h4>
                  </div>
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.love} onClick={() => (this.emotionSelect("love"), this.handleClick("emotionselect"))}>
                      <img src={love} alt="" className="emotion-logo love"/>
                    </div>
                    <h4 className="text-center">Love</h4>
                  </div>
                  <div className="col">
                    <div className={"bg-light emotion-box emotion d-flex align-items-center "+ this.state.gratitude} onClick={() => (this.emotionSelect("gratitude"), this.handleClick("emotionselect"))}>
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
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.shake}  onClick={() => (this.tactorSelect("shake", this.state.ename), this.handleClick("shake"))}>
                      <img src={shake} alt="" className="emotion-logo happiness"/>
                    </div>

                      <h4 className="text-center">Shake</h4>

                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.squeeze} onClick={() => (this.tactorSelect("squeeze", this.state.ename), this.handleClick("squeeze"))}>
                        <img src={squeeze} alt="" className="emotion-logo fear"/>
                      </div>
                      <h4 className="text-center">Squeeze</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.hit}  onClick={() => (this.tactorSelect("hit", this.state.ename), this.handleClick("hit"))}>
                          <img src={hit} alt="" className="emotion-logo sympathy"/>
                      </div>
                      <h4 className="text-center">Hit</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.pat}  onClick={() => (this.tactorSelect("pat", this.state.ename), this.handleClick("pat"))}>
                        <img src={pat} alt="" className="emotion-logo sadness"/>
                      </div>
                      <h4 className="text-center">Pat</h4>
                    </div>
                  </div>
                  <div className="row emotion">
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.push}  onClick={() => (this.tactorSelect("push", this.state.ename), this.handleClick("push"))}>
                        <img src={push} alt="" className="emotion-logo anger"/>
                    </div>
                    <h4 className="text-center">Push</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.rub}  onClick={() => (this.tactorSelect("rub", this.state.ename), this.handleClick("rub"))}>
                        <img src={rub} alt="" className="emotion-logo disgust"/>
                      </div>
                      <h4 className="text-center">Rub</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.stroke}  onClick={() => (this.tactorSelect("stroke", this.state.ename), this.handleClick("stroke"))}>
                        <img src={stroke} alt="" className="emotion-logo love"/>
                      </div>
                      <h4 className="text-center">Stroke</h4>
                    </div>
                    <div className="col">
                      <div className={"emotion-box emotion d-flex align-items-center " + this.state.tap}  onClick={() => (this.tactorSelect("tap", this.state.ename), this.handleClick("tap"))}>
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
                          <input type="range" className="slider" id="touch-range" name="touch-range" value={this.state.trange[0]} onInput={() => (this.handleSlider("trange"))}  min="0" max="180" step="10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.trange[1]+'%, rgba(244,179,33,1) '+this.state.trange[1]+'%, rgba(244,179,33,1) '+this.state.trange[2]+ '%, rgba(255,255,255,1) '+ this.state.trange[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Speed of Touching (degree/s)</h6>
                            <h6 className="slider-value float-right">{this.state.tspeed[0]}</h6>
                            <br/>
                            <img src={tspeed} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="speed-touch" name="speed-touch" value={this.state.tspeed[0]} onInput={() => (this.handleSlider("tspeed"))}  min="0" max="360" step="15" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.tspeed[1]+'%, rgba(244,179,33,1) '+this.state.tspeed[1]+'%, rgba(244,179,33,1) '+this.state.tspeed[2]+ '%, rgba(255,255,255,1) '+ this.state.tspeed[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Speed of Retreating (degree/s)</h6>
                            <h6 className="slider-value float-right">{this.state.rspeed[0]}</h6>
                            <br/>
                            <img src={rspeed} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="speed-retreat" value={this.state.rspeed[0]} onInput={() => (this.handleSlider("rspeed"))}  min="0" max="360" step="15" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.rspeed[1]+'%, rgba(244,179,33,1) '+this.state.rspeed[1]+'%, rgba(244,179,33,1) '+this.state.rspeed[2]+ '%, rgba(255,255,255,1) '+ this.state.rspeed[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Touch Randomness (Tremble)</h6>
                            <h6 className="slider-value float-right">{this.state.randomness[0]}</h6>
                            <br/>
                            <img src={randomness} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="touch-randomness" value={this.state.randomness[0]} onInput={() => (this.handleSlider("randomness"))}  min="0" max="50" step="5" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.randomness[1]+'%, rgba(244,179,33,1) '+this.state.randomness[1]+'%, rgba(244,179,33,1) '+this.state.randomness[2]+ '%, rgba(255,255,255,1) '+ this.state.randomness[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Touch Interval (ms)</h6>
                            <h6 className="slider-value float-right">{this.state.tint[0]}</h6>
                            <br/>
                            <img src={tint} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="touch-interval" value={this.state.tint[0]} onInput={() => (this.handleSlider("tint"))}  min="0" max="1000" step="10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.tint[1]+'%, rgba(244,179,33,1) '+this.state.tint[1]+'%, rgba(244,179,33,1) '+this.state.tint[2]+ '%, rgba(255,255,255,1) '+ this.state.tint[2]+ '%)'}}/>
                          </div>

                          <div className="slider-div">
                            <h6 className="slider-label">Interval Randomness</h6>
                            <h6 className="slider-value float-right">{this.state.irand[0]}</h6>
                            <br/>
                            <img src={irand} alt="" className="slider-icon"/>
                          <input type="range" className="slider" id="interval-randomness" value={this.state.irand[0]} onInput={() => (this.handleSlider("irand"))} min="0" max="300" step="10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) '+this.state.irand[1]+'%, rgba(244,179,33,1) '+this.state.irand[1]+'%, rgba(244,179,33,1) '+this.state.irand[2]+ '%, rgba(255,255,255,1) '+ this.state.irand[2]+ '%)'}}/>
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
                            <img src={play} alt="" id="play-icon" onClick={()=> (this.pp(true))} />
                            <img src={pause} alt="" id="pause-icon" onClick={()=> (this.pp(false))}/>
                          </div>
                      </div>
                      <div className="name-input">
                        <h6 className="name-label">Name</h6>
                        <input type="text" className="text-input" value={this.state.fileName} onChange={this.handleChange}/>
                        <button className="archive float-right">
                        <h6 className="archive slider-label" onClick={()=>this.handleClick("archive")}>Refer to Archive</h6>
                        <img src={arrow} alt="" className="archive" onClick={()=>this.handleClick("archive")}/>
                      </button>
                      </div>
                      <div className="buttons" id="archive-functions">
                        
                        <button className="float-right button-white" id="save" onClick={()=>this.handleClick("save2archive")}>
                          <h6>Save</h6>
                        </button>
                        
                        <button className="float-right button-black" id="export" onClick={()=>toast("Feature not active")}>
                          <h6>Export</h6>
                        </button>

                      </div>
                    </div>

                  </div>
                  </section>

                </div>
            )}

            </div>
            )}

      {this.state.archive[0] && (
        <div className="row left-nav group1">

          <div className="col-2 bg-light sidebar d-flex tinfo">
            <div className ="row left-nav group1">
              <div className="col-12 left-col">
                <nav className="navbar left-nav navbar-expand navbar-light">
                  <ul className="left-nav text-left tinfo">
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("hit")?"activated":"not-activated")}>
                    <div className="row flex-nowrap">
                      <div className="col">
                        <div className={"tactoricon d-flex justify-content-start"}>
                          <img src={hit} alt="" className="tactorinfoicon"/>
                        </div>
                      </div>
                      <div className="col tactinfo">
                        <h4 className="tactinfo">Hit</h4>
                        <br/>
                        <h5 className="tactinfo">Tactor 1</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 1</h5>
                      </div>
                    </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("pat")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className="tactoricon d-flex justify-content-start">
                            <img src={pat} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Pat</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 2</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 2</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("push")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className={"tactoricon d-flex justify-content-start "}>
                            <img src={push} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Push</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 3</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 3</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("rub")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className="tactoricon d-flex justify-content-start ">
                            <img src={rub} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Rub</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 4</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 4</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("shake")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className="tactoricon d-flex justify-content-start ">
                            <img src={shake} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Shake</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 5</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 5</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("squeeze")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className="tactoricon d-flex justify-content-start ">
                            <img src={squeeze} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Squeeze</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 6</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 6</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("stroke")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className="tactoricon d-flex justify-content-start ">
                            <img src={stroke} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Stroke</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 7</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 7</h5>
                        </div>
                      </div>
                    </li>
                    <li className={"left-nav tactorinfonav-archive nav-link col col-auto tactorlink nav-link " + (this.isActive("tap")?"activated":"not-activated")}>
                      <div className="row flex-nowrap">
                        <div className="col">
                          <div className="tactoricon d-flex justify-content-start">
                            <img src={tap} alt="" className="tactorinfoicon"/>
                          </div>
                        </div>
                        <div className="col tactinfo">
                          <h4 className="tactinfo">Tap</h4>
                          <br/>
                          <h5 className="tactinfo">Tactor 8</h5><img src={link} alt="" className="tactinfo"/><h5 className="tactinfo"> Pin 8</h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        
          <div className="col-10 main-content">
            <section className="main-head">
              <h2>Archive</h2>
            </section>

            <section className="archive-block">
              <div className="header row">
                <div className="title col">My Touches</div>

                <div className="col">

                </div>

                <div className="col">


                </div>

                <div className="col username">{this.state.username} <img src={info} alt="" className="img-button" onClick={() => this.handleClick("login")}/></div>
              </div>

              <div className="data-block">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Emotion</th>
                      <th>Tactor</th>
                      <th>Date</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                    <tbody>
                      {this.state.archiveData.map((item, i) => (
                          <tr key={item.id}>
                            <td onClick={() => this.setFromArchive(item)}>{item.name}</td>
                            <td onClick={() => this.setFromArchive(item)}>{item.emotion}</td>
                            <td onClick={() => this.setFromArchive(item)}>{item.tactor}</td>
                            <td onClick={() => this.setFromArchive(item)}>{new Date(item.timestamp+" UTC").toLocaleString("en-US", {dateStyle: "medium", timeStyle: "short"})}</td>
                            <td><img src={play} alt="" className="img-button" onClick={() => toast("Feature not active.")}/></td>
                            <td><img src={del} alt="" className="img-button" onClick={() => toast("Feature not active.")}/></td>
                          </tr>
                        ))
                      }
                  </tbody>
                </table>
              </div>

              <div className="row footer">
                <div className="col note">
                  Please make sure you have activated the tactor before previewing the touch sensation
                </div>

                <div className="col">
                  
                </div>

                <div className="col button-group">
                  <button className="float-right align-items-center button-black" id="export-archive" onClick={() => toast("Feature not active.")}>
                    <h6>Export</h6>
                  </button>
                </div>

              </div>
            </section>
              
          </div>
        
        </div>
      )}

</main>

</section>
<ToastContainer 
transition={Slide}
autoClose={4000}
position="top-right"
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover
/>
</div>
)

}

}

export default LeftNav;
