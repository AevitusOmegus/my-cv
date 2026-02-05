// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    }
});

// Download CV as PDF
const downloadCVBtn = document.getElementById('download-cv');
downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a simple print-friendly PDF
    const printWindow = window.open('', '', 'width=800,height=600');
    const htmlContent = document.documentElement.innerHTML;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Abdullah Mushtaq - CV</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 800px; margin: 20px auto; padding: 20px; }
                h1, h2, h3 { color: #2c3e50; margin-top: 20px; }
                h3 { border-bottom: 2px solid #3498db; padding-bottom: 10px; }
                section { margin-bottom: 20px; }
                ul { margin-left: 20px; }
                li { margin-bottom: 8px; }
                .contact-info { display: flex; gap: 20px; flex-wrap: wrap; margin: 15px 0; }
                .contact-info a { color: #3498db; text-decoration: none; }
                .contact-form { display: none; }
                .header-top { display: none; }
                .experience-item, .education-item { margin-bottom: 15px; }
                .job-header, .school-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
                .date { color: #7f8c8d; font-size: 0.9em; }
                .company, .school { font-style: italic; color: #34495e; }
                .profile-photo { display: none; }
                @media print {
                    body { color: #000; }
                    a { color: #000; }
                }
            </style>
        </head>
        <body>
            ${document.querySelector('.container').innerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
    }, 250);
});

// Contact Form Submission
const contactForm = document.getElementById('message-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission (in a real scenario, this would be sent to a server)
    formMessage.textContent = 'Sending your message...';
    formMessage.className = 'form-message';
    
    setTimeout(() => {
        formMessage.textContent = `Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} soon.`;
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }, 1500);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#download-cv') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add stagger animation to items
window.addEventListener('load', () => {
    const items = document.querySelectorAll('.experience-item, .education-item, .form-group');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});
