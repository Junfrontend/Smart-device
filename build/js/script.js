let orderCallButton = document.querySelector(".contacts__order-call");
let modal = document.querySelector(".modal");
let modalFieldset = modal.querySelector("fieldset");

orderCallButton.addEventListener(("click"), function (e) {
    e.preventDefault();
    modal.classList.remove("modal--closed");
    modal.classList.add("modal--opened");
})

modal.addEventListener(("click"), function(evt) {
  console.log("Тык в модалку", evt.target);
  if (evt.target !== modalFieldset) {
    console.log("Тык в модалку pip", evt.target);
    modal.classList.add("modal--closed");
    modal.classList.remove("modal--opened");
  }
})

