// ===============================
// BZ BOYS FOOD - APP.JS
// ===============================

// ---------- RESTAURANT DATA ----------

const restaurants = [
    {
        id: 1,
        name: "Burger Singh",
        category: "Burgers",
        rating: 4.5,
        time: "25-30 min",
        delivery: "Free delivery",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        menu: [
            {
                id: 101,
                name: "Classic Chicken Burger",
                price: 149,
                description: "Juicy chicken patty with fresh vegetables and special sauce.",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 102,
                name: "Cheese Burger",
                price: 179,
                description: "Loaded burger with melted cheese and crispy lettuce.",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 103,
                name: "French Fries",
                price: 99,
                description: "Crispy golden fries with seasoning.",
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80"
            }
        ]
    },

    {
        id: 2,
        name: "Pizza Paradise",
        category: "Pizza",
        rating: 4.7,
        time: "30-35 min",
        delivery: "Free delivery",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        menu: [
            {
                id: 201,
                name: "Margherita Pizza",
                price: 199,
                description: "Classic pizza with tomato, mozzarella and basil.",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 202,
                name: "Farmhouse Pizza",
                price: 249,
                description: "Loaded with onion, capsicum, tomato and cheese.",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 203,
                name: "Cheese Burst Pizza",
                price: 299,
                description: "Extra cheese for serious cheese lovers.",
                image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=500&q=80"
            }
        ]
    },

    {
        id: 3,
        name: "Punjabi Rasoi",
        category: "Indian",
        rating: 4.6,
        time: "35-40 min",
        delivery: "Free delivery",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
        menu: [
            {
                id: 301,
                name: "Butter Chicken",
                price: 299,
                description: "Creamy Punjabi-style butter chicken.",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 302,
                name: "Paneer Tikka",
                price: 229,
                description: "Grilled paneer with Indian spices.",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 303,
                name: "Garlic Naan",
                price: 69,
                description: "Soft naan topped with garlic and butter.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
            }
        ]
    },

    {
        id: 4,
        name: "Dragon Bowl",
        category: "Chinese",
        rating: 4.4,
        time: "25-30 min",
        delivery: "Free delivery",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
        menu: [
            {
                id: 401,
                name: "Veg Hakka Noodles",
                price: 179,
                description: "Classic Chinese noodles with vegetables.",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 402,
                name: "Chicken Fried Rice",
                price: 219,
                description: "Fried rice with chicken and vegetables.",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 403,
                name: "Momos",
                price: 149,
                description: "Steamed dumplings served with spicy chutney.",
                image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=500&q=80"
            }
        ]
    }
];


// ---------- USER DATA ----------

let user = JSON.parse(localStorage.getItem("bz_user")) || {
    name: "BZ User",
    email: "user@example.com",
    phone: "",
    addresses: []
};

let cart = JSON.parse(localStorage.getItem("bz_cart")) || [];
let orders = JSON.parse(localStorage.getItem("bz_orders")) || [];
let bookings = JSON.parse(localStorage.getItem("bz_bookings")) || [];
let favorites = JSON.parse(localStorage.getItem("bz_favorites")) || [];
let transactions = JSON.parse(localStorage.getItem("bz_transactions")) || [];

let wallet = Number(localStorage.getItem("bz_wallet")) || 850;
let coupon = null;


// ---------- SAVE DATA ----------

function saveData() {
    localStorage.setItem("bz_user", JSON.stringify(user));
    localStorage.setItem("bz_cart", JSON.stringify(cart));
    localStorage.setItem("bz_orders", JSON.stringify(orders));
    localStorage.setItem("bz_bookings", JSON.stringify(bookings));
    localStorage.setItem("bz_favorites", JSON.stringify(favorites));
    localStorage.setItem("bz_transactions", JSON.stringify(transactions));
    localStorage.setItem("bz_wallet", wallet);
}


// ---------- PAGE NAVIGATION ----------

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (pageId === "home") {
        renderRestaurants();
    }

    if (pageId === "cartPage") {
        renderCart();
    }

    if (pageId === "checkoutPage") {
        renderCheckout();
    }

    if (pageId === "orders") {
        renderOrders();
    }

    if (pageId === "profile") {
        renderProfile();
    }

    if (pageId === "wallet") {
        renderWallet();
    }

    if (pageId === "bookings") {
        renderBookings();
    }

    if (pageId === "favorites") {
        renderFavorites();
    }
}


// ---------- RESTAURANTS ----------

function renderRestaurants(list = restaurants) {
    const container = document.getElementById("restaurantGrid");

    if (!container) {
        return;
    }

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No restaurants found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(function (restaurant) {

        const isFavorite = favorites.includes(restaurant.id);

        return `
            <div class="restaurant-card" onclick="openRestaurant(${restaurant.id})">

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                >

                <button
                    class="favorite-btn"
                    onclick="event.stopPropagation(); toggleFavorite(${restaurant.id})"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

                <div class="restaurant-info">

                    <h3>${restaurant.name}</h3>

                    <p>${restaurant.category}</p>

                    <div class="restaurant-meta">
                        <span>⭐ ${restaurant.rating}</span>
                        <span>🕒 ${restaurant.time}</span>
                    </div>

                    <small>${restaurant.delivery}</small>

                </div>

            </div>
        `;
    }).join("");
}


// ---------- OPEN RESTAURANT ----------

function openRestaurant(id) {
    const restaurant = restaurants.find(function (item) {
        return item.id === id;
    });

    if (!restaurant) {
        return;
    }

    const nameElement = document.getElementById("restaurantName");
    const infoElement = document.getElementById("restaurantInfo");
    const menuElement = document.getElementById("menuGrid");

    if (nameElement) {
        nameElement.textContent = restaurant.name;
    }

    if (infoElement) {
        infoElement.innerHTML = `
            ⭐ ${restaurant.rating}
            &nbsp; • &nbsp;
            🕒 ${restaurant.time}
            &nbsp; • &nbsp;
            ${restaurant.category}
        `;
    }

    if (menuElement) {
        menuElement.innerHTML = restaurant.menu.map(function (item) {

            return `
                <div class="menu-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div class="menu-details">

                        <h3>${item.name}</h3>

                        <p>${item.description}</p>

                        <strong>₹${item.price}</strong>

                        <button
                            onclick="addToCart(${restaurant.id}, ${item.id})"
                        >
                            Add
                        </button>

                    </div>

                </div>
            `;

        }).join("");
    }

    showPage("restaurantPage");
}


// ---------- CART ----------

function addToCart(restaurantId, itemId) {

    const restaurant = restaurants.find(function (item) {
        return item.id === restaurantId;
    });

    if (!restaurant) {
        return;
    }

    const item = restaurant.menu.find(function (food) {
        return food.id === itemId;
    });

    if (!item) {
        return;
    }

    const existingItem = cart.find(function (cartItem) {
        return cartItem.id === itemId;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    saveData();
    updateCartCount();

    toast(item.name + " added to cart");
}


function updateCartCount() {

    const count = cart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }
}


function showCart() {
    showPage("cartPage");
}


function renderCart() {

    const container = document.getElementById("cartItems");

    if (!container) {
        return;
    }

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>Your cart is empty 🛒</h2>
                <p>Add some delicious food first.</p>
                <button onclick="showPage('home')">
                    Browse Restaurants
                </button>
            </div>
        `;

        updateCartTotal();
        return;
    }

    container.innerHTML = cart.map(function (item) {

        return `
            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h3>${item.name}</h3>

                    <p>₹${item.price}</p>

                    <div class="quantity-controls">

                        <button onclick="changeQuantity(${item.id}, -1)">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                    </div>

                </div>

                <strong>
                    ₹${item.price * item.quantity}
                </strong>

            </div>
        `;

    }).join("");

    updateCartTotal();
}


function changeQuantity(itemId, change) {

    const item = cart.find(function (cartItem) {
        return cartItem.id === itemId;
    });

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(function (cartItem) {
            return cartItem.id !== itemId;
        });
    }

    saveData();
    renderCart();
    updateCartCount();
}


function updateCartTotal() {

    const subtotal = cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);

    const delivery = subtotal > 0 ? 30 : 0;

    let discount = 0;

    if (coupon === "BZ100") {
        discount = Math.min(100, subtotal);
    }

    const total = subtotal + delivery - discount;

    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("deliveryFee");
    const discountElement = document.getElementById("discount");
    const totalElement = document.getElementById("grandTotal");

    if (subtotalElement) {
        subtotalElement.textContent = "₹" + subtotal;
    }

    if (deliveryElement) {
        deliveryElement.textContent = "₹" + delivery;
    }

    if (discountElement) {
        discountElement.textContent = "-₹" + discount;
    }

    if (totalElement) {
        totalElement.textContent = "₹" + total;
    }
}


// ---------- CHECKOUT ----------

function goCheckout() {

    if (cart.length === 0) {
        toast("Your cart is empty");
        return;
    }

    showPage("checkoutPage");
}


function renderCheckout() {

    const container = document.getElementById("checkoutItems");

    if (!container) {
        return;
    }

    container.innerHTML = cart.map(function (item) {

        return `
            <div class="checkout-item">
                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    ₹${item.price * item.quantity}
                </strong>
            </div>
        `;

    }).join("");

    updateCheckoutTotal();
}


function updateCheckoutTotal() {

    const subtotal = cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);

    const delivery = subtotal > 0 ? 30 : 0;

    let discount = 0;

    if (coupon === "BZ100") {
        discount = Math.min(100, subtotal);
    }

    const total = subtotal + delivery - discount;

    const element = document.getElementById("checkoutTotal");

    if (element) {
        element.textContent = "₹" + total;
    }
}


// ---------- PLACE ORDER ----------

function placeOrder() {

    if (cart.length === 0) {
        toast("Your cart is empty");
        return;
    }

    const paymentElement = document.querySelector(
        'input[name="payment"]:checked'
    );

    const paymentMethod = paymentElement
        ? paymentElement.value
        : "Cash on Delivery";

    const addressElement = document.getElementById("checkoutAddress");

    const address = addressElement
        ? addressElement.value.trim()
        : "";

    if (!address) {
        toast("Please enter your delivery address");
        return;
    }

    const subtotal = cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);

    const delivery = 30;

    const discount =
        coupon === "BZ100"
            ? Math.min(100, subtotal)
            : 0;

    const total = subtotal + delivery - discount;

    if (paymentMethod === "Wallet") {

        if (wallet < total) {
            toast("Insufficient wallet balance");
            return;
        }

        wallet -= total;

        transactions.push({
            type: "debit",
            amount: total,
            note: "Food order",
            date: new Date().toLocaleString()
        });
    }

    const order = {

        id: "BZ" + Date.now(),

        items: [...cart],

        subtotal: subtotal,

        delivery: delivery,

        discount: discount,

        total: total,

        payment: paymentMethod,

        address: address,

        status: "Preparing",

        date: new Date().toLocaleString()

    };

    orders.unshift(order);

    cart = [];

    coupon = null;

    saveData();

    updateCartCount();

    toast("Order placed successfully 🎉");

    showPage("orders");
}


// ---------- ORDERS ----------

function renderOrders() {

    const container = document.getElementById("ordersList");

    if (!container) {
        return;
    }

    if (orders.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>No orders yet</h2>
                <p>Your future orders will appear here.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = orders.map(function (order) {

        return `
            <div class="order-card">

                <div class="order-header">

                    <h3>Order #${order.id}</h3>

                    <span class="order-status">
                        ${order.status}
                    </span>

                </div>

                <p>${order.date}</p>

                <div class="order-items">

                    ${order.items.map(function (item) {

                        return `
                            <div>
                                ${item.name} × ${item.quantity}
                            </div>
                        `;

                    }).join("")}

                </div>

                <hr>

                <strong>
                    Total: ₹${order.total}
                </strong>

                <p>
                    Payment: ${order.payment}
                </p>

                <p>
                    Delivery: ${order.address}
                </p>

            </div>
        `;

    }).join("");
}


// ---------- PROFILE ----------

function renderProfile() {

    const nameInput = document.getElementById("profileName");
    const emailInput = document.getElementById("profileEmail");
    const phoneInput = document.getElementById("profilePhone");

    if (nameInput) {
        nameInput.value = user.name || "";
    }

    if (emailInput) {
        emailInput.value = user.email || "";
    }

    if (phoneInput) {
        phoneInput.value = user.phone || "";
    }

    renderAddresses();
}


function saveProfile() {

    const nameInput = document.getElementById("profileName");
    const emailInput = document.getElementById("profileEmail");
    const phoneInput = document.getElementById("profilePhone");

    if (nameInput) {
        user.name = nameInput.value.trim();
    }

    if (emailInput) {
        user.email = emailInput.value.trim();
    }

    if (phoneInput) {
        user.phone = phoneInput.value.trim();
    }

    saveData();

    toast("Profile saved successfully");
}


function renderAddresses() {

    const container = document.getElementById("addressList");

    if (!container) {
        return;
    }

    if (!user.addresses || user.addresses.length === 0) {

        container.innerHTML = `
            <p>No saved addresses.</p>
        `;

        return;
    }

    container.innerHTML = user.addresses.map(function (address, index) {

        return `
            <div class="address-card">

                <p>${address}</p>

                <button onclick="deleteAddress(${index})">
                    Delete
                </button>

            </div>
        `;

    }).join("");
}


function addAddress() {

    const input = document.getElementById("newAddress");

    if (!input) {
        return;
    }

    const address = input.value.trim();

    if (!address) {
        toast("Enter an address first");
        return;
    }

    if (!user.addresses) {
        user.addresses = [];
    }

    user.addresses.push(address);

    input.value = "";

    saveData();
    renderAddresses();

    toast("Address added");
}


function deleteAddress(index) {

    if (!user.addresses) {
        return;
    }

    user.addresses.splice(index, 1);

    saveData();
    renderAddresses();

    toast("Address deleted");
}


// ---------- WALLET ----------

function renderWallet() {

    const balanceElement = document.getElementById("walletBalance");

    if (balanceElement) {
        balanceElement.textContent = "₹" + wallet;
    }

    const transactionContainer =
        document.getElementById("transactionList");

    if (!transactionContainer) {
        return;
    }

    if (transactions.length === 0) {

        transactionContainer.innerHTML = `
            <p>No transactions yet.</p>
        `;

        return;
    }

    transactionContainer.innerHTML = transactions.map(
        function (transaction) {

            const sign =
                transaction.type === "credit"
                    ? "+"
                    : "-";

            return `
                <div class="transaction">

                    <span>
                        ${transaction.note}
                    </span>

                    <strong>
                        ${sign}₹${transaction.amount}
                    </strong>

                    <small>
                        ${transaction.date}
                    </small>

                </div>
            `;

        }
    ).join("");
}


function addMoney() {

    const amount = Number(
        prompt("Enter amount to add:")
    );

    if (!amount || amount <= 0) {
        toast("Enter a valid amount");
        return;
    }

    wallet += amount;

    transactions.unshift({
        type: "credit",
        amount: amount,
        note: "Money added to wallet",
        date: new Date().toLocaleString()
    });

    saveData();
    renderWallet();

    toast("₹" + amount + " added to wallet");
}


// ---------- TABLE BOOKINGS ----------

function createBooking() {

    const nameInput = document.getElementById("bookingName");
    const dateInput = document.getElementById("bookingDate");
    const timeInput = document.getElementById("bookingTime");
    const guestsInput = document.getElementById("bookingGuests");

    if (!nameInput || !dateInput || !timeInput || !guestsInput) {
        return;
    }

    const name = nameInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;
    const guests = guestsInput.value;

    if (!name || !date || !time || !guests) {
        toast("Please fill all booking details");
        return;
    }

    const booking = {

        id: "BK" + Date.now(),

        name: name,

        date: date,

        time: time,

        guests: guests,

        status: "Confirmed"

    };

    bookings.unshift(booking);

    saveData();

    renderBookings();

    nameInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    guestsInput.value = "";

    toast("Table booked successfully 🍽️");
}


function renderBookings() {

    const container = document.getElementById("bookingList");

    if (!container) {
        return;
    }

    if (bookings.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>No bookings</h2>
                <p>Your restaurant bookings will appear here.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = bookings.map(function (booking) {

        return `
            <div class="booking-card">

                <h3>Booking #${booking.id}</h3>

                <p>
                    👤 ${booking.name}
                </p>

                <p>
                    📅 ${booking.date}
                </p>

                <p>
                    🕒 ${booking.time}
                </p>

                <p>
                    👥 ${booking.guests} guests
                </p>

                <strong>
                    ${booking.status}
                </strong>

            </div>
        `;

    }).join("");
}


// ---------- FAVORITES ----------

function toggleFavorite(restaurantId) {

    if (favorites.includes(restaurantId)) {

        favorites = favorites.filter(function (id) {
            return id !== restaurantId;
        });

        toast("Removed from favorites");

    } else {

        favorites.push(restaurantId);

        toast("Added to favorites ❤️");
    }

    saveData();

    renderRestaurants();
}


function renderFavorites() {

    const container = document.getElementById("favoriteGrid");

    if (!container) {
        return;
    }

    const favoriteRestaurants = restaurants.filter(
        function (restaurant) {
            return favorites.includes(restaurant.id);
        }
    );

    if (favoriteRestaurants.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>No favorites yet ❤️</h2>
                <p>Add restaurants to your favorites.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = favoriteRestaurants.map(
        function (restaurant) {

            return `
                <div
                    class="restaurant-card"
                    onclick="openRestaurant(${restaurant.id})"
                >

                    <img
                        src="${restaurant.image}"
                        alt="${restaurant.name}"
                    >

                    <div class="restaurant-info">

                        <h3>${restaurant.name}</h3>

                        <p>${restaurant.category}</p>

                        <span>
                            ⭐ ${restaurant.rating}
                        </span>

                    </div>

                </div>
            `;

        }
    ).join("");
}


// ---------- SEARCH ----------

function searchFood() {

    const input = document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const search = input.value.toLowerCase().trim();

    if (!search) {
        renderRestaurants();
        return;
    }

    const filteredRestaurants = restaurants.filter(
        function (restaurant) {

            const restaurantMatch =
                restaurant.name.toLowerCase().includes(search) ||
                restaurant.category.toLowerCase().includes(search);

            const menuMatch = restaurant.menu.some(
                function (item) {
                    return item.name.toLowerCase().includes(search);
                }
            );

            return restaurantMatch || menuMatch;
        }
    );

    renderRestaurants(filteredRestaurants);
}


// ---------- CATEGORY FILTER ----------

function filterCategory(category) {

    if (category === "All") {
        renderRestaurants();
        return;
    }

    const filtered = restaurants.filter(
        function (restaurant) {
            return restaurant.category.toLowerCase() ===
                category.toLowerCase();
        }
    );

    renderRestaurants(filtered);
}


// ---------- COUPON ----------

function applyCoupon() {

    const input = document.getElementById("couponInput");

    if (!input) {
        return;
    }

    const code = input.value.trim().toUpperCase();

    if (code === "BZ100") {

        coupon = "BZ100";

        toast("Coupon applied! ₹100 off");

    } else {

        coupon = null;

        toast("Invalid coupon code");

    }

    updateCartTotal();
    updateCheckoutTotal();
}


// ---------- AI HELPER ----------

function toggleAI() {

    const chat = document.getElementById("aiChat");

    if (!chat) {
        return;
    }

    chat.classList.toggle("active");
}


function aiEnter(event) {

    if (event.key === "Enter") {
        sendAI();
    }
}


function sendAI() {

    const input = document.getElementById("aiInput");
    const messages = document.getElementById("aiMessages");

    if (!input || !messages) {
        return;
    }

    const question = input.value.trim();

    if (!question) {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "ai-message user";

    userMessage.textContent = question;

    messages.appendChild(userMessage);

    input.value = "";

    let reply =
        "I can help you find food, restaurants, offers and manage your order.";

    const lowerQuestion = question.toLowerCase();

    if (
        lowerQuestion.includes("burger")
    ) {
        reply =
            "Try Burger Singh 🍔. Their Classic Chicken Burger is ₹149.";
    }

    else if (
        lowerQuestion.includes("pizza")
    ) {
        reply =
            "Pizza Paradise 🍕 has pizzas starting from ₹199.";
    }

    else if (
        lowerQuestion.includes("cheap") ||
        lowerQuestion.includes("budget")
    ) {
        reply =
            "For budget food, check our menu for items under ₹200.";
    }

    else if (
        lowerQuestion.includes("order")
    ) {
        reply =
            "You can check your orders from the Orders section.";
    }

    else if (
        lowerQuestion.includes("wallet")
    ) {
        reply =
            "Your BZ Boys Food wallet balance is ₹" + wallet + ".";
    }

    else if (
        lowerQuestion.includes("book")
    ) {
        reply =
            "You can book a restaurant table from the Bookings section.";
    }

    else if (
        lowerQuestion.includes("hello") ||
        lowerQuestion.includes("hi")
    ) {
        reply =
            "Hey! 👋 I'm your BZ Boys Food AI helper. What would you like to eat?";
    }

    setTimeout(function () {

        const botMessage = document.createElement("div");

        botMessage.className = "ai-message bot";

        botMessage.textContent = reply;

        messages.appendChild(botMessage);

        messages.scrollTop = messages.scrollHeight;

    }, 400);
}


// ---------- TOAST ----------

function toast(message) {

    const toastElement = document.getElementById("toast");

    if (!toastElement) {
        alert(message);
        return;
    }

    toastElement.textContent = message;

    toastElement.classList.add("show");

    setTimeout(function () {
        toastElement.classList.remove("show");
    }, 2500);
}


// ---------- INITIALIZATION ----------

document.addEventListener("DOMContentLoaded", function () {

    renderRestaurants();

    updateCartCount();

    renderProfile();

    renderWallet();

    renderBookings();

    renderFavorites();

});