let orderCallButton = document.querySelector(".contacts__order-call");
let modal = document.querySelector(".modal");
let form = modal.querySelector("form");
let modalCloseButton = document.getElementById("close-button");

//Открытие и закрытие модального окна
orderCallButton.addEventListener(("click"), function (e) {
  e.preventDefault();
  modal.classList.remove("modal--closed");
  modal.classList.add("modal--opened");
})

modal.addEventListener(("click"), function (evt) {
  if (evt.target === modal && evt.target !== form) {
    modal.classList.add("modal--closed");
    modal.classList.remove("modal--opened");
  }
});

modalCloseButton.addEventListener(("click"), function (evt) {
  modal.classList.add("modal--closed");
  modal.classList.remove("modal--opened");
});

document.addEventListener(("keydown"), function (evt) {
  if (evt.key === "Escape") {
    modal.classList.add("modal--closed");
    modal.classList.remove("modal--opened");
  }
});

//Плавная прокрутка к якорю
let anchors = document.querySelectorAll('a');
if (anchors) {
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
      e.preventDefault();
      var id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

//Состояние чекбокса форма на странице
let formPersonalDataCheckbox = document.querySelector(".form__checkbox");
formPersonalDataCheckbox.addEventListener(("click"), function (evt) {
  evt.target.parentNode.classList.toggle("form__checkbox--checked");
})

//Состояние чекбокса модальное окно
let modalPersonalDataCheckbox = document.querySelector(".modal__checkbox");
modalPersonalDataCheckbox.addEventListener(("click"), function (evt) {
  evt.target.parentNode.classList.toggle("modal__checkbox--checked");
})

//Форма на странице
let nameInputForm = document.getElementById("formName");
let phoneInputForm = document.getElementById("formPhone");
let questionInputForm = document.getElementById("formQuestion");
let sendFormButtom = document.getElementById("sendForm");

if (nameInputForm && phoneInputForm && questionInputForm && sendFormButtom) {
  nameInputForm.addEventListener('input', function () {
    if (nameInputForm.validity.patternMismatch) {
      nameInputForm.setCustomValidity('Введите имя русскими буквами с большой буквы)');
    } else {
      nameInputForm.setCustomValidity('');
    }
  });

  phoneInputForm.addEventListener('input', function () {
    if (phoneInputForm.validity.patternMismatch) {
      phoneInputForm.setCustomValidity('Введите телефон в формате +7 ХХХ ХХХ ХХ ХХ');
    } else {
      phoneInputForm.setCustomValidity('');
    }
  });

  sendFormButtom.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem(nameInputForm.name, nameInputForm.value);
    localStorage.setItem(phoneInputForm.name, phoneInputForm.value);
    localStorage.setItem(questionInputForm.name, questionInputForm.value);
    console.log(localStorage)
  });
}

//Модальное окно
let nameInputModal = document.getElementById("modalName");
let phoneInputModal = document.getElementById("modalPhone");
let questionInputModal = document.getElementById("modalQuestion");
let sendModalButtom = document.getElementById("sendModal");

if (nameInputModal && phoneInputModal && questionInputModal && sendModalButtom) {
  nameInputModal.addEventListener('input', function () {
    if (nameInputModal.validity.patternMismatch) {
      nameInputModal.setCustomValidity('Введите имя русскими буквами с большой буквы)');
    } else {
      nameInputModal.setCustomValidity('');
    }
  });

  phoneInputModal.addEventListener('input', function () {
    if (phoneInputModal.validity.patternMismatch) {
      phoneInputModal.setCustomValidity('Введите телефон в формате +7 ХХХ ХХХ ХХ ХХ');
    } else {
      phoneInputModal.setCustomValidity('');
    }
  });

  sendModalButtom.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem(nameInputModal.name, nameInputModal.value);
    localStorage.setItem(phoneInputModal.name, phoneInputModal.value);
    localStorage.setItem(questionInputModal.name, questionInputModal.value);
    console.log(localStorage)
  });
}


//Аккардеон

let footerNav = document.querySelector(".main-info__nav");
let footerContacts = document.querySelector(".main-info__contacts");

let showOrHide = function (evt) {
  if (footerNav.classList.contains("main-info__nav--closed") && footerContacts.classList.contains("main-info__contacts--closed")) {
    if (evt.target === footerNav) {
      footerNav.classList.remove("main-info__nav--closed")
    } else {
      footerContacts.classList.remove("main-info__contacts--closed")
    }
  } else {
    footerNav.classList.toggle("main-info__nav--closed");
    footerContacts.classList.toggle("main-info__contacts--closed");
  }
}

footerNav.addEventListener(("click"), function (e) {
  showOrHide(e);
});
footerContacts.addEventListener(("click"), function (e) {
  showOrHide(e);
})
