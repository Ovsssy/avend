function updateCardIcons() {
  document.querySelectorAll(".card").forEach(card => {
    const iconType = card.getAttribute("data-icon");

    const discountIcon = card.querySelector(".card_icon__discount");
    const newIcon = card.querySelector(".card_icon__new");
    const saleIcon = card.querySelector(".card_icon__sale");

    // Сначала скрываем все
    if (discountIcon) discountIcon.style.display = "none";
    if (newIcon) newIcon.style.display = "none";
    if (saleIcon) saleIcon.style.display = "none";

    // Показываем нужные
    if (!iconType) return;
    const types = iconType.split(' ');

    types.forEach(type => {
      if (type === 'discount' && discountIcon) discountIcon.style.display = "flex";
      if (type === 'new' && newIcon) newIcon.style.display = "flex";
      if (type === 'sale' && saleIcon) saleIcon.style.display = "flex";
    });
  });
}

document.addEventListener("DOMContentLoaded", updateCardIcons);
document.addEventListener("facetwp-loaded", updateCardIcons);
