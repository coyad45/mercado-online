const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burguerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon= document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIconMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
}
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//MY car
function toggleCarritoAside() {
    const ismenuEmail  = desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');

    shoppingCartContainer.classList.toggle('inactive');
    
    if (!isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    if (!ismenuEmail) {
        desktopMenu.classList.add('inactive')
    }
   
    
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'culito',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','/assets/icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
    
        productInfo.append(productInfoDiv, productInfoFigure);
        
    
        productCard.append(img,productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);