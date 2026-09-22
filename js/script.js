document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // Dynamic footer year
    // =========================================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =========================================================
    // Back to Top Button
    // =========================================================

    const backToTopBtn = document.getElementById("backToTopBtn");

    if (backToTopBtn) {

        function toggleBackToTopButton() {

            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }

        }

        window.addEventListener("scroll", toggleBackToTopButton);

        backToTopBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        // Initial state
        toggleBackToTopButton();
    }


    // =========================================================
    // Close mobile navbar after clicking a link
    // =========================================================

    const navbarLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    navbarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbarCollapse =
                document.querySelector(".navbar-collapse");

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                if (typeof $ !== "undefined") {
                    $(navbarCollapse).collapse("hide");
                }

            }

        });

    });

});