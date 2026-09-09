/**
 * KAVIN MEDICAL CENTER — ERODE
 * Core Interactive JavaScript with Language Localization (English Default / தமிழ்)
 */

document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. Comprehensive Bilingual i18n Dictionary ───
    const translations = {
        en: {
            "emergency_ribbon": "24/7 Emergency & Trauma",
            "emergency_call_label": "Emergency Hotline:",
            "emergency_opd": "OPD: Mon–Sun 8 AM – 7 PM",
            "emergency_location": "Gandhi Nagar, Perundurai Road, Erode",
            
            "nav_home": "Home",
            "nav_about": "About Us",
            "nav_specialties": "Specialties",
            "nav_doctors": "Doctors",
            "nav_facilities": "Facilities",
            "nav_contact": "Contact",
            "nav_book_btn": "Book Appointment",
            
            "hero_tagline": "Erode's Premier Multispecialty & Advanced Surgical Center",
            "hero_h2_main": "Your Health & Wellbeing,",
            "hero_h2_accent": "Our Utmost Priority.",
            "hero_sub": "Welcome to Kavin Medical Center, Erode — A center of medical distinction offering super-specialized Plastic & Cosmetic Surgery, Dedicated Burn Care, Hand Trauma, General & Laparoscopic Care, and 24/7 Critical Emergency response.",
            "hero_btn_book": "Book Appointment",
            "hero_btn_call": "Call Us | +91 63742 04706",
            "trust_1": "Super-Specialty Care",
            "trust_2": "25+ Yrs Expertise",
            "trust_3": "4.9 / 5 Rating",
            "trust_4": "24/7 Trauma Unit",
            "badge_amb_title": "24/7 Emergency Bay",
            "badge_amb_sub": "Ambulance & Trauma Support",
            
            "quick_1_title": "Book Appointment",
            "quick_1_sub": "Schedule your consultation online",
            "quick_2_title": "24/7 Emergency Care",
            "quick_2_sub": "Immediate doctor assistance",
            "quick_3_title": "Our Specialist Doctors",
            "quick_3_sub": "View consultant profiles",
            "quick_4_title": "Lab & Diagnostics",
            "quick_4_sub": "Digital X-Ray & pathology",
            
            "stat_1_title": "Years Surgical Mastery",
            "stat_1_sub": "Clinical Excellence",
            "stat_2_title": "Happy Recoveries",
            "stat_2_sub": "Treated Patients",
            "stat_3_title": "Specialty Departments",
            "stat_3_sub": "Modern Disciplines",
            "stat_4_title": "Emergency & ICU",
            "stat_4_sub": "Round-the-clock Care",
            
            "about_badge": "About Kavin Medical Center",
            "about_title": "A Beacon of Advanced Healthcare & Super-Specialty Surgery in Erode",
            "about_p1": "Kavin Medical Center is an advanced multispecialty healthcare landmark situated conveniently on Perundurai Road in Gandhi Nagar, Erode.",
            "about_p2": "Headed by renowned Medical Director Dr. G. I. Nambi (M.S., M.Ch.), our hospital is widely acclaimed across Western Tamil Nadu for complex reconstructive plastic surgery, dedicated acute burn rehabilitation, microvascular hand trauma surgery, laparoscopic operations, diabetic foot salvage, and comprehensive round-the-clock emergency medical response.",
            "about_check_1": "Premier Reconstructive & Burn Care Center",
            "about_check_2": "Advanced Modular Laminar Flow OTs",
            "about_check_3": "High-Dependency ICU & Critical Trauma Team",
            "about_check_4": "Dedicated Diabetic Foot Ulcer Salvage Clinic",
            "about_check_5": "24/7 In-House Pharmacy & Diagnostics",
            "about_check_6": "Compassionate bilingual patient care",
            "about_btn": "Meet Our Specialists",
            
            "about_card1_title": "Strategic Location in Erode",
            "about_card1_p": "68, Gandhi Nagar, Erode to Perundurai Main Road, Erode — 638011 (Easy highway accessibility).",
            "about_card2_title": "OPD & Emergency Timings",
            "about_card2_p": "Outpatient Consultations: Mon – Sun: 8:00 AM – 7:00 PM\nEmergency: 24 Hours / 7 Days Open",
            "about_card3_title": "Patient Trust & Excellence",
            "about_card3_p": "Rated 4.9 / 5 by thousands of families across Erode, Salem, Namakkal, and Coimbatore districts.",
            
            "spec_badge": "Clinical Departments",
            "spec_title": "Specialized Clinical Departments",
            "spec_sub": "Comprehensive multispecialty healthcare with super-specialized surgical excellence.",
            
            "spec_1_badge": "Super Specialty",
            "spec_1_title": "Plastic & Cosmetic Surgery",
            "spec_1_sub": "Aesthetic & Reconstructive Care",
            "spec_1_desc": "Aesthetic procedures, scar revision, facial reconstruction, and advanced cosmetic treatments.",
            
            "spec_2_badge": "Dedicated Unit",
            "spec_2_title": "Specialized Burn Care Center",
            "spec_2_sub": "Acute Burn Recovery",
            "spec_2_desc": "Specialized acute burn management, skin grafting, post-burn contracture release & holistic rehabilitation.",
            
            "spec_3_badge": "Microsurgery",
            "spec_3_title": "Hand & Microvascular Surgery",
            "spec_3_sub": "Precision Trauma Care",
            "spec_3_desc": "Hand injuries, tendon repair, nerve reconstructive surgery, and replantation procedures.",
            
            "spec_4_badge": "Minimally Invasive",
            "spec_4_title": "General & Laparoscopic Surgery",
            "spec_4_sub": "Advanced Keyhole Procedures",
            "spec_4_desc": "Advanced keyhole surgeries, hernia repair, gallbladder surgery, appendectomy, and gastrointestinal care.",
            
            "spec_5_badge": "Limb Salvage",
            "spec_5_title": "Diabetic Foot & Vascular Care",
            "spec_5_sub": "Wound & Vascular Clinic",
            "spec_5_desc": "Diabetic foot ulcer management, preventive limb salvage, vascular repair, and chronic wound healing.",
            
            "spec_6_badge": "24/7 Available",
            "spec_6_title": "Emergency & Trauma Critical Care",
            "spec_6_sub": "Rapid Response Center",
            "spec_6_desc": "Rapid emergency resuscitation, trauma care, 24/7 ambulance support, and immediate physician attention.",
            
            "spec_7_badge": "Intensive Care",
            "spec_7_title": "ICU & In-Patient Healthcare",
            "spec_7_sub": "Critical Care Unit",
            "spec_7_desc": "State-of-the-art multi-parameter monitors, ventilators, aseptic wards, and private recovery suites.",
            
            "spec_8_badge": "High Precision",
            "spec_8_title": "Diagnostic Lab & Digital X-Ray",
            "spec_8_sub": "Fast Accurate Reports",
            "spec_8_desc": "Comprehensive pathology, hematology, biochemistry, and computerized digital radiography.",
            
            "doc_badge": "Specialist Doctors",
            "doc_title": "Meet Our Leading Medical Specialists",
            "doc_sub": "Highly qualified and experienced surgeons and physicians committed to ethical patient care.",
            
            "doc_1_name": "Dr. G. I. Nambi",
            "doc_1_qual": "M.S., M.Ch. (Plastic Surgery)",
            "doc_1_spec": "Medical Director, Chief Plastic & Burn Surgeon",
            "doc_1_time": "Mon – Sat: 9:00 AM – 2:00 PM",
            "doc_1_btn": "Book Consultation",
            
            "doc_2_name": "Dr. J. Vidhya Devi",
            "doc_2_qual": "MBBS, DGO, MS",
            "doc_2_spec": "Senior Consultant Specialist",
            "doc_2_time": "Mon – Sat: 10:00 AM – 4:00 PM",
            "doc_2_btn": "Book Consultation",
            
            "doc_3_name": "Dr. P. Arun Mozhi",
            "doc_3_qual": "MBBS, MD / DNB",
            "doc_3_spec": "Consultant Specialist & Critical Care",
            "doc_3_time": "Mon – Sun: 9:00 AM – 5:00 PM",
            "doc_3_btn": "Book Consultation",
            
            "doc_4_name": "Dr. P. Ajith Swaminath",
            "doc_4_qual": "MBBS, MS (General Surgery)",
            "doc_4_spec": "Consultant General & Laparoscopic Surgeon",
            "doc_4_time": "Mon – Sat: 11:00 AM – 6:00 PM",
            "doc_4_btn": "Book Consultation",
            
            "fac_badge": "Infrastructure",
            "fac_title": "World-Class Healthcare Infrastructure",
            "fac_sub": "Engineered for clinical precision, infection control, and patient comfort.",
            "fac_1_title": "Specialized Burn ICU",
            "fac_1_desc": "Sterile temperature-controlled burn treatment cubicles to prevent secondary infection.",
            "fac_2_title": "Modular Operation Theatres",
            "fac_2_desc": "Laminar airflow OTs equipped with advanced surgical microscopes and laparoscopic towers.",
            "fac_3_title": "24/7 Intensive Care Unit",
            "fac_3_desc": "Full ventilator support, advanced telemetry monitors, and dedicated critical care nursing.",
            "fac_4_title": "Digital X-Ray & Diagnostics",
            "fac_4_desc": "High-resolution low-radiation digital radiography with immediate physician review.",
            "fac_5_title": "24/7 In-House Pharmacy",
            "fac_5_desc": "Comprehensive availability of genuine prescription surgical, burn care, and critical medicines.",
            "fac_6_title": "In-Patient Wards & Suites",
            "fac_6_desc": "Hygienic general wards, semi-private rooms, and deluxe single air-conditioned recovery suites.",
            
            "book_badge": "Easy Online Booking",
            "book_title": "Book Your Doctor Consultation",
            "book_desc": "Schedule your consultation with our specialist doctors at Kavin Medical Center. Our desk will confirm your appointment within 15 minutes.",
            "book_perk_1": "OPD Hours: Monday – Sunday (8:00 AM – 7:00 PM)",
            "book_perk_2": "Emergency & Trauma: 24/7 Always Open for Immediate Care",
            "book_direct_label": "Call Direct for Quick Help",
            
            "form_title": "Book Consultation Slot",
            "form_sub": "Please fill out your details to schedule your visit",
            "form_label_name": "Patient Full Name *",
            "form_label_phone": "Phone Number *",
            "form_label_dept": "Department / Specialist *",
            "form_label_date": "Preferred Date *",
            "form_btn_submit": "Confirm Appointment",
            
            "contact_badge": "Location & Contact",
            "contact_title": "Visit Kavin Medical Center, Erode",
            "contact_sub": "Conveniently located on Erode–Perundurai Main Road with ample parking and direct emergency access.",
            "contact_addr_title": "Hospital Address",
            "contact_addr_desc": "68, Gandhi Nagar, Erode to Perundurai Main Road, Erode — 638 011, Tamil Nadu, India",
            "contact_phone_title": "Telephone Numbers",
            "contact_email_title": "Email Inquiry",
            "contact_time_title": "Working Hours",
            "contact_time_desc": "OPD Consultations: Monday – Sunday (8:00 AM – 7:00 PM)\nEmergency: 24/7 Always Open",
            
            "footer_desc": "Kavin Medical Center — Advanced Multispecialty & Super-Specialty Hospital in Erode dedicated to ethical clinical excellence, specialized plastic/burn surgery, and compassionate patient care.",
            "footer_nav_title": "Quick Navigation",
            "footer_spec_title": "Key Specialties",
            "footer_emg_title": "Emergency Contact",
            "footer_copy": "© 2026 Kavin Medical Center, Erode. All Rights Reserved."
        },
        ta: {
            "emergency_ribbon": "24/7 அவசர சிகிச்சை & விபத்து பிரிவு",
            "emergency_call_label": "அவசர உதவி அழைப்பு:",
            "emergency_opd": "OPD நேரம்: திங்கள்–ஞாயிறு 8 AM – 7 PM",
            "emergency_location": "காந்தி நகர், பெருந்துறை ரோடு, ஈரோடு",
            
            "nav_home": "முகப்பு",
            "nav_about": "எங்களை பற்றி",
            "nav_specialties": "துறைகள்",
            "nav_doctors": "மருத்துவர்கள்",
            "nav_facilities": "வசதிகள்",
            "nav_contact": "தொடர்புக்கு",
            "nav_book_btn": "முன்பதிவு செய்ய",
            
            "hero_tagline": "ஈரோட்டின் முதன்மை பல்நோக்கு & சிறப்பு அறுவை சிகிச்சை மையம்",
            "hero_h2_main": "உங்கள் ஆரோக்கியமே,",
            "hero_h2_accent": "எங்கள் மேலான லட்சியம்.",
            "hero_sub": "கவின் மருத்துவ மையம், ஈரோடு — அதிநவீன பிளாஸ்டிக் & ஒப்பனை அறுவை சிகிச்சை, தீக்காய சிறப்பு சிகிச்சை பிரிவு, கை மற்றும் நுண் அறுவை சிகிச்சை, பொது மற்றும் லேப்ராஸ்கோபிக் அறுவை சிகிச்சை மற்றும் 24/7 அவசர சிகிச்சையில் முன்னிலை வகிக்கும் மருத்துவமனை.",
            "hero_btn_book": "முன்பதிவு செய்ய",
            "hero_btn_call": "அழைக்க | +91 63742 04706",
            "trust_1": "சிறப்பு மருத்துவ சேவை",
            "trust_2": "25+ வருட அனுபவம்",
            "trust_3": "4.9 / 5 நன்மதிப்பு",
            "trust_4": "24/7 அவசர பிரிவு",
            "badge_amb_title": "24/7 ஆம்புலன்ஸ் மையம்",
            "badge_amb_sub": "விபத்து & அவசர சிகிச்சை",
            
            "quick_1_title": "முன்பதிவு செய்ய",
            "quick_1_sub": "பரிசோதனைக்கு பதிவு செய்க",
            "quick_2_title": "24/7 அவசர சிகிச்சை",
            "quick_2_sub": "உடனடி மருத்துவ உதவி",
            "quick_3_title": "எங்கள் மருத்துவர்கள்",
            "quick_3_sub": "நிபுணர்களின் விபரம்",
            "quick_4_title": "ஆய்வகம் & எக்ஸ்ரே",
            "quick_4_sub": "டிஜிட்டல் ஸ்கேன் & பரிசோதனை",
            
            "stat_1_title": "வருட அறுவை சிகிச்சை அனுபவம்",
            "stat_1_sub": "மருத்துவ சிறப்பு",
            "stat_2_title": "குணமடைந்த நோயாளிகள்",
            "stat_2_sub": "சிகிச்சை பெற்றோர்",
            "stat_3_title": "சிறப்பு மருத்துவப் பிரிவுகள்",
            "stat_3_sub": "நவீன துறைகள்",
            "stat_4_title": "அவசர தீவிர சிகிச்சை",
            "stat_4_sub": "முழுநேர மருத்துவம்",
            
            "about_badge": "எங்களை பற்றி",
            "about_title": "ஈரோட்டின் தலைசிறந்த பல்நோக்கு மற்றும் சிறப்பு அறுவை சிகிச்சை மையம்",
            "about_p1": "கவின் மருத்துவ மையம் ஈரோடு-பெருந்துறை மெயின் ரோட்டில் காந்தி நகரில் அமைந்துள்ள அதிநவீன பல்நோக்கு மருத்துவமனை ஆகும்.",
            "about_p2": "தலைமை மருத்துவ இயக்குனர் டாக்டர் ஜி. ஐ. நம்பி (M.S., M.Ch.) தலைமையில், பிளாஸ்டிக் அறுவை சிகிச்சை, தீக்காய சிறப்பு பராமரிப்பு, கை நுண் அறுவை சிகிச்சை, லேப்ராஸ்கோபிக் சிகிச்சை, சர்க்கரை நோய் கால் புண் சிகிச்சை மற்றும் 24 மணி நேர அவசர சிகிச்சையில் மேற்கு தமிழகத்தில் புகழ்பெற்ற மருத்துவமனை.",
            "about_check_1": "பிளாஸ்டிக் மற்றும் தீக்காய சிறப்பு சிகிச்சை மையம்",
            "about_check_2": "அதிநவீன அறுவை சிகிச்சை கூடங்கள் (Modular OT)",
            "about_check_3": "தீவிர சிகிச்சை பிரிவு (ICU) & அவசர குழு",
            "about_check_4": "சர்க்கரை நோய் கால் புண் சிறப்பு பராமரிப்பு",
            "about_check_5": "24/7 மருந்தகம் & அதிநவீன பரிசோதனை கூடம்",
            "about_check_6": "அன்பான கனிவான இருமொழி நோயாளி சேவை",
            "about_btn": "மருத்துவர்களை சந்திக்க",
            
            "about_card1_title": "முக்கிய அமைவிடம்",
            "about_card1_p": "68, காந்தி நகர், ஈரோடு - பெருந்துறை மெயின் ரோடு, ஈரோடு — 638011 (எளிதான போக்குவரத்து வசதி).",
            "about_card2_title": "OPD & அவசர சிகிச்சை நேரம்",
            "about_card2_p": "OPD நேரம்: திங்கள் – ஞாயிறு: 8:00 AM – 7:00 PM\nஅவசர சிகிச்சை: 24 மணி நேரமும் இயங்கும்",
            "about_card3_title": "மக்களின் நம்பிக்கை & நன்மதிப்பு",
            "about_card3_p": "ஈரோடு, சேலம், நாமக்கல், திருப்பூர் மற்றும் கோவை மாவட்ட மக்களால் 4.9/5 என மதிப்பிடப்பட்டுள்ளது.",
            
            "spec_badge": "மருத்துவ துறைகள்",
            "spec_title": "எங்கள் சிறப்பு மருத்துவ துறைகள்",
            "spec_sub": "அனைத்து விதமான பல்நோக்கு மற்றும் சிறப்பு அறுவை சிகிச்சை சேவைகள் ஒரே கூரையின் கீழ்.",
            
            "spec_1_badge": "சிறப்பு பிரிவு",
            "spec_1_title": "பிளாஸ்டிக் & அழகு அறுவை சிகிச்சை",
            "spec_1_sub": "ஒப்பனை & சீரமைப்பு அறுவை சிகிச்சை",
            "spec_1_desc": "முக சீரமைப்பு, தழும்புகள் நீக்குதல், அழகு அறுவை சிகிச்சைகள் மற்றும் மறுசீரமைப்பு அறுவை சிகிச்சைகள்.",
            
            "spec_2_badge": "தீக்காய பிரிவு",
            "spec_2_title": "தீக்காய சிறப்பு சிகிச்சை மையம்",
            "spec_2_sub": "தீக்காய அவசர பராமரிப்பு",
            "spec_2_desc": "தீக்காய சிகிச்சை, தோல் மாற்று அறுவை சிகிச்சை, தசை சுருக்கம் நீக்குதல் மற்றும் முழுமையான மறுவாழ்வு சிகிச்சை.",
            
            "spec_3_badge": "நுண் அறுவை சிகிச்சை",
            "spec_3_title": "கை & நுண் அறுவை சிகிச்சை",
            "spec_3_sub": "நரம்பு & தசை சிகிச்சை",
            "spec_3_desc": "கை விபத்து காயங்கள், நரம்பு மற்றும் தசைநார் இணைப்பு அறுவை சிகிச்சைகள், நுண் இரத்தநாள அறுவை சிகிச்சை.",
            
            "spec_4_badge": "லேப்ராஸ்கோபிக்",
            "spec_4_title": "பொது & லேப்ராஸ்கோபிக் சிகிச்சை",
            "spec_4_sub": "துளை அறுவை சிகிச்சை",
            "spec_4_desc": "குடலிறக்கம் (Hernia), பித்தப்பை கல், குடல்வால் (Appendix) மற்றும் அதிநவீன வயிற்று அறுவை சிகிச்சைகள்.",
            
            "spec_5_badge": "கால் புண் சிகிச்சை",
            "spec_5_title": "சர்க்கரை நோய் கால் & இரத்தநாள பராமரிப்பு",
            "spec_5_sub": "கால் விரல் பாதுகாப்பு",
            "spec_5_desc": "சர்க்கரை நோய் கால் புண்கள் குணப்படுத்துதல், இரத்தநாள சிகிச்சை மற்றும் நீண்டகால காயங்கள் ஆற்றுதல்.",
            
            "spec_6_badge": "24/7 சேவை",
            "spec_6_title": "அவசர & விபத்து சிகிச்சை பிரிவு",
            "spec_6_sub": "24 மணி நேர மையம்",
            "spec_6_desc": "விபத்து தீவிர சிகிச்சை, 24/7 ஆம்புலன்ஸ் வசதி மற்றும் உடனடி சிறப்பு மருத்துவர் கவனிப்பு.",
            
            "spec_7_badge": "தீவிர சிகிச்சை",
            "spec_7_title": "தீவிர சிகிச்சை (ICU) & தங்குமிடம்",
            "spec_7_sub": "நோயாளி வார்டுகள்",
            "spec_7_desc": "வென்டிலேட்டர் வசதி, தொடர் கண்காணிப்பு கருவிகள் மற்றும் குளிர்சாதன தனி நபர் தங்கும் அறைகள்.",
            
            "spec_8_badge": "துல்லிய ஆய்வகம்",
            "spec_8_title": "நவீன ஆய்வகம் & டிஜிட்டல் எக்ஸ்ரே",
            "spec_8_sub": "விரைவான முடிவுகள்",
            "spec_8_desc": "அனைத்து வகையான இரத்த, சிறுநீர் பரிசோதனைகள் மற்றும் கணினிமயமாக்கப்பட்ட டிஜிட்டல் எக்ஸ்ரே.",
            
            "doc_badge": "மருத்துவர்கள்",
            "doc_title": "எங்கள் மருத்துவ நிபுணர்கள்",
            "doc_sub": "உயரிய தகுதியும் பல வருட அனுபவமும் கொண்ட மருத்துவ நிபுணர்கள்.",
            
            "doc_1_name": "டாக்டர் ஜி. ஐ. நம்பி",
            "doc_1_qual": "M.S., M.Ch. (Plastic Surgery)",
            "doc_1_spec": "தலைமை பிளாஸ்டிக், தீக்காய & கை அறுவை சிகிச்சை நிபுணர்",
            "doc_1_time": "திங்கள் – சனி: 9:00 AM – 2:00 PM",
            "doc_1_btn": "முன்பதிவு செய்ய",
            
            "doc_2_name": "டாக்டர் ஜே. வித்யா தேவி",
            "doc_2_qual": "MBBS, DGO, MS",
            "doc_2_spec": "முதுநிலை சிறப்பு மருத்துவர்",
            "doc_2_time": "திங்கள் – சனி: 10:00 AM – 4:00 PM",
            "doc_2_btn": "முன்பதிவு செய்ய",
            
            "doc_3_name": "டாக்டர் பி. அருண் மொழி",
            "doc_3_qual": "MBBS, MD / DNB",
            "doc_3_spec": "சிறப்பு மருத்துவர் & தீவிர சிகிச்சை நிபுணர்",
            "doc_3_time": "திங்கள் – ஞாயிறு: 9:00 AM – 5:00 PM",
            "doc_3_btn": "முன்பதிவு செய்ய",
            
            "doc_4_name": "டாக்டர் பி. அஜித் சுவாமிநாத்",
            "doc_4_qual": "MBBS, MS (General Surgery)",
            "doc_4_spec": "பொது மற்றும் லேப்ராஸ்கோபிக் அறுவை சிகிச்சை நிபுணர்",
            "doc_4_time": "திங்கள் – சனி: 11:00 AM – 6:00 PM",
            "doc_4_btn": "முன்பதிவு செய்ய",
            
            "fac_badge": "மருத்துவ வசதிகள்",
            "fac_title": "அதிநவீன மருத்துவ உள்கட்டமைப்பு",
            "fac_sub": "நோயாளி பாதுகாப்பும் விரைவான குணமடைதலும் உறுதி செய்யப்படுகிறது.",
            "fac_1_title": "தீக்காய தீவிர சிகிச்சை பிரிவு",
            "fac_1_desc": "தொற்று ஏற்படாமல் பாதுகாக்கும் தனிமைப்படுத்தப்பட்ட தீக்காய சிகிச்சை அறைகள்.",
            "fac_2_title": "நவீன அறுவை சிகிச்சை கூடம்",
            "fac_2_desc": "லேமினார் ஏர்புளோ கொண்ட அதிநவீன நுண்ணிய அறுவை சிகிச்சை கருவிகள்.",
            "fac_3_title": "24/7 தீவிர சிகிச்சை பிரிவு (ICU)",
            "fac_3_desc": "வென்டிலேட்டர் மற்றும் உயிர் காக்கும் நவீன மருத்துவ சாதனங்கள்.",
            "fac_4_title": "டிஜிட்டல் எக்ஸ்ரே & பரிசோதனை",
            "fac_4_desc": "குறைந்த கதிர்வீச்சு கொண்ட உயர்தர டிஜிட்டல் எக்ஸ்ரே படங்கள்.",
            "fac_5_title": "24/7 மருந்தகம்",
            "fac_5_desc": "அனைத்து விதமான அறுவை சிகிச்சை மற்றும் அவசர கால மருந்துகள் கிடைக்கும்.",
            "fac_6_title": "வசதியான நோயாளி அறைகள்",
            "fac_6_desc": "சுத்தமான பொது வார்டுகள், பிரத்யேக தனி அறைகள் மற்றும் டீலக்ஸ் அறைகள்.",
            
            "book_badge": "எளிதான முன்பதிவு",
            "book_title": "பரிசோதனைக்கு முன்பதிவு செய்யுங்கள்",
            "book_desc": "கவின் மருத்துவ மையத்தின் சிறப்பு மருத்துவர்களை சந்திக்க முன்பதிவு செய்யுங்கள். எங்கள் குழுவினர் 15 நிமிடங்களில் தொடர்பு கொள்வார்கள்.",
            "book_perk_1": "OPD நேரம்: திங்கள் – ஞாயிறு (காலை 8:00 – இரவு 7:00 வரை)",
            "book_perk_2": "அவசர சிகிச்சை: 24 மணி நேரமும் உடனடியாக சிகிச்சை அளிக்கப்படும்",
            "book_direct_label": "உடனடி உதவிக்கு அழைக்க",
            
            "form_title": "மருத்துவ முன்பதிவு படிவம்",
            "form_sub": "உங்கள் விபரங்களை உள்ளிட்டு முன்பதிவு செய்யவும்",
            "form_label_name": "நோயாளியின் பெயர் *",
            "form_label_phone": "செல்போன் எண் *",
            "form_label_dept": "மருத்துவ துறை / மருத்துவர் *",
            "form_label_date": "விரும்பும் தேதி *",
            "form_btn_submit": "முன்பதிவை உறுதி செய்க",
            
            "contact_badge": "தொடர்புக்கு",
            "contact_title": "கவின் மருத்துவ மையம் — ஈரோடு",
            "contact_sub": "ஈரோடு–பெருந்துறை மெயின் ரோட்டில் விசாலமான வாகன நிறுத்துமிடத்துடன் அமைந்துள்ளது.",
            "contact_addr_title": "மருத்துவமனை முகவரி",
            "contact_addr_desc": "68, காந்தி நகர், ஈரோடு - பெருந்துறை மெயின் ரோடு, ஈரோடு — 638 011, தமிழ்நாடு",
            "contact_phone_title": "தொலைபேசி எண்கள்",
            "contact_email_title": "மின்னஞ்சல் முகவரி",
            "contact_time_title": "வேலை நேரம்",
            "contact_time_desc": "OPD பரிசோதனை: திங்கள் – ஞாயிறு (8:00 AM – 7:00 PM)\nஅவசர சிகிச்சை: 24/7 எப்போதும் இயங்கும்",
            
            "footer_desc": "கவின் மருத்துவ மையம் — ஈரோட்டில் அமைந்துள்ள உயர்தர பல்நோக்கு மற்றும் பிளாஸ்டிக்/தீக்காய சிறப்பு அறுவை சிகிச்சை மையம்.",
            "footer_nav_title": "விரைவு இணைப்புகள்",
            "footer_spec_title": "முக்கிய சிறப்பு துறைகள்",
            "footer_emg_title": "அவசர கால தொடர்பு",
            "footer_copy": "© 2026 கவின் மருத்துவ மையம், ஈரோடு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
        }
    };

    // ─── 2. Language Switch Engine ───
    let currentLang = localStorage.getItem('kmc_lang') || 'en'; // Default as English

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('kmc_lang', lang);
        document.documentElement.lang = lang;

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active switch buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update body language class for font adjustments
        if (lang === 'ta') {
            document.body.classList.add('lang-tamil');
        } else {
            document.body.classList.remove('lang-tamil');
        }
    }

    // Bind all language toggle buttons (desktop + mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize with default/persisted language
    setLanguage(currentLang);


    // ─── 3. Sticky Header Shrink on Scroll ───
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

    // ─── 4. Mobile Drawer Navigation ───
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('navbar');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navMenu.classList.toggle('active');
            
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

    // ─── 5. Smooth Anchor Scrolling with Sticky Offset ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── 6. Active Navigation Indicator on Scroll ───
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

    // ─── 7. Appointment Form Submission Handler ───
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        // Pre-fill doctor in select if 'data-doctor' is clicked from doctor cards
        document.querySelectorAll('.btn-doctor-select').forEach(btn => {
            btn.addEventListener('click', function() {
                const doctorName = this.getAttribute('data-doctor');
                const deptSelect = appointmentForm.querySelector('select[name="p_dept"]');
                if (deptSelect && doctorName) {
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

            const isTa = (currentLang === 'ta');
            submitBtn.disabled = true;
            submitBtn.innerHTML = isTa 
                ? '<i class="fas fa-spinner fa-spin"></i> முன்பதிவு செய்யப்படுகிறது...' 
                : '<i class="fas fa-spinner fa-spin"></i> Processing Request...';

            const formData = new FormData(appointmentForm);
            const data = Object.fromEntries(formData.entries());

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const titleSuccess = isTa ? 'முன்பதிவு வெற்றியடைந்தது!' : 'Appointment Requested Successfully!';
                const subSuccess = isTa 
                    ? `<strong>${data.p_name || 'நோயாளி'}</strong> அவர்களுக்கான முன்பதிவு பதிவு செய்யப்பட்டது.`
                    : `Appointment requested for <strong>${data.p_name || 'Patient'}</strong>`;
                const callMsg = isTa
                    ? `எங்கள் மருத்துவக் குழு 15 நிமிடங்களில் <strong>${data.p_phone}</strong> எண்ணில் தொடர்பு கொள்ளும்.`
                    : `Our medical desk will call you at <strong>${data.p_phone}</strong> within 15 minutes.`;
                const btnAnother = isTa ? 'புதிய முன்பதிவு செய்ய' : 'Book Another Appointment';

                appointmentForm.innerHTML = `
                    <div style="text-align: center; padding: 28px 16px;">
                        <div style="width: 66px; height: 66px; background: #008B7A; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; font-size: 2rem; box-shadow: 0 4px 18px rgba(0, 139, 122, 0.35);">
                            <i class="fas fa-check"></i>
                        </div>
                        <h4 style="font-size: 1.4rem; font-weight: 800; color: #0A1E3B; margin-bottom: 8px;">${titleSuccess}</h4>
                        <p style="color: #64748B; font-size: 1.02rem; border-bottom: 1px solid #E2E8F0; padding-bottom: 16px; margin-bottom: 16px;">
                            ${subSuccess}
                        </p>
                        <div style="background: #E6F7F5; border: 1px solid #99F6E4; border-radius: 10px; padding: 14px; margin-bottom: 20px; text-align: left; font-size: 0.9rem; color: #006D60;">
                            <p style="margin: 0 0 6px 0;"><strong>${isTa ? 'துறை:' : 'Department:'}</strong> ${data.p_dept || 'General Consultation'}</p>
                            <p style="margin: 0 0 6px 0;"><strong>${isTa ? 'தேதி:' : 'Date:'}</strong> ${data.p_date || 'Selected Date'}</p>
                            <p style="margin: 0;"><strong>${isTa ? 'தொலைபேசி:' : 'Phone:'}</strong> ${data.p_phone || '-'}</p>
                        </div>
                        <p style="font-size: 0.95rem; font-weight: 600; color: #1E293B;">
                            ${callMsg}
                        </p>
                        <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 22px; width: 100%; padding: 13px; font-size: 0.95rem;">
                            <i class="fas fa-redo"></i> ${btnAnother}
                        </button>
                    </div>
                `;

                console.log('Kavin Medical Center - Appointment successfully logged:', data);

            } catch (err) {
                console.error('Submission Failed:', err);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                alert('Connection error. Please contact Kavin Medical Center directly at +91 63742 04706.');
            }
        });
    }
});
