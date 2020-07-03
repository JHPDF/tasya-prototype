// fixing the web audio movement problem
var started = false;
document.documentElement.addEventListener('mousedown', () => {
  if (started) return;
  started = true;
})

//location 

//function getLocation(callback) {
//navigator.geolocation.getCurrentPosition(position=>{
//    const pos = {};
//    pos.lat = position.coords.latitude.toFixed(2); 
//    pos.lng = position.coords.longitude.toFixed(2); 
//    callback(pos);
//  });
//}


// getting data
let d = new Date(); 
let hours = d.getHours(); //calls hours
let minutes = d.getMinutes(); //calls minutes
let sec = d.getSeconds ();//calls seconds
    
//setInterval(function updSec(){
//d.getSeconds }, 3000);

var noteValues = {
  'C0': 16.35,
  'C#0': 17.32,
  'Db0': 17.32,
  'D0': 18.35,
  'D#0': 19.45,
  'Eb0': 19.45,
  'E0': 20.60,
  'F0': 21.83,
  'F#0': 23.12,
  'Gb0': 23.12,
  'G0': 24.50,
  'G#0': 25.96,
  'Ab0': 25.96,
  'A0': 27.50,
  'A#0': 29.14,
  'Bb0': 29.14,
  'B0': 30.87,
  'C1': 32.70,
  'C#1': 34.65,
  'Db1': 34.65,
  'D1': 36.71,
  'D#1': 38.89,
  'Eb1': 38.89,
  'E1': 41.20,
  'F1': 43.65,
  'F#1': 46.25,
  'Gb1': 46.25,
  'G1': 49.00,
  'G#1': 51.91,
  'Ab1': 51.91,
  'A1': 55.00,
  'A#1': 58.27,
  'Bb1': 58.27,
  'B1': 61.74,
  'C2': 65.41,
  'C#2': 69.30,
  'Db2': 69.30,
  'D2': 73.42,
  'D#2': 77.78,
  'Eb2': 77.78,
  'E2': 82.41,
  'F2': 87.31,
  'F#2': 92.50,
  'Gb2': 92.50,
  'G2': 98.00,
  'G#2': 103.83,
  'Ab2': 103.83,
  'A2': 110.00,
  'A#2': 116.54,
  'Bb2': 116.54,
  'B2': 123.47,
  'C3': 130.81,
  'C#3': 138.59,
  'Db3': 138.59,
  'D3': 146.83,
  'D#3': 155.56,
  'Eb3': 155.56,
  'E3': 164.81,
  'F3': 174.61,
  'F#3': 185.00,
  'Gb3': 185.00,
  'G3': 196.00,
  'G#3': 207.65,
  'Ab3': 207.65,
  'A3': 220.00,
  'A#3': 233.08,
  'Bb3': 233.08,
  'B3': 246.94,
  'C4': 261.63,
  'C#4': 277.18,
  'Db4': 277.18,
  'D4': 293.66,
  'D#4': 311.13,
  'Eb4': 311.13,
  'E4': 329.63,
  'F4': 349.23,
  'F#4': 369.99,
  'Gb4': 369.99,
  'G4': 392.00,
  'G#4': 415.30,
  'Ab4': 415.30,
  'A4': 440.00,
  'A#4': 466.16,
  'Bb4': 466.16,
  'B4': 493.88,
  'C5': 523.25,
  'C#5': 554.37,
  'Db5': 554.37,
  'D5': 587.33,
  'D#5': 622.25,
  'Eb5': 622.25,
  'E5': 659.26,
  'F5': 698.46,
  'F#5': 739.99,
  'Gb5': 739.99,
  'G5': 783.99,
  'G#5': 830.61,
  'Ab5': 830.61,
  'A5': 880.00,
  'A#5': 932.33,
  'Bb5': 932.33,
  'B5': 987.77,
  'C6': 1046.50,
  'C#6': 1108.73,
  'Db6': 1108.73,
  'D6': 1174.66,
  'D#6': 1244.51,
  'Eb6': 1244.51,
  'E6': 1318.51,
  'F6': 1396.91,
  'F#6': 1479.98,
  'Gb6': 1479.98,
  'G6': 1567.98,
  'G#6': 1661.22,
  'Ab6': 1661.22,
  'A6': 1760.00,
  'A#6': 1864.66,
  'Bb6': 1864.66,
  'B6': 1975.53,
  'C7': 2093.00,
  'C#7': 2217.46,
  'Db7': 2217.46,
  'D7': 2349.32,
  'D#7': 2489.02,
  'Eb7': 2489.02,
  'E7': 2637.02,
  'F7': 2793.83,
  'F#7': 2959.96,
  'Gb7': 2959.96,
  'G7': 3135.96,
  'G#7': 3322.44,
  'Ab7': 3322.44,
  'A7': 3520.00,
  'A#7': 3729.31,
  'Bb7': 3729.31,
  'B7': 3951.07,
  'C8': 4186.01
};



//notes - 24 for h & 60 for m
let notesH = ['C0','D0','E0','F0','G1','A2','B4','C4','D4','E5','F5','G5','A2','B2','C2','D3','E3','F3','G2','A4','G4','D5','F5','G5'];
let notesM = ['C0', 'C#0', 'Db0', 'D0', 'D#0','Eb0', 'E0', 'F0', 'F#0', 'Gb0', 'G0', 'G#0', 'Ab0', 'A0', 'Bb0', 'B0', 'C1','C#1', 'Db1', 'D1', 'D#1', 'Eb1', 'E1', 'F1', 'F#1', 'Gb1', 'G1','G#1','Ab1','A1','A#1','Bb1','B1','C2','C#2','Db2','D2', 'D#2', 'Eb2', 'E2', 'F2', 'F#2', 'Gb2', 'G2', 'G#2', 'Ab2', 'A2', 'A#2', 'Bb2', 'B2', 'C3', 'C#3', 'Db3', 'D3', 'D#3', 'Eb3', 'E3', 'F3'];
let note = notesH [hours];
let noteM = notesM [minutes];

function circumference(notesM) {
return parseFloat(notesM) * 2.0 * Math.PI;}

// sets timeline - figure how to add monoEff to it


// set a rule on the time of the day =>
Tone.Transport.bpm.value = 130;
Tone.Transport.start();
let masterGain = new Tone.Gain(1);


function shuffleMe(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
return array;
}
// randomized pattern
let randomPattern = [hours+2, sec+2, minutes+4, hours+4, sec+2, minutes+4, minutes+4, sec+2];
let randomized = shuffleMe(randomPattern);

// randomizing the patterns for the pattern variable
let patternOne = [minutes, sec , minutes, minutes+sec, minutes, sec, minutes, hours];
let patternTwo = [minutes, minutes, minutes, sec, minutes, minutes, minutes, hours];
let patterns = [patternOne, patternTwo, randomized];
let patternsChoice = patterns[Math.floor(Math.random() * patterns.length)];

//SYNTHS

var monoGain = new Tone.Gain(0.5);
var tremolo = new Tone.Tremolo ({
  frequency : noteM,
  depth : 0.6,
  spread : sec
  }).connect(monoGain);

monoGain.connect(masterGain);

var pingPong = new Tone.PingPongDelay({
    delayTime : 0.25 ,
    maxDelayTime : 1,
    //would be cool to add if-then to feedback?
    feedback : sec/60, 
  }).connect(tremolo);


// MONO SYNTH
const synth = new Tone.AMSynth(
  {harmonicity : sec ,
    detune : sec ,
    oscillator : {
    type : "sine"} ,
    envelope : {
    attack : 0.01 ,
    decay : 0.01 ,
    sustain : 1 ,
    release : 0.5},
    modulation : {
    type : "triangle"},
    modulationEnvelope : {
    attack : minutes/100 ,
    decay : sec/100 ,
    sustain : 1 ,
    release : 0.5
    }});

    function initMono(){
      $('.noteTwo').mousedown( function() {
        note = this.getAttribute('name') 
          synth.triggerAttack( note ) 
          msg = {'noteTwo' : note }
          ws.send( JSON.stringify( msg ) )
          synth.connect(vibrato);
          synth.sync();
        });
      $('.noteTwo').mouseup (function() {
          synth.triggerRelease();
       //$('.noteTwo').dblclick (function() {
       //})
          })};

const vibrato = new Tone.Vibrato ({
  maxDelay : 0.005,
  frequency : 7,
  depth : 0.8,
  type : 'square'
  }).connect(pingPong);

// ARPEGGIO
const arp = new Tone.AMSynth({
  harmonicity : hours/2,
  detune : minutes/100 ,
  oscillator : {
  type : "square"
  } ,
  envelope : {
  attack : sec/100 ,
  decay : 0.01 ,
  sustain : 1 ,
  release : hours/100,
  } ,
  modulation : {
  type : "square"
  } ,
  modulationEnvelope :
  {
  attack : 0.5 ,
  decay : minutes/100 ,
  sustain : hours ,
  release : sec/100}});

var arpeggio = document.getElementById("arpeggio"); 

function initArp(){
  $("#arpeggio").click( function() {
    noteOne = this.getAttribute('name')
    arp.triggerAttack( noteOne )
    msgOne = {"#arpeggio" : noteOne }
    ws.send( JSON.stringify( msgOne  ) )
    arp.connect(masterGain);
    arp.sync();
    arpeggio.addEventListener("click", pattern.start());
  } 
  );
  $('#arpeggio').dblclick(function () {
    arp.triggerRelease()
    arpeggio.addEventListener("dblclick", pattern.stop());
  })}

// RHYTHM

let rhythmId = document.getElementById("rhythm"); 
let rhythmPattern = new Tone.Pattern(function(time, note)
{ rhythm.triggerAttackRelease (note, 0.50);},patternsChoice);

let rhythmGain = new Tone.Gain(0.8);
rhythmGain.connect(masterGain);

const rhythm = new Tone.MembraneSynth(
  {pitchDecay : 0.05 ,
    octaves : 10 ,
    oscillator : {
    type : "sine"
    } ,
    envelope : {
    attack : 0.001 ,
    decay : 0.4 ,
    sustain : 0.01 ,
    release : 1.4 ,
    attackCurve : "bounce"
    
    }});

    function initRhythm(){
      $('#rhythm').click( function() {
        note = this.getAttribute('name') 
          rhythm.triggerAttack( note ) 
          msg = {'noteThree' : note }
          ws.send( JSON.stringify( msg ) )
          rhythm.connect(rhythmGain);
          rhythm.sync();
          rhythmId.addEventListener("click", rhythmPattern.start());
        });
      $('#rhythm').dblclick (function() {
          rhythm.triggerRelease();
          rhythmId.addEventListener("dblclick", rhythmPattern.stop());
       //})
          })};

// arp.toMaster();
// arp.triggerAttack("C4", "4n");
// arp.triggerRelease("4n" + 0.25);
// arp.triggerAttackRelease("C4", 0.25, "4n");



//event listener
//element.addEventListener(event, function, useCapture)

//var arpeggio = document.getElementById("arpeggio"); 
//var monoEff = document.getElementById("monoEff");
//var monoClean = document.getElementById("monoClean");

let pattern = new Tone.Pattern(function(time, note)
{ arp.triggerAttackRelease (note, 0.50);},patternsChoice);

masterGain.toMaster();

//volume scale

$('#local-volume').on('mousemove', function() { console.log( $(this).val() );
synth.volume.linearRampToValueAtTime( $(this).val() ) ; arp.volume.linearRampToValueAtTime( $(this).val() ); rhythm.volume.linearRampToValueAtTime( $(this).val() );  } )

//const localVol = document.getElementById('localVol')
//localVol.oninput = (e) => {
//console.log(e)
//const volumeOne = e.target.value
//Tone.Master = volumeOne}



function initSound() {
  initArp();
  initMono();
  initRhythm();}
document.onload = initSound();


//websocket
window.onload = function() {
received = 'st';
ws = new WebSocket('wss://whispering-temple-39200.herokuapp.com/');
ws.onmessage = function(msg){
// console.log( JSON.parse(msg.data) );
received = JSON.parse(msg.data)
if (received['noteOne']) {
console.log(received['noteOne'])
$('.noteOne').mousedown();
$('.noteOne').mouseup();}
if (received['noteTwo']) {
console.log(received['noteTwo'])
$('.noteTwo').mousedown();
$('.noteTwo').delay(500).mouseup()}}}