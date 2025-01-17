let products = [
      {
        "title":"Двоповерховий номер з 10 кімнатами 150м.кв",
        "price":30000,
        "image":"https://archidea.com.ua/i/71/85/31/718531/image_main/193fc6bbcda96247e303c1a711e8cd81-quality_80Xresize_crop_1Xallow_enlarge_0Xw_780Xh_478.gif",
        "description":"Це двоповерховий номер біля моря по 150м.кв на поверх для великої родини або великої тусовки.(Прекрасно для гарного відпочинку)",
      },
      {
        "title":"Одноповерховий номер з 4 кімнатами 100м.кв",
        "price":15000,
        "image":"https://archidea.com.ua/i/71/44/88/714488/image_main/ac350e61302902322689268c941e6889-quality_70Xresize_crop_1Xallow_enlarge_0Xw_380Xh_233.gif",
        "description":"Це одноверховий номер біля моря 100м.кв на поверх для великої родини.(Прекрасно для гарного відпочинку)",
      },
      {
       "title":"Одноповерховий номер з 8 кімнатами 200м.кв",
        "price":20000,
        "image":"https://focus.ua/static/storage/originals/e/f2/9cc020e733bfc6af913cac98c30c6f2e.gif",
        "description":"Це одноверховий номер біля моря 100м.кв на поверх для великої родини.(Прекрасно для гарного відпочинку)",
      },
      {
        "title":"Одноповерховий номер з 8 кімнатами 200м.кв",
        "price":20000,
        "image":"https://focus.ua/static/storage/originals/e/f2/9cc020e733bfc6af913cac98c30c6f2e.gif",
        "description":"Це одноверховий номер біля моря 100м.кв на поверх для великої родини.(Прекрасно для гарного відпочинку)",
      },
]
function getCookieValue(cookieName){
    const cookies =document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim();

        if (cookie.startsWith(cookieName + '=')){
            return cookie.substring(cookieName.length + 1);
        }
        return '';
    }
}

class Cart{
    constructor(){
        this.products= []
        this.cartCounter = document.querySelector('.cart-container span');
        this.loadCartFromCookies();
    }
    addItem(productIndex) {//додання товару в кошик
      let productInCart = this.products.find(product => product.productIndex === productIndex);//перевіярємо чи вже існує цей товар в корзині
      if (productInCart) {//якщо існує то збільшуємо його кількість
          productInCart.quantity += 1;
      }else {//якщо товара нема то додаємо його та вказуємо кількість 1
          this.products.push({
              productIndex,
              quantity:1
          });
      }
      this.updateCounter(); // Оновлюємо лічильник товарів
      this.saveCartToCookies();// зберегаємо в кукі
  }


  updateCounter() {//оновлення загальної кількості товарів
      let count = 0;
      for (let i = 0;i < this.products.length;i++) { // проходимося по всіх товарах
          count += this.products[i].quantity; // рахуємо кількість усіх товарів
      }
      this.cartCounter.innerHTML = count; // оновлюємо лічильник на сторінці
  }
  // Зміна кількості одного товара
  updateQuantity(productIndex, newQuantity) {
      let productInCart = this.products.find(product => product.productIndex === productIndex);//перевіярємо чи вже існує цей товар в корзині
      if (productInCart) {
          productInCart.quantity = newQuantity;
          if (productInCart.quantity == 0) {
              this.products = this.products.filter(product => product.productIndex !== productIndex);
          }
          this.updateCounter();
          this.saveCartToCookies();
      }
  }
  saveCartToCookies() {//збереження кошику в кукі
      let cartJSON = JSON.stringify(this.products);
      document.cookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
  }
  loadCartFromCookies() {
      let cartCookie = getCookieValue('cart');
      if (cartCookie && cartCookie !== '') {
          this.products = JSON.parse(cartCookie);
          this.updateCounter();
      }
  }
  calculateTotal(){
      let total = 0;
      for(let i = 0;i < this.products.length;i++){
          total += products[this.products[i].productIndex].price * this.products[i].quantity;
      }
     
      return total;
  }
}
const cart = new Cart();


function getProductCart(product){
  return `<article class="item">
          <img src="${product.image}">
          <h2>${product.title}</h2>
          <p class="item-desc">${product.description}</p>
          <p class="item-price">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-currency-hryvnia"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a2.64 2.64 0 0 1 2.562 -2h3.376a2.64 2.64 0 0 1 2.562 2a2.57 2.57 0 0 1 -1.344 2.922l-5.876 2.938a3.338 3.338 0 0 0 -1.78 3.64a3.11 3.11 0 0 0 3.05 2.5h2.888a2.64 2.64 0 0 0 2.562 -2"></path><path d="M6 10h12"></path><path d="M6 14h12"></path></svg>
              ${product.price}
          </p>
          <button class="item-buy">
              <svg class="bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M12.5 17h-6.5v-14h-2"></path><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
              Купити
          </button>
      </article>`
}
//виведення на екран всіх товарів
function printProducts(_products) {
  let localProducts = _products || products
  //контейнер в якому знаходяться всі товари
  let itemsContainer = document.querySelector(".items");
  itemsContainer.innerHTML = "";
  if(!localProducts.length) {
      itemsContainer.innerHTML = "<h1>Нема товару</h1>";
      return;
  }
  //проходимось по всім товарам та додаємо верстку зі значеннями кожного товару
  for(let i = 0;i < localProducts.length;i++){
      itemsContainer.innerHTML += getProductCart(localProducts[i]);
  }
  //отримуємо всі кнопки "купити" та додаємо на кожну кнопку подію для додання в кошик
  let buyButtons = document.querySelectorAll(".item-buy");
  for(let i = 0;i < buyButtons.length;i++){
      buyButtons[i].addEventListener("click",() => cart.addItem(i))
  }
}


printProducts();

let search = document.querySelector(".search")

function onSearch(event){
      let localProducts = products.filter(product =>
        product.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        
        printProducts(localProducts);
}
search.addEventListener("change",onSearch)

