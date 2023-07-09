function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


var iscroll = document.querySelector("#scroll")
var overlay = document.querySelector("#overlay")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.scale = "1"
})
overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale = "0"
})

overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = (dets.x-40)+"px",
    iscroll.style.top = (dets.y-40)+"px"
})



document.querySelector("#page3").addEventListener("mousemove",function(dets){
  document.querySelector("#page3 #img-div").style.left = (dets.x + 10)+"px"
  document.querySelector("#page3 #img-div").style.top = (dets.y - 50)+"px"
})

document.querySelector("#page3").addEventListener("mouseenter",function(){
  document.querySelector("#page3 #img-div").style.opacity = 1
})
document.querySelector("#page3").addEventListener("mouseleave",function(){
  document.querySelector("#page3 #img-div").style.opacity = 0
})



document.querySelector("#page4").addEventListener("mousemove", function (dets) {
  document.querySelector("#page4>img").style.left =  (dets.x + 100)+"px"
  document.querySelector("#page4>img").style.top = dets.y+"px"
  document.querySelector("#page4>button").style.left = (dets.x + 100) + "px"
  document.querySelector("#page4>button").style.top = (dets.y + 200) + "px"
})
document.querySelector("#page4").addEventListener("mouseenter", function (){
  document.querySelector("#page4>img").style.opacity=1
  document.querySelector("#page4>button").style.opacity=1
})
document.querySelector("#page4").addEventListener("mouseleave", function (){
  document.querySelector("#page4>img").style.opacity=0
  document.querySelector("#page4>button").style.opacity=0
})




document.querySelector("#page7").addEventListener("mousemove",function(dets){
  document.querySelector("#page7 #move").style.left = (dets.x + 10)+"px"
  document.querySelector("#page7 #move").style.top = (dets.y - 50)+"px"
})

document.querySelector("#page7").addEventListener("mouseenter",function(){
  document.querySelector("#page7 #move").style.opacity = 1
})
document.querySelector("#page7").addEventListener("mouseleave",function(){
  document.querySelector("#page7 #move").style.opacity = 0
})


var overlayyyy = document.querySelector("#page9-img")
var read = document.querySelector("#read")

overlayyyy.addEventListener("mouseenter",function(){
    read.style.scale = "1"
})
overlayyyy.addEventListener("mouseleave",function(){
    read.style.scale = "0"
})

overlayyyy.addEventListener("mousemove",function(pp){
    read.style.left = (pp.x-40)+"px",
    read.style.top = (pp.y-180)+"px"
})




var elem = document.querySelectorAll(".box")
elem.forEach(function(e){
  var a = e.getAttribute("data-img")
  e.addEventListener("mouseenter",function(){
      document.querySelector("#page4>img").setAttribute("src",a)
  })
})








gsap.to("#page2>img",{
    rotate:10,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2>img",
        start:"top 80%",
        // markers:true,
        scrub:3
    }
})




var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -200%",
      scrub: true,
  }
})

tl.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#111",

})

tl.to("#nav", {
  color: "#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})


var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -340%",
      end: "top -340%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav", {
  color: "#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000)",
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -140%",
      scrub: true,
  }
})

tl.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#111",

})


tl.to("#nav", {
  color: "#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
})


var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "svg",
      scroller: "#main",
      // markers: "true",
      start: "top -340%",
      end: "top -340%",
      scrub: true,
  }
})
tl2.to("svg", {
  scale: 1,
  top: "5%",
  fill: "#fff",

})
tl2.to("#nav", {
  color: "#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000)",
})








gsap.to("#page6",{
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 0%",
    end:"top -120%",
    scrub:1,
    pin:true,
    // markers:true
  }
})

gsap.to("#page6>#pin1",{
  scrollTrigger:{
    trigger:"#page6>#pin1",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 40%",
    scrub:1
  },
  rotate:"5",
  opacity:1,
  y:-200
})



gsap.from("#page6>#pin2",{
  scrollTrigger:{
    trigger:"#page6>#pin2",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 40%",
    scrub:1
  },
  y:500,
  duration:5
})





