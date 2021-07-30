'use strict';
var orderCallButton = document.querySelector('.header__order-call');
var modal = document.querySelector('.modal');
var form = modal.querySelector('form');
var modalCloseButton = document.getElementById('close-button');
var footerNav = document.querySelector('.main-info__nav');
var footerNavHeader = footerNav.querySelector('h3');
var footerContacts = document.querySelector('.main-info__contacts');
var footerContactsHeader = footerContacts.querySelector('h3');
var modalName = document.getElementById('modalName');
var footer = document.querySelector('.footer');
var body = document.querySelector('body');

var maskPhone = {
  0: '+',
  2: '(',
  6: ')',
  10: '-',
  13: '-'
};

var phoneRegExp = /[A-Za-zА-Яа-яЁё.!<>%$?:''*,~|_№;=]/;

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
  body.classList.add('body--overflow-hidden');
});

window.addEventListener(('keydown'), function (e) {
  if (e.key === 'Tab' && modal.classList.contains('modal--opened')) {
    if (e.target.getAttribute('tabindex') > 5) {
      e.preventDefault();
      modalName.focus();
    }
  }
});

function closeModal() {
  modal.classList.add('modal--closed');
  modal.classList.remove('modal--opened');
  body.classList.remove('body--overflow-hidden');
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

// Форма на странице
var nameInputForm = document.getElementById('formName');
var phoneInputForm = document.getElementById('formPhone');
var questionInputForm = document.getElementById('formQuestion');
var sendFormButtom = document.getElementById('sendForm');
var checkboxForm = document.getElementById('formCheckbox');

if (nameInputForm && phoneInputForm && questionInputForm && sendFormButtom) {
  nameInputForm.addEventListener('input', function () {
    if (nameInputForm.validity.patternMismatch) {
      nameInputForm.setCustomValidity('Введите имя русскими буквами с большой буквы)');
    } else {
      nameInputForm.setCustomValidity('');
    }
  });

  if (!checkboxForm.checked) {
    checkboxForm.setCustomValidity('Поставьте пожалуйста галочку');
  } else {
    checkboxForm.setCustomValidity('');
  }

  sendFormButtom.addEventListener('click', function () {
    checkboxForm.setCustomValidity('');
    localStorage.setItem(nameInputForm.name, nameInputForm.value);
    localStorage.setItem(phoneInputForm.name, phoneInputForm.value);
    localStorage.setItem(questionInputForm.name, questionInputForm.value);
  });
}

// Модальное окно
var nameInputModal = document.getElementById('modalName');
var phoneInputModal = document.getElementById('modalPhone');
var questionInputModal = document.getElementById('modalQuestion');
var sendModalButtom = document.getElementById('sendModal');
var checkboxModal = document.getElementById('modalCheckbox');

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

  if (!checkboxModal.checked) {
    checkboxModal.setCustomValidity('Поставьте пожалуйста галочку');
  } else {
    checkboxModal.setCustomValidity('');
  }

  sendModalButtom.addEventListener('click', function () {
    checkboxModal.setCustomValidity('');
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

var footerOnBottom = function () {
  if (window.innerHeight >= 4066 && window.innerWidth >= 1024) {
    footer.classList.add('footer--bottom-desktop');
  }
  if (window.innerHeight <= 4066 && window.innerWidth >= 1024 && footer.classList.contains('footer--bottom-desktop')) {
    footer.classList.remove('footer--bottom-desktop');
  }

  if (window.innerHeight >= 4047 && window.innerWidth >= 768 && window.innerWidth <= 1024) {
    footer.classList.add('footer--bottom');
  }
  if (window.innerHeight <= 4047 && window.innerWidth >= 768 && window.innerWidth <= 1024 && footer.classList.contains('footer--bottom')) {
    footer.classList.remove('footer--bottom');
  }

  if (window.innerHeight >= 4830 && window.innerWidth >= 320 && window.innerWidth <= 767) {
    footer.classList.add('footer--bottom');
  }
  if (window.innerHeight <= 4830 && window.innerWidth >= 320 && window.innerWidth <= 767 && footer.classList.contains('footer--bottom')) {
    footer.classList.remove('footer--bottom');
  }
};
window.addEventListener('resize', function () {
  footerOnBottom();
});
