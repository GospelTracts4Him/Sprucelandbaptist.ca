document.addEventListener("DOMContentLoaded", function () {
    console.log("loadContent.js is running.");  // Add this line to log a message

    // Get the current page's filename (e.g., "index.html", "about.html")
    var currentPage = window.location.pathname.split("/").pop();

    // Fetch the content for the current page
    fetch(currentPage)
        .then(response => response.text())
        .then(content => {
            // Insert the specific content into the content area
            document.getElementById("content").innerHTML = content;
        })
        .catch(error => console.error('Error loading content:', error));
});
