(function () {
  var me = {};
  var form = document.querySelector('.form-container');
  var closeButton = null;

  function onClose() {
    me.close();
    closeButton.removeEventListener('click', onClose);
  }

  function closeOnEsc(e) {
    if (e.keyCode === 27) {
      me.close();
      window.removeEventListener('keyup', closeOnEsc);
    }
  }

  me.open = function () {
    form.classList.remove('is-hidden');

    closeButton = document.querySelector('.form__close-button');
    closeButton.addEventListener('click', onClose);
    window.addEventListener('keyup', closeOnEsc);
  };

  me.close = function () {
    form.classList.add('is-hidden');
  };

  me.isValid = function () {
    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    var emailValue = document.querySelector('[data-email]').value;
    var numberValue = document.querySelector('[data-number]').value;

    if (!me.isAllCompleted(requiredFields)) {
      console.log('Заполните, пожалуйста все необходимые поля');
      return false;
    } else if (!MAX.validation.isEmail(emailValue)) {
      console.log('Введите корректный Email');
      return false;
    } else if (!MAX.validation.isNumber(numberValue)) {
      console.log('Неверный номер');
      return false;
    }

    return true;
  };

  me.isAllCompleted = function (data) {
    var result = true;

    for (var i = 0; i < data.length; i++) {
      if (!MAX.validation.isNotEmpty(data[i].value)) {
        result = false;
        break;
      }
    }

    return result;
  };

  MAX.form = me;
}());