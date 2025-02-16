let list = document.querySelector("ol");
list.addEventListener("click",function (event){
    let red = Math.ceil(Math.random()*255);
    let green = Math.ceil(Math.random()*255);
    let blue = Math.ceil(Math.random()*255);
    event.target.style.color=`rgb(${red},${green},${blue})`;
})