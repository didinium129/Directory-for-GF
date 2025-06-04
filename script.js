// script.js

const restaurants = [
    {
        id: "monkey-grounds",
        name: "Monkey Grounds Coffee",
        type: "Café",
        address: "Benigno Aquino Ave, Mandurriao, Iloilo City",
        opening: "6:30 AM",
        closing: "10:00 PM",
        menu: "https://drive.google.com/file/d/1355fkx7u3Bh8TMUOIajL6Z4Qz8S4r76H/view?usp=sharing",
        notes: "Salads, Pasta, Pizza, Vegan, Rice, Tea, Coffee.",
        photos: [
            "https://i.imgur.com/rox1YZp_d.png?maxwidth=520&shape=thumb&fidelity=high",
            "https://i.imgur.com/nTrsnu4_d.png?maxwidth=520&shape=thumb&fidelity=high"
        ]
    },
    {
        id: "kucho-cafe",
        name: "Kucho Cafe",
        type: "Café",
        address: "Pison Ave, San Rafael, Mandurriao, Iloilo City",
        opening: "9:00 AM",
        closing: "8:00 PM",
        menu: "https://drive.google.com/file/d/1yH_SAV-xgcnaOIUgMFijqzMSyGFLGeJH/view?usp=share_link",
        notes: "Salad wraps, Appetizers, Burgers, Coffee.",
        photos: [
            "https://i.imgur.com/T9OTrFd_d.png?maxwidth=520&shape=thumb&fidelity=high",
            "https://i.imgur.com/aPOyRTn.png"
        ]
    },
    {
        id: "drip-coffee-community",
        name: "Drip Coffee & Community",
        type: "Café",
        address: "Greenfields Complex, Diversion Rd, Mandurriao, Iloilo City",
        opening: "7:00 AM",
        closing: "8:00 PM (10 PM Fri-Sat)",
        menu: "https://drive.google.com/file/d/1ItQTZpA36V1dHdc0GcjDvE30vZavXxtD/view?usp=sharing",
        notes: "Coffee, Tea, Pasta",
        photos: [
            "https://i.imgur.com/rpAekrP.png",
            "https://i.imgur.com/N729oCp.png"
        ]
    },
    {
        id: "house-of-monkeys",
        name: "House of Monkeys Cafe",
        type: "Café",
        address: "Atria, Donato Pison Ave, Mandurriao, Iloilo City",
        opening: "6:00 AM",
        closing: "9:00 PM",
        menu: "https://link-to-menu.com",
        notes: "TO FOLLOW MENU - waiting response.",
        photos: [
            "https://i.imgur.com/kUeP1Pv.png",
            "https://i.imgur.com/ttweTVW.png"
        ]
    },
    {
        id: "aroma-cafe",
        name: "Aroma Cafe",
        type: "Café",
        address: "City Times Square, Mandurriao, Iloilo City",
        opening: "9:00 AM",
        closing: "9:00 PM; 12:00 AM (Fri-Sat); 10 PM (Sun)",
        menu: "https://drive.google.com/drive/folders/1jmAyyhjBsJpyWlKF3JGOmZJZ7ZL5lCao?usp=sharing",
        notes: "Coffee, Meals",
        photos: [] // no photos provided
    }
];

// Highlight search terms helper
function highlight(text, term) {
    if (!term) return text;
    return text.replace(new RegExp(`(${term})`, 'gi'), `<mark>$1</mark>`);
}

// Display restaurant cards with photo gallery
function displayRestaurants(filter = "") {
    const directory = document.getElementById('directory');
    directory.innerHTML = "";
    const filterTerm = filter.trim().toLowerCase();

    const filteredRestaurants = restaurants.filter(place =>
        place.name.toLowerCase().includes(filterTerm) ||
        place.type.toLowerCase().includes(filterTerm) ||
        place.address.toLowerCase().includes(filterTerm) ||
        place.notes.toLowerCase().includes(filterTerm)
    );

    if (filteredRestaurants.length === 0) {
        directory.innerHTML = "<p style='color: #b58e6b; text-align:center;'>No matches found. Try a different search!</p>";
    }

    filteredRestaurants.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card';

        // Highlight matches
        const name = highlight(place.name, filter);
        const type = highlight(place.type, filter);
        const address = highlight(place.address, filter);
        const notes = highlight(place.notes, filter);

        // Build gallery HTML
        let galleryHTML = '';
        if (place.photos && place.photos.length) {
            galleryHTML = `<div class="photo-gallery">` +
                place.photos.map(url => `<img src="${url}" alt="Ambiance photo of ${place.name}" loading="lazy">`).join('') +
                `</div>`;
        }

        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Hours:</strong> ${place.opening} - ${place.closing}</p>
            <p><button class="menu-btn" data-id="${place.id}">View Menu</button></p>
            <p>${notes}</p>
            ${galleryHTML}
        `;

        directory.appendChild(card);
    });
}

// Initial display
displayRestaurants();

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    displayRestaurants(e.target.value);
});

// New: handle "View Menu" button clicks
document.addEventListener('click', e => {
    const btn = e.target.closest('.menu-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    window.location.href = `menu.html?id=${encodeURIComponent(id)}`;
});