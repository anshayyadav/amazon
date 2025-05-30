import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
// import "../data/backend-practice.js";
import { loadproducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


Promise.all([
     loadProductsFetch(),
     new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
     })
]).then((values) => {
    renderOrderSummary();
    renderPaymentSummary();
  });

// loadproducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
