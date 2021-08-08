const anchor = document.querySelector("div");
const elem = document.createElement("div");

elem.style.cssText = `
  border: 2px solid red;
  height: 30px;
  width: 30px;
  margin: 0px;
  color: blue;
  display: grid;
  place-content: center;
  transform: rotate(90deg);
  font-size: 30px;
  border-radius: 50%;
  position: absolute;
`;
elem.innerHTML = ":)";

function positionAt(anchor, position, elem) {
  anchor.append(elem);

  let top, left, right, bottom;
  
  console.log()

  switch (position.toLowerCase())  {
    case "top":
      top = -1 * (elem.offsetHeight  + anchor.clientTop);
      left = -1 * ( anchor.clientLeft); 
      break;
    case "bottom":
      top = anchor.offsetHeight - anchor.clientTop ;
      left = -1 * ( anchor.clientLeft);
      break;
    case "right":
      top = -1 * (anchor.clientTop);
      right = -1 * (anchor.clientLeft + elem.offsetWidth);
      break;
    case "top-in":
      top =  0
      left = 0
      break;
    case "right-in":
      top =  0
      right = 0
      break;
    case 'bottom-in':
      bottom = 0;
      left = 0;
      break
  }

  elem.style.cssText += `
  top: ${top}px;
  left: ${left}px;
  right: ${right}px;
  bottom: ${bottom}px;
`;
}

positionAt(anchor, "bottom", elem);