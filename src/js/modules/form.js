var rangeSlider = function() {
  jQuery('.range-wrapp').each(function() {
      var range = jQuery(this).find('.range-value');
      var value = jQuery(this).find('.size-range');

      if (jQuery(this).hasClass('weight')) {
          value.html(range.val() + ' кг');
      } else if (jQuery(this).closest('.range-wrapp').hasClass('price-filter')) {
          value.html(range.val() + ' рублей');
      } else {
          value.html(range.val() + ' мм');
      }

      range.on('input', function() {
          if (jQuery(this).closest('.range-wrapp').hasClass('weight')) {
              value.html(this.value + ' кг');
          } else if (jQuery(this).closest('.range-wrapp').hasClass('price-filter')) {
              value.html(this.value + ' рублей');
          } else {
              value.html(this.value + ' мм');
          }
      });

  });
};

rangeSlider();

document.addEventListener('DOMContentLoaded', function () {
    // Получаем все инпуты с классом .form_input-phone
    const inputs = document.querySelectorAll('.form_input-phone');

    inputs.forEach(phoneInput => {
        phoneInput.addEventListener("input", function (e) {
            let value = e.target.value.replace(/\D/g, ""); // Убираем все нецифровые символы
            if (value.length > 11) value = value.slice(0, 11); // Ограничиваем до 11 цифр

            let formatted = "+7 ";
            if (value.length > 1) formatted += `(${value.slice(1, 4)}`;
            if (value.length > 4) formatted += `) ${value.slice(4, 7)}`;
            if (value.length > 7) formatted += `-${value.slice(7, 9)}`;
            if (value.length > 9) formatted += `-${value.slice(9, 11)}`;

            e.target.value = formatted;
        });
    });
});

const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;