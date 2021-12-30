
const elements = document.getElementsByClassName('.add');
const modal = document.getElementById("modal");
const close = document.getElementById("close")

console.log(elements)

elements.forEach(element => {
   element.addEventListner('click', (e)=>{
       modal.classList.add("flex");
       console.log("damn")
   });
});
close.addEventListener('click', () => {
    modal.classList.remove("flex");
    modal.classList.add("none");
})