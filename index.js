document.addEventListener("DOMContentLoaded", () => {
    const inventory = [];
    function createInventoryItemCard(item) {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");
      const itemImage = document.createElement("img");
      itemImage.setAttribute("src", item.img);
      const itemName = document.createElement("strong");
      itemName.textContent = item.name;
      const itemText = document.createElement("p");
      itemText.textContent = item.description;
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `Price: $${item.price}`;
      const itemStock = document.createElement("p");
      itemStock.textContent = `In Stock: ${item.stock}`;
      const orderSelector = document.createElement("div");
      orderSelector.classList.add("order-selector");
      const orderCount = document.createElement("span");
      orderCount.textContent = item.orderCount;
      const incrementButton = document.createElement("span");
      incrementButton.textContent = ":arrow_right:";
      const decrementButton = document.createElement("span");
      decrementButton.textContent = ":arrow_left:";
      incrementButton.addEventListener("click", () => {
        orderCount.textContent = ++item.orderCount;
      });
      decrementButton.addEventListener("click", () => {

      });
      orderSelector.appendChild(decrementButton);
      orderSelector.appendChild(orderCount);
      orderSelector.appendChild(incrementButton);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(itemPrice);
      itemCard.appendChild(itemStock);
      itemCard.appendChild(itemText);
      itemCard.appendChild(orderSelector);
      document.querySelector(".supplies").appendChild(itemCard);
    }
    function displayInventory() {
      for (const item of inventory) {
        createInventoryItemCard(item);
      }
    }
    function orderItem() {
      const orderedItems = inventory.filter((item) => item.orderCount > 0);
      if (orderedItems.length === 0) {
        alert("You have no items in your order.");
      } else {
        const message = orderedItems.map(
          (item) =>
            `${item.orderCount} order${item.orderCount > 1 ? "s" : ""} of ${
              item.name
            }`
        );
        alert(message.join("\n"));
      }
    }
    document.querySelector("#supply-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const newitem = {
        name: event.target.name.value,
        price: parseFloat(event.target.price.value),
        stock: parseInt(event.target.stock.value),
        img: event.target.img.value,
        orderCount: 0,
      };
      inventory.push(newitem);
      createInventoryItemCard(newitem);
      event.target.reset();
    });
    document.querySelector("#submit-button").addEventListener("click", orderItem);
    const inventoryItems = [
      {
        name: `Kwondo1/Peaceminusone`,
        price: 140.00,
        stock: 20,
        img: "https://media.zenfs.com/en/footwear_news_642/9cc488125c885c90f0f0a5c3886e3461", 
        img2: "https://store.yankeekicks.com/cdn/shop/products/Peaceminusone-Nike-Kwondo-1-DH2482-100-Release-Date-3-1068x965.jpg?v=1678133717",
        colorway: `White/White/White`,
        description: "Lorem ipsum dolor sit amet ",
        
      },
      {
        name: `Air Max BW OG`,
        price: 130.00,
        stock: 40,
        img: "imgs/tv.jpeg",
        colorway: `Black/Persian Violet/White`,
        description: "Lorem ipsum dolor sit amet ",
      },
      {
        name: `Air Jordan 1 MID`,
        price: 115.00,
        stock: 35,
        img: "imgs/xbox.jpeg",
        colorway: `White/Tropical Twist/Black`,
        description: "Lorem ipsum dolor sit amet ",
    
      },
      {
        name: `Air Max 90 NRG`,
        price: 150.00,
        stock: 5,
        img: "imgs/iphone.jpeg",
        colorway: `Summit White/Grey Fog/Black`,
        description: "Lorem ipsum dolor sit amet sit amet, ipsum dolor sit  ",
      },
      {
        name: `Air Force 1`,
        price: 115.00,
        stock: 50,
        img: "imgs/ps5.jpeg",
        colorway: `Black/Black/Black`,
        description: "Lorem ipsum dolor amet ",
      },
      

    ];
    for (const item of inventoryItems) {
      inventory.push(item);
    }
    displayInventory();
    // Add this to your "script.js" file
document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.querySelector(".image1");
    const image2 = document.querySelector(".image2");

    let showImage1 = true; // Initial state

    function toggleImages() {
        if (showImage1) {
            image1.style.display = "block";
            image2.style.display = "none";
        } else {
            image1.style.display = "none";
            image2.style.display = "block";
        }

        showImage1 = !showImage1; // Toggle the state
    }

    // Call the toggleImages function when an event triggers the image switch
    // For example, you can call it on a button click, a timer, or any other event.
    // Here's an example of calling it on a button click:

    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", toggleButton);
});

  });