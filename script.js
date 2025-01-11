let products = [
      {
        "title":"Двоповерховий номер з 10 кімнатами 150м.кв",
        "price":30000,
        "imagine":"https://archidea.com.ua/i/71/85/31/718531/image_main/193fc6bbcda96247e303c1a711e8cd81-quality_80Xresize_crop_1Xallow_enlarge_0Xw_780Xh_478.gif",
        "description":"Це двоповерховий номер біля моря по 150м.кв на поверх для великої родини або великої тусовки.(Прекрасно для гарного відпочинку)",
      },
      {
        "title":"Одноповерховий номер з 4 кімнатами 100м.кв",
        "price":15000,
        "imagine":"https://archidea.com.ua/i/71/44/88/714488/image_main/ac350e61302902322689268c941e6889-quality_70Xresize_crop_1Xallow_enlarge_0Xw_380Xh_233.gif",
        "description":"Це одноверховий номер біля моря 100м.кв на поверх для великої родини.(Прекрасно для гарного відпочинку)",
      },
      {
       "title":"Одноповерховий номер з 8 кімнатами 200м.кв",
        "price":20000,
        "imagine":"https://focus.ua/static/storage/originals/e/f2/9cc020e733bfc6af913cac98c30c6f2e.gif",
        "description":"Це одноверховий номер біля моря 100м.кв на поверх для великої родини.(Прекрасно для гарного відпочинку)",
      },
      {
        "title":"Одноповерховий номер з 8 кімнатами 200м.кв",
        "price":20000,
        "imagine":"https://focus.ua/static/storage/originals/e/f2/9cc020e733bfc6af913cac98c30c6f2e.gif",
        "description":"Це одноверховий номер біля моря 100м.кв на поверх для великої родини.(Прекрасно для гарного відпочинку)",
      },
]
function getCookieValue(cookieName){
    const cookies =document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim();

        if (cookie.startsWith(cookieNamme + '=')){
            return cookie.substring(cookieName.lenght + 1);
        }
        return '';
    }
}
class Cart{
    constructor(){
        this.products= []
        this.cartCounter = document.querySelector('.cart-countainer span');
        this.loadCartFrromCookie();
    }
    adddItem(productInder){
        let productInCart = this.products
    }
}
