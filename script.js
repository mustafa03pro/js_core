let colors=["red","green","Blue","Brown","black","grey","orange","purple"]
let box = document.querySelectorAll(".box")
let size = colors.length

box.forEach(element => {
    let random=Math.floor(Math.random()*size)
    element.style.color=colors[random]
});
box.forEach(element => {
    let random=Math.floor(Math.random()*size)
    element.style.backgroundColor=colors[random]
});
