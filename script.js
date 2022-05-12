gsap.set("#ccBanner",{
    top:"180%"
});

// First Page Color Contrast Animation

gsap.to("#ccBanner", {
    scrollTrigger: {
        trigger: "#over-section",
        start: "top bottom",
        end: "top 50%",
        scrub: .4,
    },
    top: "-120%",
    rotate: 270,
    ease: "Circ.easeOut",
});

//  Second Page Curved Text Rotate Animation

gsap.to("#cCircle1", {
    scrollTrigger: {
        trigger: "#over-section",
        start: "top 70%",
        end: "25% top",
        scrub: 1,
    },
    rotate: 400,
    ease: "sine.out",
});

gsap.to("#cCircle2", {
    scrollTrigger: {
        trigger: "#over-section",
        start: "top 70%",
        end: "25% top",
        scrub: 1,
    },
    rotate: -300,
    ease: "sine.out",
});

gsap.to("#cCircle3", {
    scrollTrigger: {
        trigger: "#over-section",
        start: "top 70%",
        end: "25% top",
        scrub: 1,
    },
    rotate: 790,
    ease: "sine.out",
});

gsap.to("#little-circle", {
    scrollTrigger: {
        trigger: "#over-section",
        start: "top 40%",
        end: "25% 30%",
        scrub: 1,
    },
    rotate: 120,
    scale: 8,
    ease: "easeInOut",
    opacity: 1,
});

gsap.to("#little-circle h4", {
    scrollTrigger: {
        trigger: "#over-section",
        start: "top 40%",
        end: "25% top",
        scrub: 1,
    },
    ease: "easeInOut",
    opacity: 1,
});

// Third Page Poster Animation
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#third",
        start: "center center",
        end: "100% 10%",
        pin: true,
        scrub: 3,
    }
});
tl
.to("#poster-one",{
    top: "50%",
    ease: Circ.easeIn,
    rotate: "720deg",
})
.to("#posters",{
    left: "64%",
    ease: Expo.easeInOut,
})

.to("#poster-one",{
    ease: Expo.easeInOut,
    left: "-250%",
} , "a")
.to("#posters",{
    ease: Expo.easeInOut,
    left: "-250%",
} , "a")
// Fourth Div Animation

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#fourth",
        start: "center center",
        pin: true,
        scrub: 2,
    }
});
tl2.to(".imgsection", {
    opacity: 1,
    stagger: .8,
    ease: Power3.easeOut,
} ,"a" )
.to(".imgsection", {
    opacity: 0,
    stagger: 1,
    ease: Power3.easeOut,

} ,"a" )

.to("#fourth h1 span", {
    y: -40,
    stagger: .8,
    ease: Power3.easeOut,
} ,"a" )
.to("#fourth h1 span", {
    y: 0,
    stagger: 1,
    ease: Power3.easeOut,

} ,"a" )

// Last Div ANIMATION Of Images

document.querySelectorAll("#five h3").forEach(function(atag){
    atag.addEventListener("mousemove" , function(dets){
        gsap.to(".imgchange" , {
            x: dets.target.dataset.index * -100 + "%",
            duration: 1.3,
        })

    });
});

// Menu Image Change Animation
document.querySelectorAll("#links a").forEach(function(values){
    values.addEventListener("mouseover", function(dets){
        gsap.to(".mimg" , {
            x: dets.target.dataset.id * -100 + "%",
            duration: 1.3,
        })
    });
});
// Progress Div 

ScrollTrigger.create({
    onUpdate: function(dets){
        gsap.to("#progressdiv",{
            width: Math.floor(dets.progress * 100) + "vw",
        })
    }
});

// Menu List Div

document.querySelector("#navbar #menu").addEventListener("click", function(dets){
    document.querySelector("#mdiv").style.transform = "translateY(0%)";
    document.querySelector("#hero-section").style.display = "none";

});
document.querySelector("#cross").addEventListener("click", function(dets){
    document.querySelector("#mdiv").style.transform = "translateY(-100%)";
    document.querySelector("#hero-section").style.display = "";
});