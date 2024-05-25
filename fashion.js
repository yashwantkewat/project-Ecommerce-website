// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const targetY = target.getBoundingClientRect().top + window.pageYOffset;
      const startingY = window.pageYOffset;
      const diff = targetY - startingY;
      const duration = 3000; // Duration of the scroll animation in milliseconds
      let start;

      // Step function for the scroll animation
      function step(timestamp) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percentage = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percentage);

        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      }

      // Start the animation
      window.requestAnimationFrame(step);
    }
  });
});


// email submission

document.getElementById("submitButton").addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the email entered by the user
  var email = document.getElementById("emailInput").value;

  // Email validation regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the entered email matches the validation regex
  if (emailRegex.test(email)) {
    // If the email is valid, display it in an alert
    alert("Email submitted: " + email);
  } else {
    // If the email is not valid, display an error message
    alert("Please enter a valid email address.");
  }
});



// hide and show effect 
// Array of words to display
var words = ["our partners__Amazon ", "our Partners__Flipcart", "our Partners__Shopify", "our Partners__Snapdeal", "our Partners__JioMart"];

// Index for tracking the current word
var wordIndex = 0;

// Index for tracking the current letter
var letterIndex = 0;

// Get the word element
var wordElement = document.getElementById("word");

// Function to display the words letter by letter
function displayWords() {
  var currentWord = words[wordIndex];
  var currentLetter = currentWord.substring(0, letterIndex);
  wordElement.textContent = currentLetter;
  letterIndex++;
  if (letterIndex > currentWord.length) {
    letterIndex = 0;
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
  }
  setTimeout(displayWords, 200); // Change the delay here (milliseconds)
}

// Start displaying words
displayWords();

// ------form validation-----
const signInLink = document.getElementById('signInLink');
const signUpLink = document.getElementById('signUpLink');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signInFormElement = document.getElementById('signInFormElement');
const signUpFormElement = document.getElementById('signUpFormElement');

signInLink.addEventListener('click', function (e) {
  e.preventDefault();
  signUpForm.classList.add('hidden');
  signInForm.classList.remove('hidden');
});

signUpLink.addEventListener('click', function (e) {
  e.preventDefault();
  signInForm.classList.add('hidden');
  signUpForm.classList.remove('hidden');
});

signInFormElement.addEventListener('submit', function (e) {
  e.preventDefault();
  // Perform sign in validation
  alert('Sign in successful!');
  signInForm.classList.add('hidden');
});

signUpFormElement.addEventListener('submit', function (e) {
  e.preventDefault();
  // Perform sign up validation and data storage
  alert('Sign up successful!');
  signUpForm.classList.add('hidden');
});
/////////////////////////////////////////////

////////////////////////////////////////////////////////




//////////////////

 /* Image Filter Section */

   /* Image Filter Section */

// const allFilterItems = document.querySelectorAll('.filter-item');
// const allFilterBtns = document.querySelectorAll('.filter-btn');

// window.addEventListener('DOMContentLoaded', () => {
//     allFilterBtns[1].classList.add('active-btn');
// });

// allFilterBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         showFilteredContent(btn);
//     });
// });

// function showFilteredContent(btn){
//     allFilterItems.forEach((item) => {
//         if(item.classList.contains(btn.id)){
//             resetActiveBtn();
//             btn.classList.add('active-btn');
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// function resetActiveBtn(){
//     allFilterBtns.forEach((btn) => {
//         btn.classList.remove('active-btn');
//     });
// }


/* Shopping Cart Section */
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready);
}

else{
    ready();
}


 function ready(){
    var removeCartItemButton = document.getElementsByClassName('btn-danger');
    for (var i = 0 ; i < removeCartItemButton.length; i++){
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(var i = 0 ;i < quantityInputs.length ; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(var i = 0; i< addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click',addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
 }


 function purchaseClicked(){
     alert('Thank you for your purchase!!!');
     var cartItems = document.getElementsByClassName('cart-items')[0];
     while(cartItems.hasChildNodes()){
         cartItems.removeChild(cartItems.firstChild)
     }
     updateCartTotal();
 }

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    
}

function  quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateCartTotal();
}


function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title,price,imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (i = 0; i< cartItemNames.length ; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item already has added to the cart!');
            return
        }
    }
    var cartRowContents = `

        <td class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="10%" height="10%">
            <span class="cart-item-title">${title}</span>                  
        </td>
        <td class="cart-item cart-column">
            <span class="cart-price cart-column">${price}</span>
        </td>
        <td class="cart-item cart-column">
            <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
            <button class="btn btn-danger" type="button">Remove</button>
        </td>        
    `;
     
            
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0 ; i< cartRows.length ; i++){
        var cartRow =cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('Rs ' , ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity);
         
    }
    total = Math.round(total * 100 )/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs '+ total + '.00';
 
}




///////database store using fetch /////////////
 // Select all instances of the card elements
const cardElements = document.querySelectorAll('.filter-item');

// Array to store data from each card
const dataArray = [];

// Iterate over each card element
cardElements.forEach(card => {
    // Get data from the current card
    const cardTitle = card.querySelector('.shop-item-title').textContent;
    const cardPrice = card.querySelector('.shop-item-price').textContent;

    // Construct the data object to be sent to the server
    const data = {
        title: cardTitle.trim(),
        price: parseFloat(cardPrice.trim().replace('Rs', '').replace(',', '')).toFixed(2)
    };

    // Push the data object into the array
    dataArray.push(data);
});

// Send the data array to the server
fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataArray)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Data sent to server:', data);
})
.catch(error => {
    console.error('Error:', error);
});



// database store in local storage 
function addToCart(itemName, itemPrice) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var item = {
      name: itemName,
      price: itemPrice
  };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart!');
}




