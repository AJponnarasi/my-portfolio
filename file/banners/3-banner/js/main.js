function animation() {
	setTimeout(function () {
		text1.classList.add('text1ani')
	}, 100);
	setTimeout(function () {
		text2.classList.add('text2ani')
	}, 500);
	setTimeout(function () {
		box1.classList.add('boxani')
	}, 1000);
	setTimeout(function () {
		img2.classList.add('img2ani')
	}, 2500);
	setTimeout(function () {
		img3.classList.add('img3ani')
	}, 3000);
	setTimeout(remove, 5000);
	// body...
}


function remove() {
	text2.classList.remove('text2ani')
	text1.classList.remove('text1ani')
	box1.classList.remove('boxani')
	img2.classList.remove('img2ani')
	img3.classList.remove('img3ani')
	animation();
}

var slide1 = document.getElementById('slide-1');
var text1 = document.getElementById('text-1');
var text2 = document.getElementById('text-2');
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var box1 = document.getElementById('box');


animation();