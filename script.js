const select = document.querySelector(".product__list");
// const data = [
//   { img: "photo1.png", title: "çanrta", indPreis: "10", preis: "20", quant: 1 },
//   {
//     img: "photo2.png",
//     title: "ayakkanı",
//     indPreis: "30",
//     preis: "60",
//     quant: 1,
//   },
//   { img: "photo3.jpg", title: "saat", indPreis: "20", preis: "40", quant: 1 },
//   {
//     img: "photo1.png",
//     title: "telefon",
//     indPreis: "20",
//     preis: "40",
//     quant: 1,
//   },
// ];

window.addEventListener("load", () => {
  cal();
});

console.log(select);

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

    // console.log(currentTitle);
    // liste.map((item) => {
    //   console.log(item.title);
    //   if ((item.title = currentTitle)) {
    //     console.log(item.title);
    //     item["quant"] = x;
    //   }
    // });
    // liste[0]["quant"] = x;
    // console.log(liste);
    localStorage.setItem("mus", JSON.stringify(liste));
  } else if (e.target.closest(".decr")) {
    if (e.target.nextElementSibling.innerText > 0) {
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
     

    }
  } else if (e.target.closest(".remove")) {
    e.target.closest(".product").remove();

  
  }



});

function cal() {
  const productTotals = document.querySelectorAll(".productTotalNum");
  const mainSub = document.querySelector(".subtotal");
  const tax=document.querySelector(".tax")
  const total=document.querySelector(".total")

  let subTotal = 0;

  productTotals.forEach((x) => {
    subTotal += +x.innerText;
  });
  console.log(subTotal);

  mainSub.innerText = subTotal;
  let tax1= tax.innerText=+(subTotal*0.18).toFixed(2)
  total.innerText=(subTotal+tax1+15).toFixed(2)
//   let vergi=tax.innerText=0.18*subTotal
}

// const main = document.querySelector(".productList");
// const test = liste
//   .map((x) => {
//     const { img, title, indPreis, preis, quant } = x;
//     return `<li class="product">
//                         <img src="images/${img}" alt="">
//                         <div class="info">
//                             <h2>${title}</h2>
//                             <div class="price">
//                                 <p class="gold">$<span class="plus">${indPreis}</span></p>
//                                 <p class="dead">$${preis}</p>
//                             </div>
//                             <div class="quantityBar">
//                                 <span class="btn decr">-</span>
//                                 <span class="quantityNum">${quant}</span>
//                                 <span class="btn incr">+</span>
//                             </div>
//                             <input class="remove" type="button" value="Remove">
//                             <p class="productTotal">Product Total:$<span class="productTotalNum"></span></p>
//                         </div>
//                     </li>`;
//   })
//   .join("");
// // console.log(test);
// main.innerHTML = test;
// localStorage.setItem("mus", JSON.stringify(liste));

