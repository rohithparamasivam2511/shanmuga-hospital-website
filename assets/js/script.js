/**
 * KAVIN MEDICAL CENTER — ERODE
 * Core Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // ─── 1. Sticky Header Shrink on Scroll ───
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ─── 2. Mobile Drawer Navigation ───
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('navbar');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navMenu.classList.toggle('active');
            
            // Toggle menu icon
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (isActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu on link click
        document.querySelectorAll('#nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // ─── 3. Smooth Anchor Scrolling with Sticky Offset ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 110;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── 4. Active Navigation Indicator on Scroll ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav-links a');

    if (sections.length > 0 && navLinks.length > 0) {
        const updateActiveNavLink = () => {
            let current = '';
            sections.forEach(s => {
                const sectionTop = s.offsetTop - 140;
                if (window.pageYOffset >= sectionTop) {
                    current = s.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveNavLink, { passive: true });
        updateActiveNavLink();
    }

    // ─── 5. Appointment Form Submission Handler ───
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        // Pre-fill doctor in select if 'data-doctor' is clicked from doctor cards
        document.querySelectorAll('.btn-doctor-select').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const doctorName = this.getAttribute('data-doctor');
                const deptSelect = appointmentForm.querySelector('select[name="p_dept"]');
                if (deptSelect && doctorName) {
                    // Try to match or prefill
                    for (let option of deptSelect.options) {
                        if (option.text.includes(doctorName)) {
                            deptSelect.value = option.value;
                            break;
                        }
                    }
                }
            });
        });

        // Set default minimum date to today
        const dateInput = appointmentForm.querySelector('input[type="date"]');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            if (!dateInput.value) {
                dateInput.value = today;
            }
        }

        appointmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = appointmentForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;

            // Loading feedback
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> முன்பதிவு செய்யப்படுகிறது... | Verifying...';

            const formData = new FormData(appointmentForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Simulate fast backend response
                await new Promise(resolve => setTimeout(resolve, 1200));

                // Success Message Card
                appointmentForm.innerHTML = `
                    <div style="text-align: center; padding: 32px 16px;">
                        <div style="width: 64px; height: 64px; background: #0D9488; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; font-size: 1.8rem; box-shadow: 0 4px 16px rgba(13, 148, 136, 0.35);">
                            <i class="fas fa-check"></i>
                        </div>
                        <h4 style="font-size: 1.35rem; font-weight: 800; color: #0F2744; margin-bottom: 8px;">முன்பதிவு வெற்றியடைந்தது!</h4>
                        <p style="color: #64748B; font-size: 1rem; border-bottom: 1px solid #E2E8F0; padding-bottom: 16px; margin-bottom: 16px;">
                            Appointment Requested Successfully for <strong>${data.p_name || 'Patient'}</strong>
                        </p>
                        <div style="background: #F0FDFA; border: 1px solid #99F6E4; border-radius: 10px; padding: 14px; margin-bottom: 20px; text-align: left; font-size: 0.88rem; color: #0F766E;">
                            <p style="margin: 0 0 6px 0;"><strong>Department:</strong> ${data.p_dept || 'General Consultation'}</p>
                            <p style="margin: 0 0 6px 0;"><strong>Date:</strong> ${data.p_date || 'Selected Slot'}</p>
                            <p style="margin: 0;"><strong>Contact:</strong> ${data.p_phone || '-'}</p>
                        </div>
                        <p style="font-size: 0.92rem; font-weight: 600; color: #1E293B;">
                            எங்கள் மருத்துவக் குழு 15 நிமிடங்களில் உங்களை தொடர்பு கொள்ளும்.<br>
                            <small style="color: #64748B; font-weight: normal;">We will call you at ${data.p_phone} to confirm the slot.</small>
                        </p>
                        <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 22px; width: 100%; padding: 12px; font-size: 0.92rem;">
                            <i class="fas fa-redo"></i> புதிய முன்பதிவு | Book Another Appointment
                        </button>
                    </div>
                `;

                console.log('Kavin Medical Center - Appointment successfully logged:', data);

            } catch (err) {
                console.error('Submission Failed:', err);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                alert('Connection timeout. Please contact Kavin Medical Center directly at +91 63742 04706 / +91 73581 04706.');
            }
        });
    }
});
