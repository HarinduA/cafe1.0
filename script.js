document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper for the blogs section images (image overlay)
    const blogsSwiper = new Swiper('.image-overlay', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Menu category filtering (as before)
    const categoryButtons = document.querySelectorAll(".category-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Remove the active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            // Add the active class to the clicked button
            button.classList.add("active");

            // Filter menu items
            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
