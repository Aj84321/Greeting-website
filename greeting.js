import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './index.css';

let curDate = new Date();
alert(curDate);
curDate = curDate.getHours();
let greeting = " ";
const cssStyle = {};

if (curDate >= 1 && curDate < 12){

   greeting = "Good Morning";
   cssStyle.color = "green";
   }
else if (curDate >= 12 && curDate <19){
greeting = "Good Afternoon";
cssStyle.color = "black";
}
else {greeting = "Good Night";
cssStyle.color = "pink";
}
ReactDom.render(
   <> 
   <div>
   <h1>
    Hello Sir,  <span style ={cssStyle}> {greeting} </span>
   </h1> 
   </div>
   <App />
   </>,
   document.getElementById("root")
   );