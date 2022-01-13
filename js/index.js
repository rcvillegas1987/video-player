const $video=document.querySelector('#video');
const $play=document.querySelector('#play');
const $pause=document.querySelector('#pause');
const $backward=document.querySelector('#backward');
const $forward=document.querySelector('#forward');

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden=false;
    $video.muted=false
}
function handlePause(){
    
    $video.pause()
    $pause.hidden=true;
    $play.hidden=false;
}
function handleBackward(){
    $video.currentTime=$video.currentTime-10;
}

function handleForward(){
    $video.currentTime=$video.currentTime+10;

}
 

$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)
const $progress=document.querySelector('#progress')
function handleLoaded(){
    
   $progress.max=$video.duration
}
function handleTimeUpdate(){
   $progress.value=$video.currentTime
   
}
$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime=$progress.value
   
}