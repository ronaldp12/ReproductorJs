import { playList } from "./playlist.js"

const audio =document.getElementById('audio')
const play =document.getElementById('play')
const pause =document.getElementById('pause')
const forward= document.getElementById('forward')
const rewind= document.getElementById('rewind')
const stop= document.getElementById('stop')
const skipPrevious= document.getElementById('skip-previous')
const skipNext= document.getElementById('skip-next')

play.addEventListener('click', () =>audio.play())

pause.addEventListener('click', () =>audio.pause())

rewind.addEventListener('click', () => audio.currentTime -=10)

forward.addEventListener('click', () => audio.currentTime +=10)

stop.addEventListener('click',() => {
    audio.pause()
    audio.currentTime= 0
})

skipNext.addEventListener('click', () => {
    for (let i = 0; i < playList.length; i++) {
        playList.play()
    }
})