
var id1 = document.getElementById('header')
var navtext = document.getElementById('nav-text')
var navbar = document.getElementById('nav-bar')
var close = document.getElementById('close')
var score1 = document.getElementById('score-1');
var score2 = document.getElementById('score-2');
var score3 = document.getElementById('score-3');
var score4 = document.getElementById('score-4');
// var about = document.getElementById('about');
var loader=document.getElementById('preloader');


function pre_loader(){
setTimeout(function () {
		loader.classList.add('ctn-preloader')
	},);
setTimeout(function () {
		loader.classList.add('pre_loader-hide')
	},2000);
}
pre_loader();




//header scrolling

window.addEventListener('scroll',function(){
	if(window.scrollY>100){
		id1.classList.add('gradient');
	}
	else{
		id1.classList.remove('gradient');
	}
	})

	navbar.addEventListener('click',hidetoshow);
	close.addEventListener('click',showtohide);
	function hidetoshow(){
		navtext.classList.add('shows');
	}
	function showtohide(){
		navtext.classList.remove('shows');
	}

//counter

function fun(id,class_name){
	document.getElementById(id).classList.add(class_name);
}
function scrolling2(){
	if(window.pageYOffset>=(document.getElementById('counter').offsetTop-600)){
		data_count();		
		  clearInterval(dc);
}
}

var dc=setInterval(scrolling2,500);


function data_count(){
var count1=0;
inc_val1("count1",count1);
function inc_val1(ele,count1){
	if(count1<=30){
			document.getElementById("count1").innerHTML=count1;
	count1++;
	setTimeout(function(){
inc_val1("count1",count1);
},30)	
	}
}
var count2=0;
inc_val2("count2",count2);
function inc_val2(ele,count2){
	if(count2<=100){
			document.getElementById("count2").innerHTML=count2;
	count2++;
	setTimeout(function(){
inc_val2("count2",count2);
},20)	
	}
}
var count3=0;
inc_val3("count3",count3);
function inc_val3(ele,count3){
	if(count3<=15){
			document.getElementById("count3").innerHTML=count3;
	count3++;
	setTimeout(function(){
inc_val3("count3",count3);
},40)	
	}
}
var count4=0;
inc_val4("count4",count4);
function inc_val4(ele,count4){
	if(count4<=25){
			document.getElementById("count4").innerHTML=count4;
	count4++;
	setTimeout(function(){
inc_val4("count4",count4);
},30)	
	}
}
}


document.addEventListener('scroll', function(){
  animate(document.getElementById('fill-bar1'))
  animate(document.getElementById('fill-bar2'))
  animate(document.getElementById('fill-bar3'))
  animate(document.getElementById('fill-bar4'))
 });

// check if element is in view
function inView(element) {
  var elementHeight = element.clientHeight;
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;

  }
  return false;


}

// animate element when it is in view
function animate(element) {
  // is element in view?


  if (inView(element)) {

      // element is in view, add class to element
  	document.getElementById('fill-bar1').classList.add('fill-bar1');
  	document.getElementById('fill-bar2').classList.add('fill-bar2');
  	document.getElementById('fill-bar3').classList.add('fill-bar3');
  	document.getElementById('fill-bar4').classList.add('fill-bar1'); 
 
   }

}

//typewriter
var i = 0;
var txt = 'Front-end Developer';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("role").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter,400);
  }
}

 typeWriter(document.getElementById('role'))