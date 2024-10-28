const tele = 'data:image/png;base64,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'
const ig = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPbEdSyZrjNPqoAeroD0go1aOOes-JJv8v1jYwWSD-Zd10JR3&s'
const fb = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3qskp70YrxHrZfWJ58W1XhM1xaoO7A1tI9Eio34n1ZqS5es&s'
const wa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png'
const email = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPTMkZOlVCzWEJL4-PHTEahJq3szxYIycZ6Kg6LjxG04Goqn8&s'
const web = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVcU3XLSEQMZPeJRSDJtxDY8WGkfoRhPKaqMIEsYpmlJSct0&s'

const teleD = 'Chat Via Telegram'
const igD = 'Chat Via Instagram'
const fbD = 'Chat Via Facebook'
const waD = 'Chat Via WhatsApp'
const emailD = 'Chat Via Email'
const webD = 'Order Via Website'

const products = [
    {
        id: 1,
        name: "1000 Followers Tiktok",
        price: 7000,
        image: "https://files.catbox.moe/0qvmlc.jpg",
        description: "Followers murah berkualitas",
        author: "Varrel",
        features: [
            "Permanent"
            "Garansi 7 Hari"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: Jangan Telepon & Spam,
               link: 'https://wa.me/628893609279?text=Bang+order+1000+followers+tiktok'
            },
        ]
    },
    {
        id: 2,
        name: "2000 Followers tiktok",
        price: 14.000,
        image: "https://files.catbox.moe/jwqy7w.jpg",
        description: "Followers murah berkualitas.",
        author: "Varrel",
        features: [
            "Permanent",
        ],
        paymentMethods: [
            {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+order+2000+followers+tiktok'
            },
        ]
    },
    {
        id: 10,
        name: "1000 Likes tiktok",
        price: 3000,
        image: "https://files.catbox.moe/85g60m.jpg",
        description: "Likes Tiktok murah berkualitas",
        author: "Varrel",
        features: [
            "Permanent",
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+order+1000+likes+tiktok'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/XiaoYuTierSSS'
            },
        ]
    },
    {
        id: 12,
        name: "2000 Likes tiktok",
        price: 6000,
        image: "https://files.catbox.moe/31r5is.jpg",
        description: "Likes tiktok murah berkualitas",
        author: "Varrel",
        features: [
            "Permanent"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+order+2000+likes+tiktok'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/XiaoYuTierSSS'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/relllzzz0928'
            }
        ]
    },
    {
        id: 3,
        name: "20.000 Views tiktok",
        price: 3000,
        image: "https://telegra.ph/file/4c96073370c1f31e015c1.jpg",
        description: "Views murah berkualitas",
        author: "Varrel",
        features: [
            "Permanent"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+order+20.000+Views+tiktok'
            },
            {
               logo: ig,
               description: igD,
               link: 'https://www.instagram.com/relllzzz0928'
            },
        ]
    },
    {
        id: 5,
        name: "40.000 Views tiktok",
        price: 6000,
        image: "https://telegra.ph/file/1aa5f3490241098746a03.jpg",
        description: "Views murah berkualitas",
        author: "Varrel",
        features: [
            "Permanent"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+order+40.000+views+tiktok'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/XiaoYuTierSSS'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/relllzzz0928'
            },
        ]
    },
    {
        id: 4,
        name: "Nokos Wa indonesia (+62)",
        price: 8000,
        image: "https://files.catbox.moe/0e9wy7.jpg",
        description: "Verif 1x, nomor dibeli dari web lain",
        author: "Varrel",
        features: [
            "Murah",
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+beli+nokos+indoesia'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/XiaoYuTierSSS'
            },
        ]
    },
    {
        id: 11,
        name: "Nokos Whatsapp Philippines ",
        price: 12.000,
        image: "https://files.catbox.moe/k9asur.jpg",
        description: "Verif 1x, nomor ini dibeli dari web lain",
        author: "Varrel",
        features: [
            "Murah"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/628893609279?text=Bang+beli+nokos+philippines'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/XiaoYuTierSSS'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/relllzzz0928'
            }
        ]
        ]







// Generate product list
const productsSection = document.querySelector(".products");
products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2 class="tityd">${product.name}</h2>
        <p>Rp ${product.price.toLocaleString('id-ID')}</p>
    `;
    productCard.addEventListener('click', () => openProductDetail(product));
    productsSection.appendChild(productCard);
});

function openProductDetail(product) {
    const overlay = document.getElementById("product-detail-overlay");
    const detailContent = document.getElementById("product-detail");
    const overlayContent = document.getElementById("product-detail-content");
    
    detailContent.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        </div>
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
            <p>${product.description}</p>
            <h3>Di Publikasi Oleh</h3>
              <h5>✒️ ${product.author}</h5>
            <h3>Keunggulan Produk</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="buy-button" onclick="openPaymentMenu(${product.id})">Beli Produk</button>
    `;
    
    overlay.style.display = "block";
    overlayContent.scrollTop = 0;
    
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    // Reset payment menu state
    document.getElementById('payment-menu').classList.remove('active');
    document.getElementById('close-detail').style.display = 'flex';
}

function openPaymentMenu(productId) {
    const product = products.find(p => p.id === productId);
    const paymentMenu = document.getElementById('payment-menu');
    const paymentOptions = document.getElementById('payment');

    paymentOptions.innerHTML = product.paymentMethods.map(method => `
        <div class="payment-option" onclick="selectPaymentMethod('${method.link}')">
        <img src="${method.logo}" alt="${method.description}">
        <span class="payy">${method.description}</span>
      </div>
    `).join('');

    paymentMenu.classList.add('active');
}

function selectPaymentMethod(link) {
    window.location.href = link;
}

// Close payment menu when clicking outside
document.addEventListener('click', (event) => {
    const paymentMenu = document.getElementById('payment-menu');
    if (paymentMenu.classList.contains('active') && !paymentMenu.contains(event.target) && !event.target.classList.contains('buy-button')) {
        paymentMenu.classList.remove('active');
    }
});

function animateCount(elementId, target, duration) {
    const element = document.getElementById(elementId);
    const start = 0;
    const increment = target / (duration / 16); // 16ms adalah sekitar 60fps
    let current = start;

    const animateCount = () => {
        current += increment;
        element.textContent = Math.floor(current).toLocaleString();

        if (current < target) {
            requestAnimationFrame(animateCount);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    animateCount();
}

document.addEventListener('DOMContentLoaded', () => {
    animateCount('seller-count', 24, 4000); // Total Penjual
    animateCount('sales-count', 28, 4000); // Total Terjual
    animateCount('sell', 56, 4000);
    
    const closeButton = document.getElementById('close-detail');
    closeButton.addEventListener('click', closeProductDetail);
});

document.querySelectorAll('.product-item').forEach((item, index) => {
    item.addEventListener('click', () => openProductDetail(products[index]));
});

// Close the overlay when clicking outside the content
document.getElementById("product-detail-overlay").addEventListener('click', (event) => {
    if (event.target.id === "product-detail-overlay") {
        closeProductDetail();
    }
});

// Function to close product detail overlay
let lastScrollPosition = 0;

function closeProductDetail() {
    const overlay = document.getElementById("product-detail-overlay");
    const overlayContent = document.getElementById("product-detail-content");
    const closeButton = document.getElementById('close-detail');
    
    // Save the last scroll position
    lastScrollPosition = overlayContent.scrollTop;
    
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
        closeButton.style.display = 'none'; // Hide the close button
    }, 300); // Wait for the animation to complete
}

const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const searchTrigger = document.querySelector('.search-container .search-bar input');
const searchTriggerBtn = document.querySelector('.search-container .search-bar button');
const backButton = document.getElementById('back-button');

function openSearchOverlay() {
    searchOverlay.classList.add('active');
    searchInput.focus();
    searchInput.placeholder = searchTrigger.placeholder;
}

function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
}

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    displaySearchResults(filteredProducts);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No products found.</p>';
        return;
    }

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString('id-ID')}</p>
            </div>
        `;
        resultItem.addEventListener('click', () => {
            openProductDetail(product);
            closeSearchOverlay();
        });
        searchResults.appendChild(resultItem);
    });
}

searchTrigger.addEventListener('click', openSearchOverlay);
searchTriggerBtn.addEventListener('click', openSearchOverlay);
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

backButton.addEventListener('click', closeSearchOverlay);

document.getElementById("product-detail-overlay").addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform' && event.target.classList.contains('active')) {
        const overlayContent = document.getElementById("product-detail-content");
        overlayContent.scrollTop = 0;
    }
});
