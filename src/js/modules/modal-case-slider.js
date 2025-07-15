document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (e) {
        const caseItem = e.target.closest(".cases_item-image-wrapper");
        if (!caseItem) return;

        const modalId = caseItem.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Берем данные из data-атрибутов
        const logo = caseItem.getAttribute("data-logo") || "";
        const tags = JSON.parse(caseItem.getAttribute("data-tags") || "[]");
        const gallery = JSON.parse(caseItem.getAttribute("data-gallery") || "[]");

        // Вставляем логотип
        modal.querySelector(".modal-content_logo").src = logo;

        // Вставляем теги
        modal.querySelector(".cases_item-tag-wrapper").innerHTML = tags.join("");

        // Вставляем галерею
        const swiperWrapper = modal.querySelector(".swiper-wrapper");
        swiperWrapper.innerHTML = gallery.map(url =>
            `<div class="swiper-slide modal-slider-case_slide"><img src="${url}" alt=""></div>`
        ).join("");

        // Определяем кнопки навигации
        const prevBtn = modal.querySelector(".modal-slider-case-prev");
        const nextBtn = modal.querySelector(".modal-slider-case-next");

        // Проверяем количество изображений
        if (gallery.length <= 1) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        } else {
            prevBtn.style.display = "flex";
            nextBtn.style.display = "flex";
        }

        // Инициализируем Swiper
        new Swiper(modal.querySelector(".modal-slider-case"), {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: '.modal-slider-case_pagination',
            },
        });



        // Открываем модалку
        modal.classList.add("modal-active");
    });

    // Закрытие модального окна
    document.body.addEventListener("click", function (e) {
        if (e.target.closest(".modal-cross") || e.target.classList.contains("modal-wrap")) {
            e.target.closest(".modal-wrap").classList.remove("modal-active");
        }
    });
});
