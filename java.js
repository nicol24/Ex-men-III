let sound1 = document.getElementById("sound1");
let sound2 = document.getElementById("sound2");
let sound3 = document.getElementById("sound3");
let sound4 = document.getElementById("sound4");
let sound5 = document.getElementById("sound5");
let sound6 = document.getElementById("sound6");
let sound7 = document.getElementById("sound7");
let sound8 = document.getElementById("sound8");
let sound9 = document.getElementById("sound9");
let clip1_btn = document.getElementById("clip1-btn");
let clip2_btn = document.getElementById("clip2-btn");
let clip3_btn = document.getElementById("clip3-btn");
let clip4_btn = document.getElementById("clip4-btn");
let clip5_btn = document.getElementById("clip5-btn");
let clip6_btn = document.getElementById("clip6-btn");
let clip7_btn = document.getElementById("clip7-btn");
let clip8_btn = document.getElementById("clip8-btn");
let clip9_btn = document.getElementById("clip9-btn");

clip1_btn.addEventListener("click",()=>{
    sound1.clip1();

    controls.style.animationPlayState = "runing";
});
clip2_btn.addEventListener("click",()=>{
    sound2.clip2();

    controls.style.animationPlayState = "runing";
});
clip3_btn.addEventListener("click",()=>{
    sound3.clip3();

    controls.style.animationPlayState = "runing";
});
clip4_btn.addEventListener("click",()=>{
    sound4.clip4();

    controls.style.animationPlayState = "runing";
});
clip5_btn.addEventListener("click",()=>{
    sound5.clip5();

    controls.style.animationPlayState = "runing";
});
clip6_btn.addEventListener("click",()=>{
    sound6.clip6();

    controls.style.animationPlayState = "runing";
});
clip7_btn.addEventListener("click",()=>{
    sound7.clip7();

    controls.style.animationPlayState = "runing";
});
clip8_btn.addEventListener("click",()=>{
    sound8.clip8();

    controls.style.animationPlayState = "runing";
});
clip9_btn.addEventListener("click",()=>{
    sound9.clip9();

    controls.style.animationPlayState = "runing";
});
