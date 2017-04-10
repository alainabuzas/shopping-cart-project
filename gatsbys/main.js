document.addEventListener("DOMContentLoaded", function() {

    // switch to category page

    var categoryPage = document.getElementById("hatsMain");

    categoryPage.addEventListener('click', function() {
        var homepage = document.getElementById("homepage");
        var hatsOnlyPage = document.getElementById("hatsOnly");

        homepage.classList.add("hidden");
        hatsOnlyPage.classList.remove("hidden");

    });

    var categoryPage = document.getElementById("bagsMain");

    categoryPage.addEventListener('click', function() {
        var homepage = document.getElementById("homepage");
        var bagsOnlyPage = document.getElementById("bagsOnly");

        homepage.classList.add("hidden");
        bagsOnlyPage.classList.remove("hidden");

    });

    var categoryPage = document.getElementById("printsMain");

    categoryPage.addEventListener('click', function() {
        var homepage = document.getElementById("homepage");
        var printsOnlyPage = document.getElementById("printsOnly");

        homepage.classList.add("hidden");
        printsOnlyPage.classList.remove("hidden");

    });

    var categoryPage = document.getElementById("etcMain");

    categoryPage.addEventListener('click', function() {
        var homepage = document.getElementById("homepage");
        var etcOnlyPage = document.getElementById("etcOnly");

        homepage.classList.add("hidden");
        etcOnlyPage.classList.remove("hidden");

    });

    // back button

    var backButton = document.getElementById("backBtn");

    backButton.addEventListener('click', function() {
        var homepage = document.getElementById("homepage");
        var hatsOnlyPage = document.getElementById("hatsOnly");
        var bagsOnlyPage = document.getElementById("bagsOnly");
        var printsOnlyPage = document.getElementById("printsOnly");
        var etcOnlyPage = document.getElementById("etcOnly");

        hatsOnlyPage.classList.add("hidden");
        bagsOnlyPage.classList.add("hidden");
        printsOnlyPage.classList.add("hidden");
        etcOnlyPage.classList.add("hidden");
        homepage.classList.remove("hidden");

    });


    var homeButton = document.getElementById("homeBtn");

    homeButton.addEventListener('click', function() {
        var homepage = document.getElementById("homepage");
        var hatsOnlyPage = document.getElementById("hatsOnly");
        var bagsOnlyPage = document.getElementById("bagsOnly");
        var printsOnlyPage = document.getElementById("printsOnly");
        var etcOnlyPage = document.getElementById("etcOnly");

        hatsOnlyPage.classList.add("hidden");
        bagsOnlyPage.classList.add("hidden");
        printsOnlyPage.classList.add("hidden");
        etcOnlyPage.classList.add("hidden");
        homepage.classList.remove("hidden");

    });


    // hover on item > add to cart image fades and button pops up "Add to Cart"
    // item name and price are added to shopping cart list

    var addToCart = document.querySelectorAll('.item');

    for (var i = 0; i < addToCart.length; i++) {

        addToCart[i].addEventListener('click', function() {

            var itemToPurchase = this.querySelector('.itemname');
            var itemToPurchasePrice = this.querySelector('.price');

            var allItemsInCart = document.getElementById("cart");
            var shoppingListItem = document.createElement("li");

            shoppingListItem.appendChild(document.createTextNode(itemToPurchase.innerText + ", " +
                itemToPurchasePrice.innerText));

            cart.appendChild(shoppingListItem);

        });

    }

    // local storage
    window.onbeforeunload = function() {
        localStorage.setItem(item.itemToPurchase.innerText);
        localStorage.setItem(item.itemToPurchasePrice.innerText);
    }

    // cart total

    // media query
});
