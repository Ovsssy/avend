document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelectorAll('.select');

  select.forEach(item => {
    // const selectDropdown = document.querySelector('.select_dropdown');
    item.addEventListener('click', function () {
      this.classList.toggle('select__open');
    })
  })

});