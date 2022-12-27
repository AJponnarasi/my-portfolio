//functions

//playpause

function playvideo(){
	if(!video.paused)
	{
	document.getElementById("play").classList.remove("fa-pause");
	document.getElementById("play").classList.add("fa-play");
    video.pause();
	}
	else{
	video.play();
     document.getElementById("play").classList.remove("fa-play");
	document.getElementById("play").classList.add("fa-pause");
	}
}
//fullscreen

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (videoId.mozRequestFullScreen) { /* Firefox */
videoId.mozRequestFullScreen();
} else if (videoId.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
videoId.webkitRequestFullscreen();
} else if (videoId.msRequestFullscreen) { /* IE/Edge */
videoId.msRequestFullscreen();
}
}

//video seekbar

function seekupdate(){
var nt = video.currentTime * (100 / video.duration);
seekbar.value = nt;
var color='linear-gradient(90deg,rgb(47,173,230)'+(seekbar.value)+'%,rgb(255,255,255)'+(seekbar.value)+'%)';
seekbar.style.background=color;
var curmins = Math.floor(video.currentTime / 60);
var cursecs = Math.floor(video.currentTime - curmins * 60);
var durmins = Math.floor(video.duration / 60);
var dursecs = Math.floor(video.duration - durmins * 60);
if(cursecs < 10){ cursecs = "0"+cursecs; }
if(dursecs < 10){ dursecs = "0"+dursecs; }
if(curmins < 10){ curmins = "0"+curmins; }
if(durmins < 10){ durmins = "0"+durmins; }
curtime.innerHTML = curmins+":"+cursecs;
dur.innerHTML = durmins+":"+dursecs;
if(video.currentTime==video.duration)
{
seekbar.value=0;
video.currentTime=0;
playBtnId.classList.remove("fa-pause");
video.pause();
playBtnId.classList.add("fa-play");
}
}

function videoseek(){
var seekto=video.duration*(seekbar.value/100);
video.currentTime=seekto;

}

//Forward...

function forward() {
if(!(video.currentTime >= video.duration - 10)){	
video.currentTime += 10;
}
}
//backward...

function backward() {
if(!(video.currentTime <=10)){	
video.currentTime -= 10;
}
}


//volume seeker

function volseek(){
video.volume = vol.value / 100;
var color='linear-gradient(90deg,rgb(47,173,230)'+(vol.value)+'%,rgb(255,255,255)'+(vol.value)+'%)';
vol.style.background=color;
toogle_vol();
}

//toggle volume...
function toogle_vol(){
if(video.volume<=0)
{
volumeBtnId.classList.remove("fa-volume-up");
volumeBtnId.classList.add("fa-volume-off");
}
else if(video.volume>0){
volumeBtnId.classList.remove("fa-volume-off");
volumeBtnId.classList.add("fa-volume-up");
}
}

//replay
function videoRePlay() {
    video.pause();
    video.currentTime = 0;
    video.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
}


//variable declaration

var video=document.getElementById("video");
var playBtnId = document.getElementById('play');
var seekbar=document.getElementById('progress')
var status=document.getElementById("status");
var video_current_time=video.currentTime;
var current_time=document.getElementById("curtime");
var duration=document.getElementById("dur");
var forward_btn=document.getElementById("forward");
var backward_btn=document.getElementById("backward");
var vol=document.getElementById('vol_slider');
var volumeBtnId = document.getElementById('volume');
video.volume=0.5;
vol.value=50;
var color='linear-gradient(90deg,rgb(47,173,230)'+(vol.value)+'%,rgb(255,255,255)'+(vol.value)+'%)';
vol.style.background=color;

//add Event listeners

document.getElementById("play").addEventListener("click", playvideo);
document.getElementById("full_screen").addEventListener("click", openFullscreen);
seekbar.addEventListener("change",videoseek);
video.addEventListener('timeupdate',seekupdate);
vol.addEventListener("change",volseek);
backward_btn.addEventListener("click", backward);
forward_btn.addEventListener("click", forward);
document.getElementById("replay").addEventListener("click",videoRePlay);
