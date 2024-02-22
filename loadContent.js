// loadContent.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the template content
    fetch('template.html')
        .then(response => response.text())
        .then(template => {
            // Insert the template into the #template div
            document.getElementById("template").innerHTML = template;
            
            // Get the current page's filename (e.g., "index.html", "about.html")
            var currentPage = window.location.pathname.split("/").pop();

            // Fetch the content of the current page
            fetch(currentPage)
                .then(response => response.text())
                .then(content => {
                    // Insert the specific content into the #content div
                    document.getElementById("content").innerHTML = content;
                })
                .catch(error => console.error('Error loading content:', error));
        })
        .catch(error => console.error('Error loading template:', error));
});
