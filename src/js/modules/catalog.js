document.addEventListener("DOMContentLoaded", function () {
  let titleFilter = document.querySelector('.title-filter');
  let filterMob = document.querySelector('.filter-mob-wrapp');

  if (titleFilter) {
    titleFilter.addEventListener('click', function () {
      titleFilter.classList.toggle('title-filter__active');
      filterMob.classList.toggle('filter-mob-wrapp__active');
    })
  }
})