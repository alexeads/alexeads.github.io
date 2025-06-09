class HotDog {
  constructor(name, meat, toppings, bun, image) {
    this.name = name;
    this.meat = meat;
    this.toppings = toppings;
    this.bun = bun;
    this.image = image;
  }

  getSection() {
    return `
      <div class="image-box" onclick="showModal('${this.name}')">
        <img src="images/${this.image}" alt="${this.name}">
        <div class="overlay">${this.name}</div>
      </div>
    `;
  }
}

const hotdogs = [
  new HotDog('Relish Dog', 'Beef', 'Relish, Ketchup, Onion, Mustard', 'White', 'rhotdog.jpg'),
  new HotDog('USA Dog', 'Beef', ' Mustard,', 'White', 'usahotdog.jpg'),
  new HotDog('Mustard Dog', 'Beef', 'Mustard & Ketchup', 'White', 'mhotdog.jpg'),
  new HotDog('Animated Dog', 'Mystery Meat', 'Love & Fun', 'Cartoon Bun', 'ahotdog.jpg')
];

function displayHotdogs() {
  const container = document.getElementById('hotdogContainer');
  hotdogs.forEach(hotdog => {
    container.innerHTML += hotdog.getSection();
  });
}

function showModal(name) {
  const hotdog = hotdogs.find(h => h.name === name);
  if (hotdog) {
    document.getElementById('modalName').textContent = hotdog.name;
    document.getElementById('modalMeat').textContent = hotdog.meat;
    document.getElementById('modalToppings').textContent = hotdog.toppings;
    document.getElementById('modalBun').textContent = hotdog.bun;
    document.getElementById('modal').style.display = 'block';
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', displayHotdogs);