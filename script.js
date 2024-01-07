document.addEventListener("DOMContentLoaded", function() {
    // Select the button by its ID
    const learnMoreBtn = document.getElementById("learnMore");
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");
    // Add click event listener to the button
    learnMoreBtn.addEventListener("click", function() {
        // Scroll to the specified section smoothly when the button is clicked
        const abtSection = document.getElementById("abt");
        abtSection.scrollIntoView({ behavior: "smooth" });
    }); 
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scrolling to the target section
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
