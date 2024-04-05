console.log("start");
setTimeout(function cb(){
    console.log("callback");
},4000);
fetch("https://www.youtube.com/watch?v=nqsPmuicJJc&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=20&ab_channel=AkshaySaini").then(function cbf(){

});
console.log("end");