const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Fill recent payments
recentPayments.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                <td>${order.id}</td>
                <td>${order.nome}</td>
                <td class="${
                  order.pagamento === "Decline"
                    ? "Danger"
                    : order.pagamento === "pendente"
                    ? "warning"
                    : "primary"
                }">${order.pagamento}</td>
                <td class="primary">${order.status}</td> 
              `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
