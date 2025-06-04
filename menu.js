// menu.js
import { restaurants } from './restaurants.js';

// 1. Read “id” from URL, e.g. ?id=monkey-grounds
const params = new URLSearchParams(window.location.search);
const cafeId = params.get('id');

// 2. Look up that café in restaurants.js
const cafe = restaurants.find(r => r.id === cafeId);

// 3. If not found, show an error and STOP
if (!cafe) {
  document.body.innerHTML = `
    <p style="text-align:center; padding:2rem;">
      Menu not found. <a href="index.html">Back to directory</a>
    </p>`;
  throw new Error('Invalid café id');
}

// 4. Replace “Loading…” with the café name
document.getElementById('cafeName').textContent = cafe.name;

// 5. Wire up the back button
document.getElementById('backBtn').addEventListener('click', () => {
  // If index.html is in the same folder, this goes back there
  window.location.href = 'index.html';
});

// 6. Build the category dropdown from cafe.menu
const catFilter = document.getElementById('catFilter');
const uniqueCats = [...new Set(cafe.menu.map(item => item.category))];
uniqueCats.forEach(cat => {
  const opt = document.createElement('option');
  opt.value = cat;
  opt.textContent = cat;
  catFilter.appendChild(opt);
});

// 7. References to search input + menuList container
const searchInput = document.getElementById('searchMenu');
const listEl      = document.getElementById('menuList');

// 8. Rendering function
function renderMenu() {
  const term = searchInput.value.trim().toLowerCase();
  const chosenCat = catFilter.value;
  listEl.innerHTML = '';

  // Filter items by name + category
  const filtered = cafe.menu.filter(({ item, category }) => {
    const matchesCat  = chosenCat ? category === chosenCat : true;
    const matchesTerm = item.toLowerCase().includes(term);
    return matchesCat && matchesTerm;
  });

  // If nothing matches, show a message
  if (!filtered.length) {
    listEl.innerHTML = `
      <p style="text-align:center; color:var(--accent); padding:1rem;">
        No items match your search.
      </p>`;
    return;
  }

  // Otherwise, build each menu‐card
  filtered.forEach(({ item, price, category }) => {
    const card = document.createElement('div');
    card.className = 'menu-card';

    card.innerHTML = `
      <span class="item-name">${item}</span>
      <span class="dots"></span>
      <span class="item-price">₱${price}</span>
      <span class="item-cat">${category}</span>
    `;
    listEl.appendChild(card);
  });
}

// 9. Hook up search + dropdown
searchInput.addEventListener('input', renderMenu);
catFilter.addEventListener('change', renderMenu);

// 10. Initial render
renderMenu();