// Product List (Dynamic Requirement)
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Smartphone" },
  { id: "p3", name: "Headphones" },
  { id: "p4", name: "Smart Watch" }
];

const select = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// Footer Dates
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  "Last Updated: " + document.lastModified;