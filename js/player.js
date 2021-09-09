


//set function that play audio on clikc 

//set function that change the player with the audio

//progress bar


//Pause <i class="bi bi-pause-fill"></i>


function pausePlay () {
  let playButton = document.getElementById('middle-icon')
  let pauseButton= document.createElement('i')
  pauseButton.classList.add('bi', 'bi-pause-fill')
  
  playButton.parentNode.replaceChild(pauseButton, playButton)
  
}