////////////////////////////////////////////////////////////////
// Create Grid
////////////////////////////////////////////////////////////////
const playerWindow = document.querySelector(".player-window");
editResolution(256);
////////////////////////////////////////////////////////////////
// Assign Class to Box on mouseover
////////////////////////////////////////////////////////////////
function colorInEnable() {    
    document.querySelectorAll(".little-boxes").forEach(item => {
      item.addEventListener("mouseover", event => {
        item.classList.add("mouse-over");
        console.log("<= number count");
      })
    });
}
////////////////////////////////////////////////////////////////
// Listen for button click and execute functions
////////////////////////////////////////////////////////////////
const five = document.querySelector("#five-by-five");
const sixteen = document.querySelector("#sixteen-by-sixteen");
const twentyFive = document.querySelector("#twenty-five-by-twenty-five");
const fifty = document.querySelector("#fifty-by-fifty");

five.addEventListener("click", (event) => {
  removeAllChildNodes(playerWindow);
  editResolution(25);
  playerWindow.style.width = "820px";
  document.querySelectorAll(".little-boxes").forEach((item) => {
    item.classList.add("five-by-five-style");
  });
});

sixteen.addEventListener("click", (event) => {
  removeAllChildNodes(playerWindow);
  editResolution(256);
  playerWindow.style.width = "785px";
  document.querySelectorAll(".little-boxes").forEach((item) => {
    item.classList.add("sixteen-by-sixteen-style");
  });
});

twentyFive.addEventListener("click", (event) => {
  removeAllChildNodes(playerWindow);
  editResolution(625);
  playerWindow.style.width = "850px";
  document.querySelectorAll(".little-boxes").forEach((item) => {
    item.classList.add("twenty-five-by-twenty-five-style");
  });
});

fifty.addEventListener("click", (event) => {
  removeAllChildNodes(playerWindow);
  editResolution(2500);
  playerWindow.style.width = "850px";
  document.querySelectorAll(".little-boxes").forEach((item) => {
    item.classList.add("fifty-by-fifty-style");
  });
});
////////////////////////////////////////////////////////////////
// Change resolution
////////////////////////////////////////////////////////////////
function editResolution(resolution) {
  removeAllChildNodes(playerWindow);
  for (i = 0; i < resolution; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("little-boxes");
    playerWindow.appendChild(newDiv);
  };
  colorInEnable();
};
////////////////////////////////////////////////////////////////
// Remove grid
////////////////////////////////////////////////////////////////
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};