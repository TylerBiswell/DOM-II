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
     event.preventDefault();
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
 
//"dblclick" event - toggle colors on the Sign-up buttons
let contentPickEle = document.querySelector(".content-pick");
contentPickEle.addEventListener("dblclick", event => {
  if (event.target.className === "btn") {
    event.stopPropagation();
    TweenMax.to(event.target, 1, {
      y: 30,
      ease: Bounce.easeOut
    });

    if (event.target.style.backgroundColor === "yellow") {
      event.target.style.backgroundColor = "white";
      event.target.color = "blue";
    } else {
      event.target.style.backgroundColor = "yellow";
      event.target.style.color = "green";
    }
    TweenMax.yoyo();
  }
});

// animation for buttons
TweenMax.staggerFrom(
  ".btn",
  2,
  { scale: 0, opacity: 0, delay: 0, ease: Elastic.easeOut },
  0.5
);
