// script.js

function navigateTo(section) {
    // Deselect all menu items
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => item.classList.remove('active'));

    // Highlight the selected menu item
    const selectedMenuItem = Array.from(menuItems).find(item => item.querySelector('a').getAttribute('onclick').includes(section));
    if (selectedMenuItem) {
        selectedMenuItem.classList.add('active');
    }

    // Update the main content area
    const content = document.querySelector('.Overview');
    content.innerHTML = getContentForSection(section);
}



// Auto-highlight the current page based on URL (if separate pages are used)
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll('.menu li a');

    menuItems.forEach(item => {
        const section = item.getAttribute("onclick")?.replace("navigateTo('", "").replace("')", "");
        
        if (section && currentPage.includes(section)) {
            item.parentElement.classList.add("active");
        }
    });
});
