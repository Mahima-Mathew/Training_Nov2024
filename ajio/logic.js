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
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240201/RBFt/65ba9fdc8cdf1e0df5dcb804/-473Wx593H-467027656-black-MODEL.jpg",
      description: "a black bag with a lot of zips and stuffs",
    },
    {
      id: 2,
      name: "Hoodie",
      price: "Rs 550",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20241121/4xyl/673ee1ca0f47f80c8798ece6/-473Wx593H-442695087-maroon-MODEL.jpg",
    },
    {
      id: 3,
      name: "Shirt",
      price: "Rs 570",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240502/OjDg/6633bd3916fd2c6e6ae33fad/-473Wx593H-442528942-navy-MODEL2.jpg",
    },
    {
      id: 4,
      name: "Nike Shoe",
      price: "Rs 2500",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240220/JIUb/65d4cac205ac7d77bb6a5d38/-473Wx593H-469581310-black-MODEL.jpg",
    },
    {
      id: 5,
      name: "Belt",
      price: "Rs 350",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240910/rP62/66e05f126f60443f316b288d/-473Wx593H-410142330-39321-MODEL.jpg",
    },
    {
      id: 6,
      name: "Leather Shoe",
      price: "Rs 1350",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240521/qELN/664c8be516fd2c6e6a1674c1/-473Wx593H-467348992-black-MODEL.jpg",
    },
    {
      id: 7,
      name: "Heels",
      price: "Rs 850",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240722/Mfgr/669e34741d763220fa0dff89/-473Wx593H-700216832-black-MODEL.jpg",
    },
    {
      id: 8,
      name: "Heels",
      price: "Rs 850",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240722/Mfgr/669e34741d763220fa0dff89/-473Wx593H-700216832-black-MODEL.jpg",
    },
    {
      id: 9,
      name: "Heels",
      price: "Rs 850",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240722/Mfgr/669e34741d763220fa0dff89/-473Wx593H-700216832-black-MODEL.jpg",
    },
    {
      id: 10,
      name: "Heels",
      price: "Rs 850",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240722/Mfgr/669e34741d763220fa0dff89/-473Wx593H-700216832-black-MODEL.jpg",
    },
    {
      id: 11,
      name: "Heels",
      price: "Rs 850",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240722/Mfgr/669e34741d763220fa0dff89/-473Wx593H-700216832-black-MODEL.jpg",
    },
    {
      id: 12,
      name: "Heels",
      price: "Rs 850",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240722/Mfgr/669e34741d763220fa0dff89/-473Wx593H-700216832-black-MODEL.jpg",
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
