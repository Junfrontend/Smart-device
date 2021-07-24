'use strict';
var orderCallButton = document.querySelector('.contacts__order-call');
var modal = document.querySelector('.modal');
var form = modal.querySelector('form');
var modalCloseButton = document.getElementById('close-button');
var footerNav = document.querySelector('.main-info__nav');
var footerNavHeader = footerNav.querySelector('h3');
var footerContacts = document.querySelector('.main-info__contacts');
var footerContactsHeader = footerContacts.querySelector('h3');
var modalName = document.getElementById('modalName');

var maskPhone = {
  0: '+',
  2: '(',
  6: ')',
  10: '-',
  13: '-'
};

var phoneRegExp = /[A-Za-zА-Яа-яЁё.!<>%$?:"'*,~|_№;=]/;

if (footerNav && footerContacts) {
  footerNav.classList.remove('main-info__nav--no-js');
  footerContacts.classList.remove('main-info__contacts--no-js');
  footerNav.classList.add('main-info__nav--closed');
  footerContacts.classList.add('main-info__contacts--closed');
}

// Открытие и закрытие модального окна
orderCallButton.addEventListener(('click'), function (e) {
  e.preventDefault();
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--opened');
  modalName.focus();
});

function closeModal() {
  modal.classList.add('modal--closed');
  modal.classList.remove('modal--opened');
}

modal.addEventListener(('click'), function (evt) {
  if (evt.target === modal && evt.target !== form) {
    closeModal();
  }
});

modalCloseButton.addEventListener(('click'), function () {
  closeModal();
});

document.addEventListener(('keydown'), function (evt) {
  if (evt.key === 'Escape') {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
});

// Плавная прокрутка к якорю
var anchors = document.querySelectorAll('a');
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

// Состояние чекбокса форма на странице
var formPersonalDataCheckbox = document.querySelector('.form__checkbox');
formPersonalDataCheckbox.addEventListener(('click'), function (evt) {
  evt.target.parentNode.classList.toggle('form__checkbox--checked');
});

// Состояние чекбокса модальное окно
var modalPersonalDataCheckbox = document.querySelector('.modal__checkbox');
modalPersonalDataCheckbox.addEventListener(('click'), function (evt) {
  evt.target.parentNode.classList.toggle('modal__checkbox--checked');
});

// Форма на странице
var nameInputForm = document.getElementById('formName');
var phoneInputForm = document.getElementById('formPhone');
var questionInputForm = document.getElementById('formQuestion');
var sendFormButtom = document.getElementById('sendForm');

if (nameInputForm && phoneInputForm && questionInputForm && sendFormButtom) {
  nameInputForm.addEventListener('input', function () {
    if (nameInputForm.validity.patternMismatch) {
      nameInputForm.setCustomValidity('Введите имя русскими буквами с большой буквы)');
    } else {
      nameInputForm.setCustomValidity('');
    }
  });

  sendFormButtom.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem(nameInputForm.name, nameInputForm.value);
    localStorage.setItem(phoneInputForm.name, phoneInputForm.value);
    localStorage.setItem(questionInputForm.name, questionInputForm.value);
    closeModal();
    form.classList.add('modal__form--sent');
  });
}

// Модальное окно
var nameInputModal = document.getElementById('modalName');
var phoneInputModal = document.getElementById('modalPhone');
var questionInputModal = document.getElementById('modalQuestion');
var sendModalButtom = document.getElementById('sendModal');

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

  sendModalButtom.addEventListener('click', function () {
    localStorage.setItem(nameInputModal.name, nameInputModal.value);
    localStorage.setItem(phoneInputModal.name, phoneInputModal.value);
    localStorage.setItem(questionInputModal.name, questionInputModal.value);
  });
}


// Аккардеон

var showOrHide = function (evt) {
  if (evt.target === footerNav || evt.target === footerNavHeader) {
    if (!footerContacts.classList.contains('main-info__contacts--closed')) {
      footerNav.classList.toggle('main-info__nav--closed');
      footerContacts.classList.add('main-info__contacts--closed');
    } else {
      footerNav.classList.toggle('main-info__nav--closed');
    }
  }
  if (evt.target === footerContacts || evt.target === footerContactsHeader) {
    if (!footerNav.classList.contains('main-info__nav--closed')) {
      footerNav.classList.add('main-info__nav--closed');
      footerContacts.classList.toggle('main-info__contacts--closed');
    } else {
      footerContacts.classList.toggle('main-info__contacts--closed');
    }
  }
};

footerNav.addEventListener(('click'), function (e) {
  showOrHide(e);
});
footerContacts.addEventListener(('click'), function (e) {
  showOrHide(e);
});

var validateFieldPhone = function (evt) {
  evt.target.value = evt.target.value.replace(phoneRegExp, '');
  evt.target.maxLength = 16;
  if (evt.target.value.length === 0) {
    evt.target.value = '+';
  }
  if (maskPhone[evt.target.value.length] && evt.data !== null) {
    evt.target.value = evt.target.value + maskPhone[evt.target.value.length];
  }
};

phoneInputModal.addEventListener(('input'), validateFieldPhone);
phoneInputForm.addEventListener(('input'), validateFieldPhone);

phoneInputModal.addEventListener('focus', function (evt) {
  evt.target.value = '+7(';
});

phoneInputForm.addEventListener('focus', function (evt) {
  evt.target.value = '+7(';
});
