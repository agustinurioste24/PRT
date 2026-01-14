
$(document).ready(()=>{ //run when document is loaded
  $(window).scroll(()=>{ //when the window is scrolled
    scrollAnimation(); //run the functions
    fader2();
    fader3();
    fader4();
    fader4();
    fader5();
    fader6();
    fader7();
    fader8();
    fader9();
    fader10();
    fader11();
    fader12();
    fader13();
    fader14();
    fader15();
    fader16();
    animateMap()
  })
})

// airpods image effect
function scrollAnimation() {
  const y = window.scrollY;
  const pic = Math.min(Math.floor(y/30) + 1, 6);
  $('#frame').attr('src', 'img/'+pic+'.jpg');
}

//start screen
function startSite(){
  document.getElementById("starter").style.display = "none";
  document.getElementById("muteButton").style.visibility = "visible";
  document.getElementById("menuToggle").style.visibility = "visible";
  document.getElementById("containerA").style.display = "block";
  document.getElementById("containerB").style.display = "block";
  document.body.style.overflowY = "scroll";
  var vid1 = document.getElementById("vid1");
  vid1.play();
  document.documentElement.requestFullscreen();
}

//mute button
var muteCheck = 0;
function muteVid(vid1) {
  var vid1 = document.getElementById("vid1");
  if (muteCheck == 0){
    vid1.muted = true;
    muteCheck = 1;
  }
  else {
    vid1.muted = false;
    muteCheck = 0;
  }
}

function scroll1(){
  var altura = $(window).height()*1.2;
  window.scrollBy(0, altura);
}
function scroll2(){
  var altura = $(window).height()*2.2;
  window.scrollBy(0, altura);
}
function scroll3(){
  var altura = $(window).height()*3.2;
  window.scrollBy(0, altura);
}
function scroll4(){
  var altura = $(window).height()*5.2;
  window.scrollBy(0, altura);
}


//text fade-in
 function fader2(){
    var altura = $(window).height()*0.8;
    const y = window.pageYOffset - altura;

    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10; 
    //(RETURN SMALLEST OF THE NUMBERS IN ENTIRE CALCULATION 
    //(ROUND DOWN CACLULATION 
    //(window height calculation / every 30 pixels scrolled
    //ADD 1
    //,UP TO 10 ITERATIONS OF THIS CODE)) 
    //DIVIDED BY 10 TO FIT OPACITY NUMBER FORMAT [0.1-1]

    //turn on section at the right time (to fix a glitch)
    if (calc1>0){
      $('.meatandpotatoes').css('visibility', "visible");
      $('#stationNames').css('visibility', "visible");
      $('#stationAnimation').css('visibility', "visible");
    }
    if (calc1<0){
      $('.meatandpotatoes').css('visibility', "hidden");
    }

    // Raise the opacity
    $('#part2').css('opacity', calc1);

    // Lower the opacity
    if (calc1 >= 1.5){
    $('#part2').css('opacity', 4-calc1);
    }

    //flip through images
    var calc2 = Math.min(Math.floor(y/80) -3, 6); //different scrolling intervals for image flipping (calc2) vs text opacity changing (calc1)
    if (calc2 >= 1){
    $('#frame2').attr('src', 'img/'+calc2+'.jpg');
    }
    else {
    $('#frame2').attr('src', 'img/1.jpg'); //display default image if number is negative
    }
}

function fader3(){
  var altura = $(window).height()*1.8;
  const y = window.pageYOffset - altura;
  
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;

    // Raise the opacity
    $('#part3').css('opacity', calc1);

    // Lower the opacity
    if (calc1 >= 1.5){
      $('#part3').css('opacity', 4-calc1);
    }

    //flip through images
    var calc2 = Math.min(Math.floor(y/80) -3, 6);
    if (calc2 >= 1){
    $('#frame3').attr('src', 'img/'+(calc2+6)+'.jpg');
    }
    else {
    $('#frame3').attr('src', 'img/7.jpg');
    }
}

function fader4(){
  var altura = $(window).height()*2.8;
  const y = window.pageYOffset - altura;

  var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
  // Raise the opacity
  $('#part4').css('opacity', calc1);

  // Lower the opacity
  if (calc1 >= 1.5){
    $('#part4').css('opacity', 4-calc1);
  }

  //pictures stuff
  var calc2 = Math.min(Math.floor(y/80) -3, 6); //different scrolling intervals and positions for images and text
  if (calc2 >= 1){
    $('#frame4').attr('src', 'img/'+(calc2+12)+'.jpg');
    }
    else {
    $('#frame4').attr('src', 'img/13.jpg'); //display default image if number is negative
    }
}
//preload map
// Configuration
const totalFrames = 704;
const preloadedImages = [];

// Preload function
function preloadImages() {
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = 'img/svg/' + i + '.png';
    preloadedImages[i] = img; // Cache the image object in an array
  }
  console.log("Preloading of " + totalFrames + " images started...");
}

$(document).ready(function() {
  preloadImages();
});

//map section animation image flip
function animateMap() {
  var altura = $(window).height() * 3.8;
  const y = window.pageYOffset - altura;
  
  // Calculate the frame index
  var calc2 = Math.min(Math.floor(y / 10) - 115, totalFrames); 
  
  // Determine final source
  var targetSrc = (calc2 >= 1) ? 'img/svg/' + calc2 + '.png' : 'img/svg/1.png';

  // Update the image src attribute
  $('#mapSequence').attr('src', targetSrc);
}

function fader5(){
  var altura = $(window).height()*13;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    // Change the opacity
    $('#part5').css('opacity', calc1);
    // Lower the opacity
    if (calc1 >= 1.5){
      $('#part5').css('opacity', 4-calc1);
      }
}

function fader6(){
  var altura = $(window).height()*14;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    // Change the opacity
    $('#part6').css('opacity', calc1);
   // Lower the opacity
   if (calc1 >= 1.5){
     $('#part6').css('opacity', 4-calc1);
     }
}

function fader7(){
  var altura = $(window).height()*15;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    // Change the opacity
    $('#part7').css('opacity', calc1);
   // Lower the opacity
   if (calc1 >= 1.5){
     $('#part7').css('opacity', 4-calc1);
     }
}

function fader8(){
  var altura = $(window).height()*16;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    // Change the opacity
    $('#part8').css('opacity', calc1);
    // Lower the opacity
    if (calc1 >= 1.5){
      $('#part8').css('opacity', 4-calc1);
      }
}

var x;
function fader9(){
  var altura = $(window).height()*17;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    // Change the opacity
    $('#part9').css('opacity', calc1);
    if(calc1 == 1){
      var x = 1;
    }
    // Lower the opacity
    if (calc1 >= 1.5){
      $('#part9').css('opacity', 4-calc1);
      }
}

function fader10(){
  var altura = $(window).height()*18;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 10))/10;
    // Change the opacity
    $('#part10').css('opacity', calc1);
}

function fader11(){
  var altura = $(window).height()*19;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 10))/10;

    var calc2 = (Math.min(Math.floor(y/30-30) + 1, 10))/10;
    // Change the opacity
    $('#part11').css('opacity', calc1);
    $('#stationNames').css('opacity', calc1);
    $('#stationAnimation').css('opacity', calc2);

   $('#randomwords1').css('opacity', calc2);

   var calc3 = (Math.min(Math.floor(y/50) + 1, 117));
   var path = document.querySelector('#line-path');
   var pathLength = path.getTotalLength();
   console.log("pathlength: "+pathLength);
   console.log("calc3: "+calc3);
   $('#line-path').css('strokeDasharray', pathLength + ' ' + pathLength);
   $('#line-path').css('strokeDashoffset', pathLength-(calc3*7));
}

function fader12(){
  var altura = $(window).height()*20;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 10))/10;
    var calc2 = (Math.min(Math.floor(y/30-30) + 1, 10))/10;
    // Change the opacity
    $('#part12').css('opacity', calc1);
    $('#randomwords2').css('opacity', calc2);
}

function fader13(){
  var altura = $(window).height()*21;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 10))/10;
    var calc2 = (Math.min(Math.floor(y/30-40) + 1, 10))/10;
    // Change the opacity
    $('#part13').css('opacity', calc1);
    $('#randomwords3').css('opacity', calc2);
}

function fader14(){
  var altura = $(window).height()*22;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 10))/10;
    var calc2 = (Math.min(Math.floor(y/30-40) + 1, 10))/10;
    // Change the opacity
    $('#part14').css('opacity', calc1);
    $('#randomwords4').css('opacity', calc2);
}

function fader15(){
  var altura = $(window).height()*23;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    var calc2 = (Math.min(Math.floor(y/30-40) + 1, 40))/10;
    // Change the opacity
    $('#part15').css('opacity', calc1);
    $('#randomwords5').css('opacity', calc2);
    // Lower the opacity after a while so that the sticky MESSAGE doesn't cover the summary
    if (calc2 >= 1.5){
     $('#stations').css('opacity', 4-(calc2));
    }
}

function fader16(){
  var altura = $(window).height()*25.5;
  const y = window.pageYOffset - altura;
    var calc1 = (Math.min(Math.floor(y/30) + 1, 40))/10;
    // Change the opacity
    $('#part16').css('opacity', calc1);
    // Lower the opacity
    if (calc1 >= 1.5){
      $('#part16').css('opacity', 4-calc1);
    }
}
 

