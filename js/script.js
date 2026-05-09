// Tab Navigation
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize - show home tab on load
document.addEventListener('DOMContentLoaded', function() {
    showTab('home');
});

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const interest = form.querySelector('select').value;
    const message = form.querySelector('textarea').value;
    
    // Create mailto link with form data
    const emailTo = 'your-email@example.com'; // CUSTOMIZE ME
    const subject = `Career Consulting Inquiry - ${interest}`;
    const body = `Name: ${name}\nEmail: ${email}\nArea of Interest: ${interest}\n\nMessage:\n${message}`;
    
    // Open email client
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form
    form.reset();
    alert('Opening your email client to send the message...');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
