// TODO: (1) Get the actual grid parameters from the user
//       (2) Call 'makeGrid' function
function getGridSize(event) {
  event.preventDefault(); // Used to prevent page from refresh
  let gridHeight = document.getElementById('inputHeight').value;
  let gridWidth = document.getElementById('inputWidth').value;
  makeGrid(gridHeight, gridWidth);
}


// TODO: (1) Create & refresh grid
//       (2) Add EventListener to the gridBody object
function makeGrid(gridHeight, gridWidth) {
  const gridBody = document.getElementById('pixelCanvas');
  gridBody.innerHTML = ""; // refresh & clear the old grid
  for (let y = 0; y < gridHeight; y++) {
    const newTrElement = document.createElement('tr');
    gridBody.appendChild(newTrElement);
    for (let x = 0; x < gridWidth; x++) {
      const newTdElement = document.createElement('td');
      newTrElement.appendChild(newTdElement);
    }
  }
  document.body.appendChild(gridBody);
  gridBody.addEventListener('click', clickColor);
}


// TODO: (1) Get the actual HEX color code from colorPicker user interface
//       (2) Apply color to selected cell (check for <Td> element)
function clickColor(event) {
  let color = document.getElementById('colorPicker').value;
  if (event.target.nodeName === 'TD') {
    event.target.style.cssText = 'background-color: ' + color + ';'
  }
}


// Program initializer. Check 'click' event on the 'submit' button
document.getElementById('subButton').addEventListener('click', getGridSize);
