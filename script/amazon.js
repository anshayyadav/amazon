import { cart, addToCart } from "../data/cart.js";
import { formateCurrency } from './ulils/money.js';

// Define the products array
const products = [
  {
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
  {
    image: 'images/products/black-2-slot-toaster.jpg',
    name: '2 Slot toaster - Black',
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  }
];
//   {
//     image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//       stars: 4.5,
//       count: 87,
//     },
//     priceCents: 1090,
//   },
//   {
//     image: "images/products/intermediate-composite-basketball.jpg",
//     name: "Intermediate Size Basketball",
//     rating: {
//       stars: 4,
//       count: 127,
//     },
//     priceCents: 2095,
//   },
//   {
//     image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name: "Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//       stars: 4.5,
//       count: 56,
//     },
//     priceCents: 799,
//   },
//   {
//     image : 'images/products/black-2-slot-toaster.jpg',
//     name: '2 Slot toaster - Black',
//     rating: {
//       stars: 4.5,
//       count: 56,
//     },
//     priceCents: 799,
//   }
// ];
// now the products are more so we use the code which the video creater give to us -
// end here

// now i have to add all html together after implement the data using ${}so we put the string into a function productHTML so we can use this function under string and use += to add all the data together.
function renderProductGrid(){


let productHtml = "";

// now er create forEach for perticular product
products.forEach((product) => {
  // now we create html using js/ now we add the html here.- when we put html the whole data is come but we neeed diferent data so we copy the html and use ${} to get the value under product so we use ${product.image}
  productHtml += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formateCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button js-add-to-cart button-primary" data-product-id="${
        product.id
      }">
       
        Add to Cart
      </button>
    </div>
    `;
});
// after the data combined we have to put the data at webpage using DOM - we add a new class where all the card come under eg= product-grid .js-product-grid
document.querySelector('.js-products-grid').innerHTML = productHtml;
// now we have to seperate the functon

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
    // here , when the cartItem is alredy in the card then the count is increase using foreach

    //  here we puch our data to arret on cart .js page
  });
});
// after add class we have to add ord data in the html , so we use innerdata and make it equals to the productHtml

// after this we dont need the html , the data is going to webpage using js so we delete the data.
}