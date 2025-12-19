import { packages } from "./data.js";

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrap = document.querySelector(".carousel-items");
const imgs = document.querySelectorAll(".carousel-items img");
const packagesSection = document.querySelector("#promo");
const discountContainer = document.querySelector("#discount");

if(packagesSection){
document.addEventListener("DOMContentLoaded", function () {
  displayPackages(packages, packagesSection);
});
}


let idx = 0;

function showImg() {
  if (idx >= imgs.length) {
    idx = 0;
  }
  if (idx < 0) {
    idx = imgs.length - 1;
  }
  wrap.style.transform = `translateX(-${idx * 100}%)`;
}
if (next) {
  next.addEventListener("click", () => {
    idx++;
    showImg();
  });
}

if (prev) {
  prev.addEventListener("click", () => {
    idx--;
    showImg();
  });
}
if (wrap) {
  showImg();
}

function displayPackages(packages, container) {
  const promoPackage = packages.map((item) => {
    return `<article class="section__card">
            <div class="section__card__container">
              <img
                src="${item.image}"
                class="section__card__img"
                alt="${item.title}"
              />
            </div>
            <div class="section__card__info">
              <div class="section__card__title">
                <h4>${item.title}</h4>
              </div>
              <p>
                ${item.description}
              </p>
              <div class="section__card__footer">
                <p>
                  ${item.sessions}
                </p>
                <p>From $${item.price}</p>
              </div>
            </div>
          </article>`;
  });
  if(container){
    container.innerHTML = promoPackage.join("");
  }
}

if(discountContainer){
    const exercisePrice = 45;
    const electroPrice = 30;
    const massagePrice = 45;
    const discountPercentage = 20;

    function displayDiscount(exercisePrice,electroPrice,massagePrice,discountPercentage){
        const totalPrice = exercisePrice + electroPrice + massagePrice;
        const discountPrice = totalPrice - (totalPrice*discountPercentage/100);
        return discountPrice;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const discountedPrice = displayDiscount(exercisePrice,electroPrice,massagePrice,discountPercentage);
        discountContainer.innerHTML = discountedPrice;
    })
}

