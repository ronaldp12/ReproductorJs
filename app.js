import { playList } from "./playlist.js"

let currentSong=0

const audio =document.getElementById('audio')
const play =document.getElementById('play')
const pause =document.getElementById('pause')
const forward= document.getElementById('forward')
const rewind= document.getElementById('rewind')
const stop= document.getElementById('stop')
const skipPrevious= document.getElementById('skip-previous')
const skipNext= document.getElementById('skip-next')
const imgArtist= document.getElementById('imgArtist')
const nameArtist= document.getElementById('nameArtist')
const nameSong= document.getElementById('nameSong')


play.addEventListener('click', () =>audio.play())

pause.addEventListener('click', () =>audio.pause())

rewind.addEventListener('click', () => audio.currentTime -=10)

forward.addEventListener('click', () => audio.currentTime +=10)

stop.addEventListener('click',() => {
    audio.pause()
    audio.currentTime= 0
})

function loadSong(songIndex) {
    const song = playList[songIndex];
    audio.src = song.song;
    nameSong.textContent = song.title;
    nameArtist.textContent = song.artist;
    imgArtist.src = song.img;
    audio.play(); 
}


skipNext.addEventListener('click', () => {
    currentSong = (currentSong + 1) % playList.length;
    loadSong(currentSong);
});


skipPrevious.addEventListener('click', () => {
    currentSong = (currentSong - 1 + playList.length) % playList.length;
    loadSong(currentSong);
});


loadSong(currentSong);