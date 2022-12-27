function animation() {
	setTimeout(function () {
		bg1.classList.add('bgimg')
	}, 1000);
	setTimeout(function () {
		text1.classList.add('text2-ani')
	}, 800);
	setTimeout(function () {
		text2.classList.add('text1-ani')
	}, 1000);
	setTimeout(function () {
		left.classList.add('leftside-ani')
	}, 6000);
	setTimeout(function () {
		center1.classList.add('centerani')
	}, 6000);
	setTimeout(function () {
		right1.classList.add('centerani')
	}, 6000);
	setTimeout(function () {
		box1.classList.add('box-ani')
	}, 6000);
	setTimeout(function () {
		right1.classList.add('rightani')
	}, 9700);
	setTimeout(remove, 10000);
}

function remove() {

	slide1.classList.remove('slide-1ani')
	text1.classList.remove('text2-ani')
	text2.classList.remove('text1-ani')
	left.classList.remove('leftside-ani')
	box1.classList.remove('box-ani')
	right1.classList.remove('centerani')
	bg1.classList.remove('bgimg')
	center1.classList.remove('centerani')
	right1.classList.remove('rightani')
	animation();
}

var slide1 = document.getElementById('slide-1');
var bg1 = document.getElementById('bg-1')
var text1 = document.getElementById('text-1');
var text2 = document.getElementById('text-2');
console.log(text2);
var bg2 = document.getElementById('bg-2')
var slide2 = document.getElementById('slide-2');
var left = document.getElementById('leftside');
var center1 = document.getElementById('center');
var right1 = document.getElementById('right');
var box1 = document.getElementById('box');


animation();