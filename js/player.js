


//set function that play audio on clikc 

//set function that change the player with the audio

//progress bar


//Pause <i class="bi bi-pause-fill"></i>


function pausePlay () {
  let playButton = document.getElementById('middle-icon')
  let pauseButton= document.createElement('i')
  pauseButton.classList.add('bi', 'bi-pause-fill')

  let parentArray = document.getElementsByClassName('top-part-song-nav')[0]


  let newB = document.createElement('i')
  newB.classList.add('bi-play-fill', 'bi')
  newB.setAttribute('id', 'middle-icon')
  let btnSelector = document.getElementsByClassName('bi-pause-fill')[0]


  if (parentArray.children[2]!==playButton){
    
    parentArray.replaceChild(newB, btnSelector)


  }else if(parentArray.children[2].classList==='bi-play-fill'){
    console.log('try')
  }
  else{
    playButton.parentNode.replaceChild(pauseButton, playButton)

  }
}

function playOnClick(){
    let nodeAlbum = document.getElementsByClassName('card')[0]
    //nodeAlbum.addEventListener('click', function(e) { console.log('this');})
    //add play audio function from john
}


function changeNavbar(){


  let nodeAlbum = document.getElementById('album').children[0]


  let nodeAlbumNavbar = document.getElementsByClassName('left-song-nav')[0].children[0]
  let parentAlbum = document.getElementById('album').parentElement
 

  parentAlbum.addEventListener('click', change )

  function change(){
    nodeAlbumNavbar.src= nodeAlbum.src
    console.log(parentAlbum)
    document.getElementById('navTitle').innerHTML=document.getElementById('title').innerHTML
  }
  
  
}


function volume(event){
  let audio = document.getElementById('audio')
  let volume = event.target.value /100;
  console.log(volume)
  audio.volume = volume;



  
}

//skip functon


//extra progress bar

window.onload = function(){
  playOnClick()
  changeNavbar()

}