let element = document.querySelector('#field')

// 1 Upper-left

let elementCoordinates = element.getBoundingClientRect()

console.log(
    `x:${elementCoordinates.x}, 
     y:${elementCoordinates.y}`
)

// 2 Bottom-left

console.log(
    `x:${elementCoordinates.right}, 
     y:${elementCoordinates.bottom}`
)

// 3 Upper-left

console.log(
    `x:${elementCoordinates.x + element.clientLeft}, 
     y:${elementCoordinates.y + element.clientLeft}`
)

// 4 Bottom-right

console.log(
    `x:${elementCoordinates.x + element.clientLeft + element.clientWidth}, 
     y:${elementCoordinates.y + element.clientLeft + element.clientHeight}`
)

