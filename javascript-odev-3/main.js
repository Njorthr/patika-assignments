const menu = [
    {
      id: 1,
      title: "Chestnut Soup",
      category: "French",
      price: 6.99,
      img:
        "https://i.pinimg.com/564x/97/44/37/974437fb8d8adcdfcede7b293a2368ed.jpg",
      desc: `This silky smooth, creamy soup is a star during holidays. Its earthy flavors warm the heart and soul.`,
    },
    {
      id: 2,
      title: "Cabbage Rolls",
      category: "German",
      price: 5.99,
      img:
        "https://i.pinimg.com/564x/93/0c/74/930c74ee95cbf0f61e59c72783322b0e.jpg",
      desc: `Cabbage rolls, or Kohlrouladen, are a classic German comfort food dish discovered 1500 years ago. `,
    },
    {
      id: 3,
      title: "Greek Fries ",
      category: "Greek",
      price: 8.99,
      img:
        "https://i.pinimg.com/564x/94/e5/02/94e502b1c0484b4a7361ef2ede444a60.jpg",
      desc: `Greek fries are thicker than your average French fries and are flavored with feta, garlic, and oregano. `,
    },
    {
      id: 4,
      title: "Margherita Pizza",
      category: "Italian",
      price: 12.99,
      img:
        "https://i.pinimg.com/564x/b9/01/9b/b9019ba0612467c3033a8f7d3e8d5824.jpg",
      desc: `Pizza Margherita is a wildly popular Italian classic that carries the country’s flag. Think red tomatoes, white mozzarella, and green basil. `,
    },
    {
      id: 5,
      title: "Keftedakia",
      category: "Greek",
      price: 12.99,
      img:
        "https://i.pinimg.com/564x/64/89/9d/64899d5eb7d93044646ddd6439abf4b7.jpg",
      desc: `Keftedes, or Keftedakia (smaller Keftedes), refers to traditional Greek meatballs and is a favorite picnic food in Greece.`,
    },
    {
      id: 6,
      title: "Bratkartoffeln",
      category: "German",
      price: 9.99,
      img:
        "https://i.pinimg.com/564x/a8/2d/0e/a82d0e3c28b3617e3dd86f4b13ac948f.jpg",
      desc: `German Pan-Fried Potatoes`,
    },
    {
      id: 7,
      title: "Skordalia",
      category: "Greek",
      price: 15.99,
      img:
        "https://i.pinimg.com/564x/6d/a5/c7/6da5c7b8be874d3ec5208a00a7bc0122.jpg",
      desc: `Greek garlic dip with a thick base made of puréed potatoes.

      Some use liquid-soaked stale bread, walnuts, or almonds for a bulky base. `,
    },
    {
      id: 8,
      title: "Croque Monsieur",
      category: "French",
      price: 12.99,
      img:
        "https://i.pinimg.com/564x/50/4e/f6/504ef6f10dcba2d480ddcccd8398578e.jpg",
      desc: `Treat your taste buds with a French delight and make this classic ham and cheese sandwich — Croque Monsieur.`,
    },
    {
      id: 9,
      title: "Italian Brownie Cake",
      category: "Italian",
      price: 8.99,
      img:
        "https://i.pinimg.com/564x/55/8f/22/558f222a162bac392bc0380a2953ab25.jpg",
      desc: `It’s light and tender, and it resembles a soft and fudgy brownie.`,
    },
];
const buttonContainer = document.querySelector(".btn-container")
// kategorileri belirle

const categories = menu.reduce(
    (prevValue, currValue) => {
        if(!prevValue.includes(currValue.category)) {
            prevValue.push(currValue.category)
        }
        console.log(prevValue);
        return prevValue;
    }, ["All"]
)
console.log(categories);
const initializeMenu = () => {
    
const filterButtons = categories.map(item => {
    return `<button class="btn btn-outline-dark btn-item filter-btn" data-id=${item}>${item}</button>`
}).join("")

buttonContainer.innerHTML = filterButtons

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        const category = e.currentTarget.dataset.id
        console.log(category);
        const menuCategory = menu.filter(menuItem => {
            if(menuItem.category === category) {
                return menuItem
            }    
        })
        category === "All" ? menuList(menu) : menuList(menuCategory)
    })
})

menuList(menu)
}
const section = document.querySelector(".section-center")
const menuList = (menuItems) => {
    let displayed = menuItems.map(item => {
        return `<div class="menu-items col-lg-6 col-sm-12">
        <img
            src="${item.img}"
            alt="${item.title}"
            class="photo"
        />
        <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
        </div>
        </div>
        `
    }).join("")
    section.innerHTML = displayed
}

initializeMenu()
