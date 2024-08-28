document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.querySelector(".mg-motors-accordion");
    if (!accordionContainer) return;

    const accordionItems = accordionContainer.querySelectorAll(".accordion-item");

    // Close all accordion items except the first one
    accordionItems.forEach((item, index) => {
        if (index !== 0) {
            item.removeAttribute("open");
        }
    });

    accordionItems.forEach(item => {
        item.addEventListener("click", function () {
            // Close all accordion items except the clicked one
            accordionItems.forEach(i => {
                if (i !== this) {
                    i.removeAttribute("open");
                }
            });

            if (!this.hasAttribute("open")) {
                this.setAttribute("open", "");
            } else {
                this.removeAttribute("open");
            }
        });
    });
});
