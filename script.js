document.addEventListener('DOMContentLoaded', () => {
    
    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('navbar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');

            // Toggle icon
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });

    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });


    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 130; // Adjust for the sticky primary/emergency header combo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Interactive Appointment Form Feedback ---
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = appointmentForm.querySelector('button');
            const originalContent = submitBtn.innerHTML;

            // Localized Loading Feedback
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> சரிபார்க்கப்படுகிறது... | Verifying...';

            const formData = new FormData(appointmentForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Simulation of Secure Log
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Clear & Show Success
                appointmentForm.innerHTML = `
                    <div style="text-align: center; padding: 40px 10px;">
                        <div style="width: 70px; height: 70px; background: #008B3E; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2rem;">
                            <i class="fas fa-check"></i>
                        </div>
                        <h4 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 10px;">முன்பதிவு வெற்றியடைந்தது!</h4>
                        <p style="color: #6B7280; font-size: 1.1rem; border-bottom: 1px solid #EEE; padding-bottom: 20px;">Requested Slot Captured Successfully.</p>
                        <p style="margin-top: 20px; font-weight: 700;">நாங்கள் 15 நிமிடங்களில் உங்களை அழைப்போம்.<br><small style="opacity: 0.6; font-weight: normal;">We will call you at ${data.p_phone} shortly.</small></p>
                        <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 30px; font-size: 0.9rem; padding: 10px 20px;">மறுபடியும் பதிவு செய்ய | Re-apply</button>
                    </div>
                `;

                console.log('Appoint Capture Successfully:', data);

            } catch (err) {
                console.error('Submission Failed:', err);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                alert('Connection timeout. Please contact us directly at +91 427 123 4567.');
            }
        });
    }

    // --- Reveal Animation on Scroll ---
    const reveal = () => {
        const reveals = document.querySelectorAll('.card, .doctor-card, .stat-item, .booking-section');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Staggered reveal setup
    const initAnimatedElements = () => {
        document.querySelectorAll('.card, .doctor-card, .stat-item, .booking-section, .hero-content, .hero-image').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    };

    initAnimatedElements();
    
    // Use Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .doctor-card, .stat-item, .booking-section, .hero-content, .hero-image').forEach(el => {
        observer.observe(el);
    });

});
