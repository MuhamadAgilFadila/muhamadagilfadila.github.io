const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggleBtn');
const mainContent = document.querySelector('.main-content');

window.addEventListener('click', (e) => {
    const target = e.target;

    if (target === toggleBtn) {
        sidebar.classList.toggle("collapse");

        if (sidebar.classList.contains('collapse')) {
            mainContent.style.left = '23%';
            mainContent.style.width = '77%';
        } else {
            mainContent.style.left = '8%';
            mainContent.style.width = '90%';
        }
    }

})