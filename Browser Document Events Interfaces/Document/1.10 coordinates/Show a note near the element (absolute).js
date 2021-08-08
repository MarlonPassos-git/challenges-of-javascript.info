const anchor = document.querySelector("div");
const elem = document.createElement("div");

elem.style.cssText = `
  border: 2px solid red;
  height: 30px;
  width: 30px;
  margin: 2px;
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

  let top, left;

  switch (position) {
    case "top":
      top = -1 * (elem.offsetHeight + elem.clientTop + anchor.clientTop);
      left = -1 * (elem.clientLeft + anchor.clientLeft); 
      break;
    case "botton":
      top = anchor.offsetHeight - anchor.clientTop - elem.clientTop;
      left = -1 * (elem.clientLeft + anchor.clientLeft);
      break;
    case "right":
      top = -1 * (elem.clientTop + anchor.clientTop);
      left = anchor.offsetWidth - anchor.clientLeft - elem.clientLeft;
      break;
  }

  elem.style.cssText += `
  top: ${top}px;
  left: ${left}px
`;
}

positionAt(anchor, "right", elem);
