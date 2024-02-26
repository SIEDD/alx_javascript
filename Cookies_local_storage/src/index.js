function isSessionStorageAvailable() {
    try {
      sessionStorage.setItem('test', 'test');
      sessionStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }
  
  var availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
  
  if (!isSessionStorageAvailable()) {
    alert('Sorry, your browser does not support Session storage. Try again with a better one');
  } else {
    createStore();
    displayCart();
  }
  
  function addItemToCart(item) {
    sessionStorage.setItem(item, true);
  }
  
  function createStore() {
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
  
    availableItems.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', function() {
        addItemToCart(item);
      });
      ul.appendChild(li);
    });
  }
  
  function displayCart() {
    var cartItemsCount = Object.keys(sessionStorage).length - availableItems.length;
    if (cartItemsCount > 0) {
      var p = document.createElement('p');
      p.textContent = 'You previously had ' + cartItemsCount + ' items in your cart';
      document.body.appendChild(p);
    }
  }
  