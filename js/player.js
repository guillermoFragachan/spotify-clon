const setPlayerSong = (song) => {
  audio.src = song.preview;
  playIcon.src = "playerbutton.png";
  setPlayerInfos(song);
  window.localStorage.setItem("songId", song.id);
  audio.play();
}


//set function that play audio on clikc 

//set function that change the player with the audio

//progress bar


