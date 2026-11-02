// Recipe data - 25 items total. Paths match local folder structure exactly.
const recipes = [
    // BREAKFAST
    { cat: "breakfast", displayCat: "BREAKFAST", title: "Neer Dosa", desc: "A delicate rice crepe popular in coastal Karnataka.", img: "images/breakfast/neer-dosa.jpg", link: "breakfast.html" },
    { cat: "breakfast", displayCat: "BREAKFAST", title: "Thatte Idli", desc: "A soft, plate-shaped idli popular across Karnataka.", img: "images/breakfast/thatte-Idli.jpg", link: "breakfast.html" },
    { cat: "breakfast", displayCat: "BREAKFAST", title: "Akki Rotti", desc: "Traditional rice-flour flatbread mixed with vegetables.", img: "images/breakfast/akki-rotti.jpg", link: "breakfast.html" },
    { cat: "breakfast", displayCat: "BREAKFAST", title: "Mysore Masala Dosa", desc: "Crisp golden crepe lined with spicy red chutney.", img: "images/breakfast/mysore-masala-dosa.jpg", link: "breakfast.html" },
    { cat: "breakfast", displayCat: "BREAKFAST", title: "Ragi Dosa", desc: "Wholesome, gluten-free breakfast made with finger millet.", img: "images/breakfast/ragi-dosa.jpg", link: "breakfast.html" },

    // MAIN DISHES
    { cat: "main-dishes", displayCat: "MAIN DISHES", title: "Bisi Bele Bath", desc: "Comforting dish made with rice, lentils, and spices.", img: "images/main dishes/bisi-bele-bath.jpg", link: "main-dishes.html" },
    { cat: "main-dishes", displayCat: "MAIN DISHES", title: "Ragi Mudde", desc: "Nutritious soft balls made from finger millet flour.", img: "images/main dishes/ragi mudde.jpg", link: "main-dishes.html" },
    { cat: "main-dishes", displayCat: "MAIN DISHES", title: "Vangi Bath", desc: "Classic spiced rice dish cooked with tender brinjal.", img: "images/main dishes/Vangi Bath.jpg", link: "main-dishes.html" },
    { cat: "main-dishes", displayCat: "MAIN DISHES", title: "Kori Gassi", desc: "Rich Mangalorean chicken curry with coconut base.", img: "images/main dishes/Kori Gassi.jpg", link: "main-dishes.html" },
    { cat: "main-dishes", displayCat: "MAIN DISHES", title: "Mangalorean Fish Curry", desc: "Vibrant coastal seafood dish with fiery tangy gravy.", img: "images/main dishes/Mangalorean Fish Curr.jpg", link: "main-dishes.html" },

    // SNACKS
    { cat: "snacks", displayCat: "SNACKS", title: "Maddur Vada", desc: "Beloved coastal specialty featuring fresh fish or onion.", img: "images/snacks/Maddur Vada.jpg", link: "snacks.html" },
    { cat: "snacks", displayCat: "SNACKS", title: "Kodubale", desc: "Crunchy, ring-shaped snack made from rice flour.", img: "images/snacks/Kodubale.jpg", link: "snacks.html" },
    { cat: "snacks", displayCat: "SNACKS", title: "Mangalore Buns", desc: "Soft, fluffy fried bread rolls made with ripe bananas.", img: "images/snacks/Mangalore Buns.jpg", link: "snacks.html" },
    { cat: "snacks", displayCat: "SNACKS", title: "Nippattu", desc: "Thin, crunchy disc-shaped snack with peanuts.", img: "images/snacks/Nippattu.jpg", link: "snacks.html" },
    { cat: "snacks", displayCat: "SNACKS", title: "Chakli", desc: "Spiral-shaped crunchy snack popular during festivals.", img: "images/snacks/Chakli.jpg", link: "snacks.html" },

    // SWEETS
    { cat: "sweets", displayCat: "SWEETS", title: "Mysore Pak", desc: "Rich, melt-in-the-mouth sweet made from ghee and gram flour.", img: "images/sweets/Mysore Pak.jpg", link: "sweets.html" },
    { cat: "sweets", displayCat: "SWEETS", title: "Dharwad Peda", desc: "Iconic sweet made by slowly caramelizing thickened milk and sugar.", img: "images/sweets/Dharwad Peda.jpg", link: "sweets.html" },
    { cat: "sweets", displayCat: "SWEETS", title: "Obbattu", desc: "Sweet flatbread stuffed with cooked lentils and jaggery.", img: "images/sweets/Obbattu (Holige).jpg", link: "sweets.html" },
    { cat: "sweets", displayCat: "SWEETS", title: "Chiroti", desc: "Delicate, layered pastry fried until golden and flaky.", img: "images/sweets/Chiroti.jpg", link: "sweets.html" },
    { cat: "sweets", displayCat: "SWEETS", title: "Kesari Bath", desc: "Vibrant, aromatic sweet made from roasted semolina and ghee.", img: "images/sweets/Kesari Bath.jpg", link: "sweets.html" },

    // DRINKS
    { cat: "drinks", displayCat: "DRINKS", title: "Majjige", desc: "Light, cooling spiced buttermilk with ginger and curry leaves.", img: "images/drinks/Majjige.jpg", link: "drinks.html" },
    { cat: "drinks", displayCat: "DRINKS", title: "Ragi Ambli", desc: "Traditional cooling drink made from nutrient-rich finger millet.", img: "images/drinks/Ragi Ambli.jpg", link: "drinks.html" },
    { cat: "drinks", displayCat: "DRINKS", title: "Filter Coffee", desc: "Strong, aromatic coffee deeply connected to culture.", img: "images/drinks/Filter Coffee.jpg", link: "drinks.html" },
    { cat: "drinks", displayCat: "DRINKS", title: "Kashaya", desc: "Warm herbal brew made by simmering roasted coriander and cumin.", img: "images/drinks/Kashaya.jpg", link: "drinks.html" },
    { cat: "drinks", displayCat: "DRINKS", title: "Panaka", desc: "Cooling festive drink made with jaggery, lemon, and cardamom.", img: "images/drinks/Panaka.jpg", link: "drinks.html" }
];

// Generate HTML for each card and dump it into the carousel container
function loadRecipes() {
    const container = document.getElementById('recipeCarousel');
    let html = '';
    
    recipes.forEach((recipe, index) => {
        html += `
            <div class="recipe-card" data-category="${recipe.cat}" id="card-${index}">
                <img src="${recipe.img}" alt="${recipe.title}" class="card-img-top">
                <div class="card-category">${recipe.displayCat}</div>
                <h3 class="card-title">${recipe.title}</h3>
                <p class="card-desc">${recipe.desc}</p>
                <a href="${recipe.link}" class="view-recipe">View Recipe &rarr;</a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Handle filtering when buttons are clicked
function filterSelection(category) {
    const cards = document.getElementsByClassName("recipe-card");
    const buttons = document.getElementsByClassName("filter-btn");
    
    // Reset active state on all buttons first
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
    
    // Set active state on the clicked button
    const allBtns = document.querySelectorAll('.filter-btn');
    allBtns.forEach(b => {
        if(b.getAttribute('onclick').includes(category)) {
            b.classList.add('active');
        }
    });

    // Toggle visibility based on data-category attribute
    if (category === "all") category = ""; 
    
    for (let i = 0; i < cards.length; i++) {
        removeClass(cards[i], "hide-card");
        if (cards[i].getAttribute("data-category").indexOf(category) === -1) {
            addClass(cards[i], "hide-card");
        }
    }
}

// Helper to add a class without breaking existing ones
function addClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

// Helper to remove a specific class
function removeClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

// Scroll the carousel track left or right
function scrollCarousel(direction) {
    const container = document.getElementById('recipeCarousel');
    const scrollAmount = 340; 
    
    if (direction === 1) {
        container.scrollLeft += scrollAmount;
    } else {
        container.scrollLeft -= scrollAmount;
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadRecipes);