const open =  document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

const playlistName = document.getElementById('playlistName')
const playlisyList = document.getElementById("playlist_list")

const openModal = function () {
  open.addEventListener("click", () => {
    modal_container.classList.add("show")
  })
  
  close.addEventListener("click", () => {
    modal_container.classList.remove("show")
  })
}


const addPlaylist = function() {
  liNode = document.createElement("li")
  liNode.classList.add("nav-item")
  liNode.appendChild(document.createTextNode(playlistName.value))
  playlisyList.appendChild(liNode)

  const innerLinkNode = document.createElement("a")
  innerLinkNode.classList.add("nav-link")
  innerLinkNode.setAttribute("href", "#")
  liNode.appendChild(innerLinkNode)
  
  innerLinkNode
}