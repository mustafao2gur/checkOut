const select = document.querySelector(".product__list");

window.addEventListener("load", () => {
  cal();
});

select.addEventListener("click", (e) => {
  if (e.target.closest(".incr")) {
    e.target.previousElementSibling.innerText++;

    calculate(e.target);
    console.log(e.target);
    cal();
  } else if (e.target.closest(".decr")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;

      cal();
    }
  } else if (e.target.getAttribute("class") == "remove") {
    if (confirm(` will be removed!`)) {
      e.target.closest(".product").remove();
    }
    cal();
  }
});

const calculate = (target) => {
  const x = target.closest(".info");
  console.log(x);
  let y = x.querySelector("div.price span").innerText;
  console.log(y);
  let z = x.querySelector("div.quantityBar  span.quantityNum").innerText;

  x.querySelector("p.productTotal span").innerText = z * y;

  //  let z =
  //    (e.target.parentElement.nextElementSibling.nextElementSibling.querySelector(
  //      ".productTotalNum"
  //    ).innerText = x * y);
};

function cal() {
  const productTotals = document.querySelectorAll(".productTotalNum");
  const mainSub = document.querySelector(".subtotal");
  const tax = document.querySelector(".tax");
  const total = document.querySelector(".total");
  let vergi = document.querySelector(".shipping");
  let subTotal = 0;

  productTotals.forEach((x) => {
    subTotal += +x.innerText;
  });
  console.log(subTotal);

  mainSub.innerText = subTotal;
  let tax1 = (tax.innerText = +(subTotal * 0.18).toFixed(2));

  total.innerText = +tax1;
  if (total.innerText == 0) {
    vergi.innerText = 0;
  }
}
