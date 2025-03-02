// Array of Social Media Links
const socialMediaLinks = [
    { platform: 'Facebook', url: 'https://facebook.com/yourpage', icon: 'fab fa-facebook', className: 'facebook' },
    { platform: 'Twitter', url: 'https://twitter.com/yourpage', icon: 'fab fa-twitter', className: 'twitter' },
    { platform: 'Instagram', url: 'https://instagram.com/yourpage', icon: 'fab fa-instagram', className: 'instagram' },
    // { platform: 'LinkedIn', url: 'https://linkedin.com/yourpage', icon: 'fab fa-linkedin', className: 'linkedin' },
    { platform: 'YouTube', url: 'https://youtube.com/yourpage', icon: 'fab fa-youtube', className: 'youtube' }
];

// Function to Dynamically Load Social Links
function loadSocialLinks() {
    const container = document.getElementById('social-links');
    socialMediaLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = link.className;
        a.target = '_blank';
        a.innerHTML = `<i class="${link.icon}"></i> ${link.platform}`;
        container.appendChild(a);
    });
}

// Load links on page load
window.onload = loadSocialLinks;
