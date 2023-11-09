const list = document.querySelectorAll(".list");
function activeLink(){
  list.forEach((lists)=>{
     lists.classList.remove("active");
   })
  this.classList.add("active");
}
list.forEach((items)=>{
items.addEventListener('click', activeLink);
});


