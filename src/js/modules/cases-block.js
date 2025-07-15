document.addEventListener("DOMContentLoaded", function () {
    const casesItems = document.querySelectorAll(".cases_item");
    const showMoreBtn = document.querySelector(".cases_btn");
  
    if (casesItems && showMoreBtn) {
  
      if (casesItems.length > 3) {
        casesItems.forEach((item, index) => {
          if (index >= 3) item.style.display = "none";
        });
  
        showMoreBtn.style.display = "block";
  
        showMoreBtn.addEventListener("click", function () {
          casesItems.forEach(item => item.style.display = "block");
          showMoreBtn.style.display = "none";
        });
      } else {
        showMoreBtn.style.display = "none";
      }
    }
  });