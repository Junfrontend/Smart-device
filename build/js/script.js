let orderCallButton = document.querySelector(".contacts__order-call");
let modal = document.querySelector(".modal");
let form = modal.querySelector("form");
let modalCloseButton = document.getElementById("close-button");

console.log(modalCloseButton);

orderCallButton.addEventListener(("click"), function (e) {
    e.preventDefault();
    modal.classList.remove("modal--closed");
    modal.classList.add("modal--opened");
})

modal.addEventListener(("click"), function(evt) {
  console.log("Тык в модалку", evt.target);
  if (evt.target !== modalFieldset) {
    modal.classList.add("modal--closed");
    modal.classList.remove("modal--opened");
  }
})
