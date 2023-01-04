var pressKey = document.querySelector("input");
var form = document.querySelector("form");
var ul = document.querySelector(".todo-list")

form.addEventListener("submit",function(e){
  e.preventDefault();
  addlist();
  form.reset();
})


function addlist() {
  let li = document.createElement("li");
  li.classList.add("list");
  li.innerText = pressKey.value;
  ul.append(li);
  
  li.addEventListener("click",function(){
    li.classList.toggle("strike");
  }) 
  
  li.addEventListener("contextmenu",function(e){
    e.preventDefault()
    li.remove();
  })
}

