const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

// ============= NAVBAR
// selecting items
const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.aside-navbar');
const sidebarBtn = document.querySelector('.close-nav');
const linksBtn = document.querySelectorAll('.x');
const btnContainer = document.querySelector('.btn-container');

linksBtn.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('show-bars');
  sidebar.classList.toggle('show-sidebar');
});

sidebarBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar');
  navToggle.classList.remove('show-bars');
});

// ============= NAVBAR
// selecting items
const menuContainer = document.querySelector('.menu-container');

window.addEventListener('DOMContentLoaded', function() {

  displayMenuItems(menu);

  displayFilterButtons();

});

// display filter buttons
function displayFilterButtons() {
  const category = menu.map(function(item) {
    return item.category;
  });

  const categories = category.reduce(function(values, item) {
    if(!values.includes(item)) {
      values.push(item);
    }
    return values;
  }, ['all']);

  const menuBtns = categories.map(function(item) {
    return `<button class="filter-btn" data-id="${item}" type="button">${item}</button>`
  }).join('');

  btnContainer.innerHTML = menuBtns;
  

  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const btnClicked = e.currentTarget.dataset.id;

      const filteredMenus = menu.filter(function (item) {
        if(btnClicked === item.category) {
          return item;
        };
      });

      if(btnClicked === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenus);
      }

    });
  });
};

// display menu items
function displayMenuItems(menuItem) {

  const menuItems = menuItem.map(function(item) {
    return `<article class="menu">
    <img src="${item.img}" class="menu__photo" alt="${item.title}" />
    <div class="menu-info">
        <header class="menu-header">
            <h4 class="title">${item.title}</h4>
            <h4 class="price">&#8369;${item.price}</h4>
        </header>
        <div class="menu-desc">
            <p>${item.desc}</p>
        </div>
    </div>
    <div class="menu-purchase">
            <div class="purchaseBtns-container">
                <button type="button" class="add">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <span class="item-quantity">10</span>
                <button type="button" class="minus">
                    <i class="fa-solid fa-minus"></i>
                </button>
            </div>
            <button class="purchase-btn">buy now</button>
        </div>
  </article>`
  }).join('');

  menuContainer.innerHTML = menuItems;

};


//  ==================== copyright ============

// selecting item
const copyright = document.querySelector('.copyright');

const year = new Date().getFullYear();

copyright.textContent = year;