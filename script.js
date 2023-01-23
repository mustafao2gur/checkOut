const select = document.querySelector(".product__list");

window.addEventListener("load", () => {
  cal();
});

select.addEventListener("click", (e) => {
  if (e.target.closest(".incr")) {
    e.target.previousElementSibling.innerText++;
    console.log(e.target);
    const x = e.target.previousElementSibling.innerText;
    let y =
      e.target.parentElement.parentElement.querySelector(".plus").innerText;
    let z =
      (e.target.parentElement.nextElementSibling.nextElementSibling.querySelector(
        ".productTotalNum"
      ).innerText = x * y);
    cal();
    const currentTitle =
      e.target.parentElement.parentElement.getElementsByTagName("h2")[0]
        .innerText;
  } else if (e.target.closest(".decr")) {
    if (e.target.nextElementSibling.innerText >1) {
      e.target.nextElementSibling.innerText--;
  
      const x = e.target.nextElementSibling.innerText;
      console.log(x);
      const y =
        e.target.parentElement.parentElement.querySelector(".plus").innerText;
      console.log(y);
      let z =
        (e.target.parentElement.nextElementSibling.nextElementSibling.querySelector(
          ".productTotalNum"
        ).innerText = x * y);

      cal();
    }else  {
      console.log("deenememmemerMNFÖÇMDÇ<<");
      e.target.closest(".product").remove();
       cal();
    }

  } else if (e.target.closest(".remove")) {
    e.target.closest(".product").remove();
  }
});

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
  if(total.innerText==0){
vergi.innerText=0
  }
}
