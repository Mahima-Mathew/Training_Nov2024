//checkbox selection js
const checkboxes = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".card");

// Function to filter cards
function filterCards() {
  const selectedCategories = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  cards.forEach((card) => {
    const isMatch = selectedCategories.some((category) =>
      card.classList.contains(category)
    );
    card.style.display =
      isMatch || selectedCategories.length === 0 ? "block" : "none";
  });
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", filterCards)
);

filterCards();

// login data retrieval

document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const phnoInput = document.getElementById("phno");
  const joinButton = document.getElementById("joinButton");

  joinButton.addEventListener("click", () => {
    const uname = usernameInput.value.trim();
    const phno = phnoInput.value.trim();

    //alert message
    if (uname && phno) {
      alert(`Logged In Successfully`);
    } else {
      alert("Please fill out all fields.");
    }

    usernameInput.value = "";
    phnoInput.value = "";
  });
});

//modal selection object
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Fancy bag",
      price: "Rs 600",
      image: "./images/item1.avif",
      description: "a black bag with a lot of zips and stuffs",
    },
    {
      id: 2,
      name: "Hoodie",
      price: "Rs 550",
      image: "./images/item2.avif",
    },
    {
      id: 3,
      name: "Shirt",
      price: "Rs 570",
      image: "./images/item3.avif",
    },
    {
      id: 4,
      name: "Nike Shoe",
      price: "Rs 2500",
      image: "./images/item4.avif",
    },
    {
      id: 5,
      name: "Belt",
      price: "Rs 350",
      image: "./images/item5.avif",
    },
    {
      id: 6,
      name: "Leather Shoe",
      price: "Rs 1350",
      image: "./images/item6.avif",
    },
    {
      id: 7,
      name: "Heels",
      price: "Rs 850",
      image: "./images/item7.avif",
    },
    {
      id: 8,
      name: "Heels",
      price: "Rs 850",
      image: "./images/item8.avif",
    },
    //change the values from here,mahima
    {
      id: 9,
      name: "DinnerSet",
      price: "Rs 200",
      image: "./images/item9.avif",
    },
    {
      id: 10,
      name: "Lipcolor",
      price: "Rs 120",
      image: "./images/item10.avif",
    },
    {
      id: 11,
      name: "Kurta",
      price: "Rs 490",
      image: "./images/item11.avif",
    },
    {
      id: 12,
      name: "Shoe",
      price: "Rs 450",
      image: "./images/item12.avif",
    },
  ];

  document.querySelectorAll(".view-details-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".product-card");
      const productId = parseInt(card.getAttribute("data-id"), 10);

      const product = products.find((p) => p.id === productId);

      if (product) {
        document.getElementById("modalProductTitle").textContent = product.name;

        document.getElementById("modalProductPrice").textContent =
          product.price;

        document.getElementById("modalProductDescription").textContent =
          product.description;

        document.getElementById("modalProductPicture").src = product.image;

        const modal = new bootstrap.Modal(
          document.getElementById("productDetailsModal")
        );
        modal.show();
      }
    });
  });
});
