// Your code goes here

 // "mouseover" event
 let imgBus = document.querySelector(".intro img");
 imgBus.addEventListener("mouseover", event => {
   imgBus.style.border = "2px solid yellow";
 });
 
  imgBus.addEventListener("mouseout", event => {
   imgBus.style.border = "0px solid yellow";
 });
 
  // "keydown" event
 let bodyEle = document.querySelector("body");
 bodyEle.addEventListener("keydown", event => {
   bodyEle.style.backgroundColor = "aqua";
 });
 
  //stop propagation example - double click
 bodyEle.addEventListener("dblclick", event => {
   bodyEle.style.backgroundColor = "lightgreen";
 });
 
  // "wheel" event
 bodyEle.addEventListener("wheel", event => {
   bodyEle.style.backgroundColor = "yellow";
 });
 
  // "drag/drop" event
 let imgContent = document.querySelector(".img-content img");
 imgContent.addEventListener(
   "dragstart",
   event => {
     if (imgContent.style.border === "2px solid aqua") {
       imgContent.style.border = "0px solid aqua";
     } else {
       imgContent.style.border = "2px solid aqua";
     }
   },
   false
 );
 
  // "load" event
 window.addEventListener("load", event => {
   console.log("The page is fully loaded");
 });
 
  // "focus" event
 let navLink = Array.from(document.querySelectorAll(".nav-link"));
 navLink.forEach(link => {
   link.addEventListener("focus", event => {
     link.style.backgroundColor = "yellow";
   });
 });
 
  // adding a blur event to remove the focus event's changes
 navLink.forEach(link => {
   link.addEventListener("blur", event => {
     link.style.backgroundColor = "white";
   });
 });
 
  // "resize" event
 window.addEventListener("resize", event => {
   alert("Please do not resize the window!");
 });
 
  // "scroll" event - not working
 let textContent = document.querySelector(".text-content");
 textContent.addEventListener("scroll", event => {
   alert("Please read the contents fully!");
 });
 
  // "select" event
 // Can be done only on "type =text and textarea"
 
  // "dblclick" event - toggle colors on the Sign-up buttons
 let signUpBtnArr = Array.from(document.querySelectorAll(".btn"));
 signUpBtnArr.forEach(btn => {
   btn.addEventListener("dblclick", event => {
     if (btn.style.backgroundColor === "yellow") {
       btn.style.backgroundColor = "white";
       btn.style.color = "blue";
     } else {
       btn.style.backgroundColor = "yellow";
       btn.style.color = "green";
     }
     event.stopPropagation();
   });
 });
