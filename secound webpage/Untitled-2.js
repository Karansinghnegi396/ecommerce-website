// Logs the image link when clicked
document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(`Image link clicked: ${e.currentTarget.href}`);
    });
});
// Filter functionality for gallery
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        document.querySelectorAll('.gallery a').forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
