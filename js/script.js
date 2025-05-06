document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const menuItems = document.querySelectorAll(".menu-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const category = this.getAttribute("data-category");

            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            menuItems.forEach(item => {
                item.style.display = "none";
                if (item.getAttribute("data-category").includes(category) || category === "all") {
                    item.style.display = "block";
                }
            });
        });
    });
});

function toggleMenu() {
            var menu = document.getElementById("mobileMenu");
            if (menu.style.width === "250px") {
                menu.style.width = "0";
            } else {
                menu.style.width = "250px";
            }
        }