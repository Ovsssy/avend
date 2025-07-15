let map = document.getElementById('map');
let objectManager;
let currentCategory = "";
const mapFeatures = [];
const geoObjects = [];
document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(function () {
    initMap(); 
  });
});

function initMap() {
  map = new ymaps.Map("map", {
    center: [55.643287, 37.683643],
    zoom: 16,
    controls: []
  });

  // map.controls.add("fullscreenControl", { position: { top: 10, right: 10 } });
  map.controls.add("zoomControl", { position: { top: 30, right: 15 } });
  map.behaviors.disable("scrollZoom");


  addStyledPin([55.643287, 37.683643], "Avend", "Вендинговое оборудование");
  addObjectManager();
  setCityChangeListener();
}

function addObjectManager() {
  objectManager = new ymaps.ObjectManager({ clusterize: false });
  objectManager.add(mapFeatures);

  map.geoObjects.add(objectManager);
  addGeoObjects();
}

function addGeoObjects() {
  geoObjects.forEach((object, index) => {
    const geoObject = new ymaps.Polygon(
      object.coords,
      { hintContent: object.hintContent },
      {
        fillImageHref: `images/${object.img}.png`,
        fillMethod: "stretch",
        strokeWidth: 1,
        strokeColor: "#0000FF",
        draggable: false,
        cursor: "default"
      }
    );

    coords.push({ name: object.name, coords: object.coords });

    geoObject.geometry.events.add("change", () => {
      coords[index].coords = geoObject.geometry.getCoordinates();
    });

    map.geoObjects.add(geoObject);
  });
}

function setCityChangeListener() {
  const selectChoose = document.querySelector(".select_choose");
  const dropdownList = document.querySelector(".select_dropdown");
  const desktopLists = document.querySelectorAll(".contacts-block_cities-list .text3");
  const addressSpan = document.querySelector(".contacts-block_list li address span");

  if (!selectChoose || !dropdownList || !addressSpan) return;

  function updateCity(target) {
    const cityName = target.textContent;
    const coordsAttr = target.dataset.coords;
    const address = target.dataset.address;

    if (selectChoose) {
      selectChoose.innerHTML = `${cityName}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path
              d="M6.96777 12.6572C7.38965 13.1143 8.12793 13.1143 8.5498 12.6572L14.1748 7.03223C14.6318 6.61035 14.6318 5.87207 14.1748 5.4502C13.7529 4.99316 13.0146 4.99316 12.5928 5.4502L7.77637 10.2666L2.9248 5.4502C2.50293 4.99316 1.76465 4.99316 1.34277 5.4502C0.885742 5.87207 0.885742 6.61035 1.34277 7.03223L6.96777 12.6572Z"
              fill="white" />
          </svg>`;
    }

    if (coordsAttr) {
      const coords = coordsAttr.split(",").map(Number);
      if (typeof map !== "undefined" && map.setCenter) {
        map.setCenter(coords, 16, { duration: 500 });
        addStyledPin(coords, '', 'Вендинговое оборудование');
      }
    }

    if (address) {
      addressSpan.textContent = address;
    }
  }

  dropdownList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      updateCity(event.target);
    }
  });

  desktopLists.forEach(cityItem => {
    cityItem.addEventListener("click", function () {
      updateCity(cityItem);
    });
  });
}

function addStyledPin(coords, hintContent = "Метка", balloonContent = "Описание") {
  const placemark = new ymaps.Placemark(
    coords,
    {
      hintContent: hintContent,
      balloonContent: balloonContent
    },
    {
      iconImageSize: [10, 10], // Размер круга
      iconImageOffset: [0, 0],
      iconLayout: ymaps.templateLayoutFactory.createClass(
        `<div style="position: relative; display: flex; align-items: center; gap: 5px; background-color: hsla(0, 0%, 100%, .85); width:fit-content; height:26px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; padding-left: calc(100% + 25px); border-radius: 999px;">
          <div style="width: 20px; height: 20px; background-color: white; border-radius: 50%; border: 3px solid rgb(237, 69, 67); position: absolute; top: 3px; left: 2px;"></div>
          <span style="font-size: 14px; color: black; white-space: nowrap;">Avend</span>
        </div>`
      )
    }
  );

  map.geoObjects.add(placemark);
}

document.addEventListener("DOMContentLoaded", setCityChangeListener);