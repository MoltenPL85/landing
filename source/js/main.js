(function () {

  //Add event listener for open form button
  var openFormButton = document.querySelector('.arrow-down');
  var form = document.querySelector('.form');

  if (openFormButton) {
    openFormButton.addEventListener('click', function (e) {
      e.preventDefault();
      contacts.form.open();
    })
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (contacts.form.isValid()) {
        console.log('All good');
      } else {
        console.log('Is not valid');
      }

    })
  }
}());