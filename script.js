// let img=document.querySelectorAll("img");

document.getElementById("rodyti").onclick = function() {
    document.getElementById("theImage").style.visibility = "visible";
}
document.getElementById("nerodyti").onclick = function() {
    document.getElementById("theImage").style.visibility = "hidden";
}

const maisyti = document.getElementById("maisyk");
maisyti.addEventListener("click", maisymas);


// function randomImg1(){
//         var myImages1 = new Array ();
//         myImages1[1] = "img/one.jpg";
//         myImages1[2] = "img/two.jpg";
//         myImages1[3] = "img/three.jpg";
//         myImages1[4] = "img/four.jpg";
//         myImages1[5] = "img/five.jpg";
//         myImages1[6] = "img/six.jpg";
//         var rnd = Math.floor(Math.random() * myImages1.length);
//         if(rnd == 0) {
//             rnd = 1;
//         }
//         document.write('<img class="who" src="' + myImages1[rnd] + '"/>');
//     }
function maisymas(){
let nuotraukos = document.querySelectorAll("img");
let kieknuotrauku = nuotraukos.length;
let random, keisti;
while (kieknuotrauku>0){
    random=Math.floor(Math.random()*kieknuotrauku);
    kieknuotrauku--;
    keisti=nuotraukos[kieknuotrauku].src;
    nuotraukos[kieknuotrauku].src=nuotraukos[random].src;
    nuotraukos[random].src=keisti;
}}