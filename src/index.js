let addToy = false;
//Below is the code that I added
function fetchToys(){
  return fetch('')
  .then((resp) => resp.json())
  .then((json) => renderToy(json));
}

doucment.addEventListener("DOMContentLoaded", () =>{
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    renderyou(e.target.newToyLike)
  })
}
function renderToy(toy){
  const newToy = document.querySelector("toy-collection");
  toy.forEach(toy =>{
    const h2 = document.createElement("h2");
    h2.innerHTML = toy.name;
    newToy.appendChild(h2);
  })
}

function renderToyCard()

//above is the code that I added
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  //added preventDefault so the page would not reload 
  //on the create toy button
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


