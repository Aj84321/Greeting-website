import React from "react";
import ReactDOM from "react-dom";
const name = "anand";
const img1 = "https://picsum.photos/200/100"
const img2 = "https://picsum.photos/300/400"
const img3 = "https://picsum.photos/200/200"
const links = "https://www.linkedin.com/"
ReactDOM.render(
<>
<h1 contentEditable = "true">My Name is {name}</h1>
<img src= {img1} alt="random images"/>
<img src= {img2} alt="random images"/>
<a href={links}  target="_linkedin">
<img src= {img3} alt="random images"/>
</a>
</>,
document.getElementById("root")   
)