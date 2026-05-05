/**
 * AutoParts Hub - Main Script
 * Handles: Navbar Actions, Favorites, Theme, Language, Smart Search, and WhatsApp Buy
 */

// --- Initial Translation Data ---
const translations = {
    en: {
        nav_brand: "AutoParts Hub",
        search_placeholder: "Search for car parts...",
        search_btn: "Search",
        categories: "Categories",
        cat_all: "All",
        cat_engine: "Engine",
        cat_lighting: "Lighting",
        cat_brakes: "Brakes",
        cat_suspension: "Suspension",
        cat_body: "Body Parts",
        login: "Login",
        register: "Register",
        hero_title: "Find Your Perfect Car Parts",
        hero_subtitle: "Quality spare parts for all car models at affordable prices.",
        hero_2_title: "Expert Maintenance Guides",
        hero_2_subtitle: "Learn how to take care of your vehicle with our expert tips.",
        hero_3_title: "Sell Your Car Parts",
        hero_3_subtitle: "Join thousands of sellers and reach buyers across the country.",
        shop_now: "Shop Now",
        featured_products: "Featured Products",
        more_link: "Show More Products",
        less_link: "Show Less",
        btn_upload_main: "Upload New Product",
        maintenance_title: "Maintenance & Guides",
        care_hub_title: "Car Care & Buying Hub",
        guides_title: "Expert Guides",
        guide_badge_new: "New",
        guide_1_title: "Choosing the Right Oil Filter",
        guide_1_text: "Don't risk your engine. Learn how to pick the perfect filter for your car model.",
        guide_2_title: "AGM vs Lead-Acid Batteries",
        guide_2_text: "Which one is better for modern cars? We compare performance and lifespan.",
        tips_title: "Maintenance Tips",
        tip_1_head: "Check Oil Regularly",
        tip_1_body: "Check engine oil every 5,000km to ensure smooth performance.",
        tip_2_head: "Tire Pressure",
        tip_2_body: "Maintain correct tire pressure to improve fuel efficiency by up to 3%.",
        tip_3_head: "Brake Inspection",
        tip_3_body: "Listen for squeaks. Replace brake pads early to avoid rotor damage.",
        comp_title: "Experience the Difference",
        comp_badge: "Why Choose Us?",
        comp_subtitle: "We provide a seamless experience for both buyers and sellers",
        comp_feature: "Feature",
        comp_others: "Traditional Apps",
        comp_speed: "Update Speed",
        comp_slow: "Slow/Delayed",
        comp_instant: "Real-time / Instant",
        comp_search: "Search Accuracy",
        comp_basic: "Basic/Limited",
        comp_smart: "AI-Powered / Smart",
        comp_ads: "Ad Experience",
        comp_annoying: "Annoying Ads",
        comp_clean: "Ad-Free / Clean",
        comp_support: "Support",
        comp_24_7: "24/7 Dedicated",
        comp_secure: "100% Secure",
        comp_premium_price: "Premium/Expensive",
        comp_price: "Price",
        comp_affordable: "Affordable / Free",
        read_more: "Read Full Article",
        favorites_modal_title: "Your Favorites",
        upload_product_title: "Upload New Car Part",
        part_name: "Product Name",
        part_price: "Price ($)",
        part_contact: "Contact Number (WhatsApp)",
        part_image: "Select Image from Device",
        submit_upload: "Post Product",
        footer_about_title: "About Us",
        footer_about_text: "The most reliable car parts marketplace with instant updates and smart search.",
        footer_contact_title: "Contact Us",
        footer_address: "123 Auto St, Car City",
        footer_terms_title: "Terms",
        footer_terms_text: "Read our terms of service and privacy policy.",
        rights_reserved: "All Rights Reserved.",
        sales_trend: "Market Sales Trend",
        sold_units: "Units Sold",
        market_active: "Market is active",
        btn_buy: "Buy Now",
        cond_label: "Condition: ",
        date_label: "Published: ",
        no_favorites: "No favorites added yet.",
        no_results: "No products found.",
        auth_error: "Invalid email or password",
        register_success: "Registration successful! Please login.",
        email_exists: "Email already exists",
        pass_mismatch: "Passwords do not match!",
        requests_title: "Part Requests",
        requests_badge: "Customer Needs",
        requests_subtitle: "Can't find a part? Post a request or help others find theirs.",
        post_request_btn: "Post New Request",
        post_request_title: "What part do you need?",
        part_details: "Details / Specifications",
        submit_request: "Post Request",
        contact_buyer: "Contact Buyer",
        search_requests_placeholder: "Search requests...",
        dashboard: "Dashboard",
        my_listings: "My Listings",
        my_requests_sidebar: "My Part Requests",
        my_requests_title: "Manage My Part Requests",
        no_requests: "You haven't posted any part requests yet.",
        logout: "Logout",
        my_listings: "My Listings",
        upload_new: "Upload New Product",
        active_listings: "Your Active Listings",
        sold_history: "Sold Products History",
        no_listings: "No listings yet.",
        profile_settings: "Profile Settings",
        profile_desc: "Update your personal information and profile picture.",
        welcome_user: "Welcome, User!",
        full_name: "Full Name",
        phone: "Phone Number",
        bio: "Bio / About You",
        save_changes: "Save Changes",
        profile_updated: "Profile updated successfully!",
        update_failed: "Failed to update profile.",
        products_all: "All Products",
        all_products_title: "Browse All Car Parts",
        login_title: "Login to Your Account",
        email_label: "Email Address",
        password_label: "Password",
        login_btn: "Login",
        no_account: "Don't have an account?",
        register_link: "Register here",
        register_title: "Create New Account",
        name_label: "Full Name",
        confirm_password_label: "Confirm Password",
        register_btn: "Register",
        have_account: "Already have an account?",
        login_link: "Login here",
        footer_quick_links: "Quick Links",
        privacy_policy: "Privacy Policy",
        part_category: "Category",
        part_condition: "Condition",
        part_location: "Location (City)",
        cond_new: "New",
        cond_used: "Used",
        cond_imported: "Imported (Esterad)",
        please_login_upload: "Please login to upload a product!",
        date_label: "Date: ",
        upload_subtitle: "Fill in the details to list your spare part",
        select_image: "Choose a clear photo",
        daily_limit_info: "Daily Upload Limit: 2",
        remaining_uploads: "Remaining Today: ",
        daily_limit_reached: "Daily limit reached (2 products)! Please wait 24 hours to upload again.",
        remaining_requests: "Requests Remaining: ",
        newsletter_title: "Stay Ahead of the Curve",
        newsletter_subtitle: "Get exclusive car maintenance tips and rare part alerts directly to your inbox.",
        newsletter_btn: "Join Exclusive Club",
        comp_badge: "Elite Comparison",
        comp_title: "Experience the Hub Difference",
        comp_subtitle: "Why the pros choose AutoParts Hub over traditional platforms",
        comp_feature: "Comparison Feature",
        comp_speed: "Sync Speed",
        comp_search: "Smart Search",
        comp_ads: "User Experience",
        comp_support: "Support",
        comp_price: "Service Fee",
        admin_phone: "01093496054",
        admin_email: "mahmoud.hosni.24114@gmail.com",
        feat_support_text: "Contact Mahmoud Hosni for any technical support or inquiries.",
        phone_label: "Mobile Number",
        address_label: "Address / Location",
        otp_method_label: "Send Code via:",
        verify_title: "Verify Your Number",
        verify_desc: "We've sent a 6-digit code to {phone}. Please enter it below.",
        code_expires: "Code expires in:",
        verify_btn: "Verify & Create Account",
        resend_code: "Resend Code",
        change_info: "Change Info",
        otp_sent: "Verification code sent to your phone!",
        otp_error: "Invalid or expired code. Please try again.",
        otp_expired: "Verification code expired. Please request a new one.",
        sales_success: "Sales Success",
        sales_count: "Sold Items",
        sales_analytics_title: "Sales Analytics",
        total_revenue: "Total Revenue",
        items_sold: "Items Sold",
        avg_sale: "Avg. Sale Price",
        analytics_desc: "Detailed insights into your selling performance.",
        sales_trend: "Sales Trend",
        category_dist: "Category Distribution"
    },
    ar: {
        nav_brand: "مركز قطع الغيار",
        search_placeholder: "ابحث عن قطع الغيار...",
        search_btn: "بحث",
        categories: "الأقسام",
        cat_all: "الكل",
        cat_engine: "المحرك",
        cat_lighting: "الإضاءة",
        cat_brakes: "الفرامل",
        cat_suspension: "العفشة / المساعدين",
        cat_body: "الهيكل / الصاج",
        login: "دخول",
        register: "تسجيل",
        hero_title: "اعثر على قطع الغيار المثالية",
        hero_subtitle: "قطع غيار عالية الجودة لجميع السيارات بأسعار مناسبة.",
        hero_2_title: "أدلة صيانة الخبراء",
        hero_2_subtitle: "تعلم كيفية العناية بسيارتك من خلال نصائح الخبراء لدينا.",
        hero_3_title: "بع قطع غيار سيارتك",
        hero_3_subtitle: "انضم إلى آلاف البائعين وتواصل مع المشترين في جميع أنحاء البلاد.",
        shop_now: "تسوق الآن",
        featured_products: "المنتجات المميزة",
        more_link: "عرض المزيد",
        less_link: "عرض أقل",
        btn_upload_main: "رفع منتج جديد",
        maintenance_title: "الصيانة والدلائل",
        care_hub_title: "مركز العناية بالسيارة ودليل الشراء",
        guides_title: "أدلة الخبراء",
        guide_badge_new: "جديد",
        guide_1_title: "كيفية اختيار فلتر الزيت المناسب",
        guide_1_text: "لا تخاطر بمحركك. تعلم كيف تختار الفلتر المثالي لموديل سيارتك.",
        guide_2_title: "بطاريات AGM مقابل الرصاص",
        guide_2_text: "أيهما أفضل للسيارات الحديثة؟ نقارن بين الأداء والعمر الافتراضي.",
        tips_title: "نصائح الصيانة",
        tip_1_head: "افحص الزيت بانتظام",
        tip_1_body: "افحص زيت المحرك كل 5000 كم لضمان أداء سلس.",
        tip_2_head: "ضغط الإطارات",
        tip_2_body: "حافظ على ضغط الإطارات الصحيح لتحسين استهلاك الوقود بنسبة 3%.",
        tip_3_head: "فحص الفرامل",
        tip_3_body: "استمع للأصوات. استبدل وسادات الفرامل مبكراً لتجنب تلف القرص.",
        comp_title: "تجربة الفرق الحقيقي",
        comp_badge: "مقارنة النخبة",
        comp_subtitle: "لماذا يختار المحترفون AutoParts Hub بدلاً من المنصات التقليدية",
        comp_feature: "ميزة المقارنة",
        comp_others: "المنصات الأخرى",
        comp_speed: "سرعة المزامنة",
        comp_slow: "بطيء / يدوي",
        comp_instant: "مزامنة فورية فائقة",
        comp_search: "البحث الذكي",
        comp_basic: "بحث نصي بسيط",
        comp_smart: "بحث مدعوم بالذكاء الاصطناعي",
        comp_ads: "تجربة المستخدم",
        comp_annoying: "إعلانات كثيفة",
        comp_clean: "تجربة نظيفة بدون إعلانات",
        comp_support: "الدعم الفني",
        comp_limited: "ساعات العمل الرسمية",
        comp_24_7: "دعم VIP على مدار الساعة",
        comp_secure: "حماية 100%",
        comp_premium_price: "عمولات مرتفعة",
        comp_price: "رسوم الخدمة",
        comp_affordable: "0% عمولة / مجاني",
        admin_phone: "01093496054",
        admin_email: "mahmoud.hosni.24114@gmail.com",
        feat_support_text: "تواصل مع محمود حسني للحصول على أي دعم فني أو استفسارات.",
        read_more: "اقرأ المقال كاملاً",
        favorites_modal_title: "مفضلاتك",
        upload_product_title: "رفع قطعة غيار جديدة",
        part_name: "اسم القطعة",
        part_price: "السعر ($)",
        part_contact: "رقم التواصل (واتساب)",
        part_image: "اختر صورة من جهازك",
        submit_upload: "نشر المنتج",
        footer_about_title: "من نحن",
        footer_about_text: "سوق قطع الغيار الأكثر موثوقية مع تحديثات فورية وبحث ذكي.",
        footer_contact_title: "اتصل بنا",
        footer_address: "123 شارع السيارات، مدينة السيارات",
        footer_terms_title: "الشروط",
        footer_terms_text: "اقرأ شروط الخدمة وسياسة الخصوصية.",
        rights_reserved: "جميع الحقوق محفوظة.",
        sales_trend: "اتجاه مبيعات السوق",
        sold_units: "وحدة مباعة",
        market_active: "السوق نشط حالياً",
        btn_buy: "اشتري الآن",
        cond_label: "الحالة: ",
        date_label: "نشر في: ",
        no_favorites: "لا توجد مفضلات بعد.",
        no_results: "لا يوجد منتجات.",
        auth_error: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
        register_success: "تم التسجيل بنجاح! يرجى تسجيل الدخول.",
        email_exists: "هذا البريد الإلكتروني مسجل بالفعل",
        pass_mismatch: "كلمات المرور غير متطابقة!",
        dashboard: "لوحة التحكم",
        my_listings: "إعلاناتي",
        my_requests_sidebar: "طلباتي لقطع الغيار",
        my_requests_title: "إدارة طلبات قطع الغيار الخاصة بي",
        no_requests: "لم تقم بنشر أي طلبات لقطع غيار بعد.",
        requests_title: "طلبات قطع الغيار",
        requests_badge: "طلبات العملاء",
        requests_subtitle: "مش لاقي قطعة غيار؟ اطلبها هنا وأصحاب المحلات هيتواصلوا معاك.",
        post_request_btn: "إضافة طلب جديد",
        post_request_title: "إيه القطعة اللي محتاجها؟",
        part_details: "التفاصيل والمواصفات",
        submit_request: "نشر الطلب",
        contact_buyer: "تواصل مع المشتري",
        search_requests_placeholder: "ابحث في الطلبات...",
        logout: "خروج",
        my_listings: "منتجاتي",
        upload_new: "رفع منتج جديد",
        active_listings: "منتجاتك المعروضة",
        sold_history: "سجل المنتجات المباعة",
        no_listings: "لم تقم برفع أي منتجات بعد.",
        sales_success: "نجاح المبيعات",
        sales_count: "منتجات مباعة",
        sales_analytics_title: "تحليلات المبيعات",
        profile_settings: "إعدادات الملف الشخصي",
        profile_desc: "قم بتحديث معلوماتك الشخصية وصورة ملفك الشخصي.",
        welcome_user: "مرحباً، مستخدم!",
        full_name: "الاسم الكامل",
        phone: "رقم الهاتف",
        bio: "نبذة عنك",
        save_changes: "حفظ التغييرات",
        profile_updated: "تم تحديث الملف الشخصي بنجاح!",
        update_failed: "فشل تحديث الملف الشخصي.",
        products_all: "كل المنتجات",
        all_products_title: "تصفح جميع قطع الغيار",
        login_title: "تسجيل الدخول إلى حسابك",
        email_label: "البريد الإلكتروني",
        password_label: "كلمة المرور",
        login_btn: "دخول",
        no_account: "ليس لديك حساب؟",
        register_link: "سجل هنا",
        register_title: "إنشاء حساب جديد",
        name_label: "الاسم الكامل",
        confirm_password_label: "تأكيد كلمة المرور",
        register_btn: "تسجيل",
        have_account: "لديك حساب بالفعل؟",
        login_link: "سجل دخول هنا",
        footer_quick_links: "روابط سريعة",
        privacy_policy: "سياسة الخصوصية",
        part_category: "القسم",
        part_condition: "الحالة",
        part_location: "الموقع (المدينة)",
        cond_new: "جديد",
        cond_used: "مستعمل",
        cond_imported: "استيراد",
        part_name_en: "اسم المنتج (إنجليزي)",
        part_name_ar: "اسم المنتج (عربي)",
        please_login_upload: "يرجى تسجيل الدخول لرفع منتج!",
        date_label: "التاريخ: ",
        upload_subtitle: "أدخل التفاصيل لعرض قطعة الغيار الخاصة بك",
        select_image: "اختر صورة واضحة للقطعة",
        daily_limit_info: "الحد اليومي للرفع: 2",
        remaining_uploads: "المتبقي اليوم: ",
        daily_limit_reached: "لقد وصلت للحد الأقصى (منتجان فقط). يرجى الانتظار 24 ساعة للتمكن من الرفع مرة أخرى.",
        remaining_requests: "الطلبات المتبقية: ",
        newsletter_title: "ابقَ دائماً في الصدارة",
        newsletter_subtitle: "احصل على نصائح حصرية لصيانة السيارات وتنبيهات بقطع الغيار النادرة مباشرة في بريدك.",
        newsletter_btn: "انضم للنادي الحصري",
        phone_label: "رقم الموبايل",
        address_label: "العنوان / الموقع",
        otp_method_label: "إرسال الكود عبر:",
        verify_title: "تأكيد رقمك",
        verify_desc: "لقد أرسلنا كود مكون من 6 أرقام إلى {phone}. يرجى إدخاله بالأسفل.",
        code_expires: "ينتهي الكود خلال:",
        verify_btn: "تأكيد وإنشاء الحساب",
        resend_code: "إعادة إرسال الكود",
        change_info: "تغيير البيانات",
        otp_sent: "تم إرسال كود التحقق لهاتفك!",
        otp_error: "الكود خاطئ أو منتهي الصلاحية. حاول مرة أخرى.",
        otp_expired: "انتهت صلاحية كود التحقق. اطلب كود جديد.",
        total_revenue: "إجمالي الأرباح",
        items_sold: "القطع المباعة",
        avg_sale: "متوسط سعر البيع",
        analytics_desc: "رؤية تفصيلية لأداء مبيعاتك على المنصة.",
        sales_trend: "اتجاه المبيعات",
        category_dist: "توزيع المبيعات حسب الفئة"
    }
};

// --- Product Data ---
const defaultProducts = [];

let products = []; // Will be fetched from MySQL Backend
let isFetching = false; // Flag to track database fetching status

// --- Backend API Base URL ---
// Smart API URL Detection:
const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? (window.location.port === '5003' ? '/api' : 'http://localhost:5003/api')
    : '/api'; // On Vercel or production, always use relative path

console.log(`[System] API base set to: ${API_URL} (Origin: ${window.location.origin})`);

// --- State ---
let currentLang = localStorage.getItem('lang') || 'ar'; // Default to Arabic for Egyptian users
let currentTheme = localStorage.getItem('theme') || 'light';
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let favorites = currentUser ? (JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`)) || []) : [];
let displayCount = 9;
let showAllMode = false; // Add this state
let timerInterval; // Timer for OTP expiry

// Set initial document attributes
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

// --- DOM Elements ---
const el = {
    langToggle: document.getElementById('langToggle'),
    themeToggle: document.getElementById('themeToggle'),
    langText: document.getElementById('langText'),
    themeIcon: document.getElementById('themeIcon'),
    productsGrid: document.getElementById('productsGrid'),
    searchInput: document.getElementById('searchInput'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    mobileSearchSuggestions: document.getElementById('mobileSearchSuggestions'),
    favoritesCount: document.getElementById('favoritesCount'),
    favoritesModal: document.getElementById('favoritesModal'),
    favoritesList: document.getElementById('favoritesList'),
    articleModal: document.getElementById('articleModal'),
    articleContent: document.getElementById('articleContent'),
    openFavorites: document.getElementById('openFavoritesModal'),
    closeFavorites: document.getElementById('closeFavorites'),
    closeArticle: document.getElementById('closeArticle'),
    uploadModal: document.getElementById('uploadModal'),
    imagePreview: document.getElementById('imagePreview'),
    openUpload: document.querySelectorAll('#openUploadBtn'), // Using querySelectorAll for all buttons
    closeUpload: document.getElementById('closeUpload'),
    uploadForm: document.getElementById('uploadForm'),
    remainingUploads: document.getElementById('remainingUploads'),
    showAllBtn: document.getElementById('showAllBtn'),
    userListings: document.getElementById('userListings'),
    authButtons: document.querySelectorAll('.auth-buttons'),
    welcomeUser: document.getElementById('welcomeUser'),
    userAvatar: document.getElementById('userAvatar'),
    userSoldListings: document.getElementById('userSoldListings'),
    profileImgInput: document.getElementById('profileImgInput'),
    profileForm: document.getElementById('profileForm'),
    showProfileBtn: document.getElementById('showProfileBtn'),
    showListingsBtn: document.getElementById('showListingsBtn'),
    showRequestsBtn: document.getElementById('showRequestsBtn'),
    profileSection: document.getElementById('profileSection'),
    listingsSection: document.getElementById('listingsSection'),
    requestsSection: document.getElementById('requestsSection'),
    userRequestsList: document.getElementById('userRequestsList'),
    userEmailSub: document.getElementById('userEmailSub'),
    editModal: document.getElementById('editModal'),
    editForm: document.getElementById('editForm'),
    closeEdit: document.getElementById('closeEdit'),
    editImagePreview: document.getElementById('editImagePreview')
};

// --- Utilities ---
function sanitizeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[m];
    });
}

// --- Toast Notifications ---
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('active'), 10);

    // Remove toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// --- Initialization ---
// --- Limit Logic ---
async function syncUserLimit() {
    if (!currentUser) {
        const badges = document.querySelectorAll('.upload-limit-badge, .upload-limit-info');
        badges.forEach(b => b.style.display = 'none');
        return;
    }

    // Show current local state immediately
    updateLimitUI();

    try {
        const response = await fetch(`${API_URL}/users/me/${currentUser.id}`);
        const userData = await response.json();
        
        if (response.ok) {
            currentUser = { ...currentUser, ...userData };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateLimitUI();
        }
    } catch (err) {
        console.error('Failed to sync user limit:', err);
    }
}

function updateLimitUI() {
    if (!currentUser) return;
    
    // Get Today's Date in YYYY-MM-DD format (local to the device)
    const today = new Date().toLocaleDateString('en-CA');
    
    // Extract date part from last_upload_date safely
    let lastDate = '';
    if (currentUser.last_upload_date) {
        lastDate = new Date(currentUser.last_upload_date).toLocaleDateString('en-CA');
    }
    
    console.log(`[Limit Sync UI] Today: ${today}, Last Upload: ${lastDate}, Count: ${currentUser.upload_count_today}`);

    let remaining = 2;
    if (lastDate === today) {
        remaining = Math.max(0, 2 - (currentUser.upload_count_today || 0));
    } else {
        console.log('[Limit Sync UI] Reset detected in UI (Date Mismatch).');
    }

    // Update all limit counts in UI
    const countElements = document.querySelectorAll('.limit-count');
    countElements.forEach(el => {
        el.textContent = remaining;
        el.style.transform = 'scale(1.2)';
        setTimeout(() => el.style.transform = 'scale(1)', 200);
    });

    // Disable/Enable Upload Buttons based on limit
    const uploadButtons = [
        document.getElementById('openUploadBtnHome'),
        document.getElementById('openUploadBtn'),
        document.querySelector('#uploadForm button[type="submit"]')
    ];

    uploadButtons.forEach(btn => {
        if (btn) {
            if (remaining <= 0) {
                btn.disabled = true;
                btn.classList.add('btn-disabled');
                if (btn.tagName === 'BUTTON') {
                    btn.title = translations[currentLang].daily_limit_reached;
                }
            } else {
                btn.disabled = false;
                btn.classList.remove('btn-disabled');
                btn.title = '';
            }
        }
    });

    // Show home badge if on home page
    const homeBadge = document.getElementById('homeUploadLimit');
    const dashBadge = document.getElementById('dashboardUploadLimit');
    const modalInfo = document.getElementById('uploadLimitInfo');

    if (homeBadge) homeBadge.style.display = 'flex';
    if (dashBadge) dashBadge.style.display = 'flex';
    if (modalInfo) modalInfo.style.display = 'flex';
}

// Global Storage Listener: Sync limits and auth state across multiple tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'currentUser') {
        currentUser = e.newValue ? JSON.parse(e.newValue) : null;
        updateAuthUI();
        if (currentUser) {
            updateLimitUI();
        }
    }
});

// Update updateAuthUI to include limit sync
const originalUpdateAuthUI = updateAuthUI;
updateAuthUI = function() {
    originalUpdateAuthUI();
    if (currentUser) {
        syncUserLimit();
    } else {
        const homeBadge = document.getElementById('homeUploadLimit');
        const dashBadge = document.getElementById('dashboardUploadLimit');
        const modalInfo = document.getElementById('uploadLimitInfo');
        if (homeBadge) homeBadge.style.display = 'none';
        if (dashBadge) dashBadge.style.display = 'none';
        if (modalInfo) modalInfo.style.display = 'none';
    }
};

window.setCategory = (cat) => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = cat;
        renderProducts(cat);
        document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    }
};

// --- Product Detail Logic ---
function openProductDetail(id) {
    const p = products.find(prod => Number(prod.id) === Number(id));
    if (!p) return;

    const name = currentLang === 'en' ? p.name_en : p.name_ar;
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    document.getElementById('detailImg').src = p.image || 'https://via.placeholder.com/400x300?text=No+Image';
    document.getElementById('detailName').textContent = name;
    document.getElementById('detailPrice').textContent = `$${p.price}`;
    document.getElementById('detailCategory').textContent = translations[currentLang][`cat_${p.category}`] || p.category;
    document.getElementById('detailCondition').textContent = translations[currentLang][`cond_${p.condition.toLowerCase()}`] || p.condition;
    document.getElementById('detailSeller').textContent = p.seller_name || 'Guest';
    document.getElementById('detailDate').textContent = p.date ? new Date(p.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-EG') : '';

    const actionsBox = document.getElementById('detailActions');
    const isSold = p.status === 'sold';
    
    actionsBox.innerHTML = `
        <button class="btn btn-primary btn-buy btn-block ${isSold ? 'btn-disabled' : ''}" 
            onclick="${isSold ? '' : `handleProductBuy('${p.contact}', '${sanitizeHTML(name)}')`}" 
            ${isSold ? 'disabled' : ''}>
            <i class="fab fa-whatsapp"></i> ${isSold ? (currentLang === 'en' ? 'SOLD OUT' : 'تم البيع') : translations[currentLang].btn_buy}
        </button>
    `;

    modal.style.display = 'block';
}

function setupDetailListeners() {
    const closeBtn = document.getElementById('closeProductDetail');
    if (closeBtn) {
        closeBtn.onclick = () => document.getElementById('productDetailModal').style.display = 'none';
    }
    const modal = document.getElementById('productDetailModal');
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
        const ratingModal = document.getElementById('ratingModal');
        if (event.target == ratingModal) ratingModal.style.display = 'none';
    };
}

window.openProductDetail = openProductDetail;

async function init() {
    // Initialize Hero Carousel
    const heroCarouselEl = document.getElementById('heroCarousel');
    if (heroCarouselEl && typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(heroCarouselEl, {
            interval: 2500,
            ride: 'carousel',
            pause: 'hover'
        });
    }

    // Check if we need to sync user data from server (to fix missing fields like address)
    if (currentUser && currentUser.id) {
        try {
            const response = await fetch(`${API_URL}/users/me/${currentUser.id}`);
            if (response.ok) {
                const updatedUser = await response.json();
                currentUser = { ...currentUser, ...updatedUser };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                console.log('✅ User data synced from server');
                updateAuthUI(); // Update UI with latest sales count
            }
        } catch (err) {
            console.warn('⚠️ Could not sync user data:', err);
        }
    }

    // Load initial trading data
    updateTradingIndicator();

    fixDashboardDOM(); // Inject missing Favorites Modal to Dashboard
    fixGlobalDOM();    // Inject Loading Spinner and Mobile Auth container
    updateTheme();
    updateLanguage();
    updateAuthUI();
    setupEventListeners();
    setupDetailListeners();
    initUploadLogic();
    initChatbot();      // Initialize the chatbot
    initScrollReveal(); // Initialize scroll reveal animations
    
    // SYNC LIMITS: First thing if logged in
    if (currentUser) {
        await syncUserLimit();
        await syncFavoritesWithDB();
    }
    
    // Fetch products last as it's async and might be slow
    await checkServerConnection();
    await fetchProducts(); 
    updateFavoritesUI();
}

async function checkServerConnection() {
    try {
        console.log('Checking server connection...');
        const response = await fetch(`${API_URL}/products`);
        if (response.ok) {
            console.log('✅ Connected to Backend Server');
        }
    } catch (err) {
        console.error('❌ Backend Server Unreachable:', err);
        showToast(currentLang === 'ar' ? 'تنبيه: السيرفر غير متصل، سيتم استخدام البيانات المحلية.' : 'Notice: Server offline, using local data.', 'info');
    }
}

// --- DOM Fixer ---
function fixGlobalDOM() {
    // 1. Inject Loading Spinner
    if (!document.getElementById('loaderOverlay')) {
        const loaderHTML = `
            <div id="loaderOverlay" class="loader-overlay">
                <div class="loader"></div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHTML);
    }

    // 3. Inject Chatbot UI
    if (!document.getElementById('chatbotContainer')) {
        const chatbotHTML = `
            <div id="chatbotContainer" class="chatbot-container">
                <div id="chatbotWindow" class="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <span class="status-dot"></span>
                            <span>🤖 AutoParts Assistant</span>
                        </div>
                        <button id="closeChat" class="chatbot-close-btn">×</button>
                    </div>
                    <div id="chatBody" class="chatbot-body">
                        <div class="chat-msg bot">مرحباً! أنا مساعدك الذكي المطور، كيف يمكنني مساعدتك اليوم؟</div>
                    </div>
                    <div class="chatbot-input">
                        <input type="text" id="chatInput" placeholder="اكتب سؤالك هنا...">
                        <button id="chatSend">➤</button>
                    </div>
                </div>
                <button id="chatbotToggle" class="chatbot-toggle">
                    <span class="toggle-icon">💬</span>
                </button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    // 4. Inject CSS for Loader, Mobile Auth, and Chatbot
    if (!document.getElementById('injectedStyles')) {
        const styles = `
            /* Toast Styles */
            .toast-container {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            }
            .toast {
                background: var(--card-bg);
                color: var(--text-color);
                padding: 12px 25px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 300px;
                max-width: 90vw;
                opacity: 0;
                transform: translateY(-20px);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border-left: 4px solid var(--primary-color);
                pointer-events: auto;
            }
            [dir="rtl"] .toast {
                border-left: none;
                border-right: 4px solid var(--primary-color);
            }
            .toast.active {
                opacity: 1;
                transform: translateY(0);
            }
            .toast.error { border-color: #ff4757; }
            .toast.success { border-color: #2ed573; }
            .toast.info { border-color: #70a1ff; }
            .toast-icon { font-size: 1.2rem; }
            .toast-message { font-weight: 600; font-size: 0.95rem; }

            .loader-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.7); display: none; justify-content: center;
                align-items: center; z-index: 9999; backdrop-filter: blur(3px);
            }
            .loader {
                width: 50px; height: 50px; border: 5px solid #f3f3f3;
                border-top: 5px solid var(--primary-color); border-radius: 50%;
                animation: spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
            }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            
            /* Chatbot Styles */
            .chatbot-container { position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: 'Cairo', sans-serif; }
            .chatbot-toggle {
                width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--primary-color), var(--accent-orange));
                color: white; border: none; font-size: 1.8rem; cursor: pointer;
                box-shadow: 0 8px 25px rgba(255, 107, 0, 0.3); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                display: flex; align-items: center; justify-content: center;
            }
            .chatbot-toggle:hover { transform: scale(1.1) rotate(5deg); }
            .chatbot-window {
                position: absolute; bottom: 80px; right: 0; width: 350px; height: 500px;
                background: var(--card-bg); border-radius: 20px; box-shadow: 0 15px 50px rgba(0,0,0,0.25);
                display: none; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color);
                animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            
            .chatbot-header {
                padding: 18px; background: var(--primary-color); color: white;
                display: flex; justify-content: space-between; align-items: center; font-weight: 700;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .chatbot-header-info { display: flex; align-items: center; gap: 10px; }
            .status-dot { width: 10px; height: 10px; background: #2ed573; border-radius: 50%; display: inline-block; box-shadow: 0 0 10px #2ed573; }
            
            .chatbot-body { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 15px; background: var(--bg-color); scroll-behavior: smooth; }
            .chat-msg { padding: 12px 18px; border-radius: 18px; max-width: 85%; font-size: 0.95rem; line-height: 1.5; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
            .chat-msg.bot { background: var(--card-bg); color: var(--text-color); align-self: flex-start; border-bottom-left-radius: 2px; border: 1px solid var(--border-color); }
            .chat-msg.user { background: linear-gradient(135deg, var(--primary-color), #4834d4); color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
            
            .typing span { animation: blink 1.4s infinite; font-size: 1.5rem; line-height: 0; }
            .typing span:nth-child(2) { animation-delay: 0.2s; }
            .typing span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes blink { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }

            .quick-replies-container { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
            .quick-reply-btn {
                background: var(--nav-bg); border: 1px solid var(--border-color); color: var(--primary-color);
                padding: 8px 15px; border-radius: 20px; font-size: 0.85rem; cursor: pointer;
                transition: 0.3s; font-weight: 600;
            }
            .quick-reply-btn:hover { background: var(--primary-color); color: white; border-color: var(--primary-color); transform: translateY(-2px); }

            .chatbot-input { padding: 15px; border-top: 1px solid var(--border-color); display: flex; gap: 10px; background: var(--card-bg); }
            .chatbot-input input {
                flex: 1; padding: 12px 20px; border: 1px solid var(--border-color); border-radius: 25px;
                outline: none; background: var(--nav-bg); color: var(--text-color); transition: 0.3s;
            }
            .chatbot-input input:focus { border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(72, 52, 212, 0.1); }
            .chatbot-input button {
                width: 45px; height: 45px; border-radius: 50%; background: var(--primary-color);
                color: white; border: none; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center;
            }
            .chatbot-input button:hover { transform: scale(1.1); background: var(--accent-orange); }
            
            @media (max-width: 768px) {
                .chatbot-window { width: calc(100vw - 40px); bottom: 70px; right: 0; }
            }

            /* Smooth Transitions */
            .product-card, .btn, .modal-content, .dashboard-sidebar, .chatbot-window {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            /* ... (Rest of dashboard styles) */

            /* Dashboard Mobile Optimization */
            @media (max-width: 768px) {
                .dashboard-container {
                    display: block;
                    padding: 0;
                }
                .dashboard-sidebar {
                    position: fixed;
                    top: 0;
                    left: -100%;
                    width: 85%;
                    max-width: 300px;
                    height: 100%;
                    z-index: 3001;
                    border-radius: 0 20px 20px 0;
                    box-shadow: 10px 0 30px rgba(0,0,0,0.2);
                    background: var(--nav-bg);
                }
                [dir="rtl"] .dashboard-sidebar { left: auto; right: -100%; border-radius: 20px 0 0 20px; }
                
                .dashboard-sidebar.active { left: 0; }
                [dir="rtl"] .dashboard-sidebar.active { right: 0; }

                .sidebar-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.6);
                    backdrop-filter: blur(4px);
                    display: none;
                    z-index: 3000;
                    opacity: 0;
                    transition: opacity 0.3s;
                }
                .sidebar-overlay.active { display: block; opacity: 1; }

                .dashboard-content {
                    padding: 20px 15px;
                    margin-top: 20px;
                }
                
                .sidebar-toggle-btn {
                    position: fixed;
                    bottom: 25px;
                    right: 20px;
                    top: auto !important;
                    left: auto !important;
                    z-index: 2500;
                    width: 60px;
                    height: 60px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                }
                [dir="rtl"] .sidebar-toggle-btn { right: auto; left: 20px; }

                /* New Mobile Profile Trigger Styles */
                .mobile-profile-trigger {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: var(--card-bg);
                    border-radius: 15px;
                    box-shadow: var(--shadow);
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                .mobile-profile-trigger:active { transform: scale(0.98); }
                
                .trigger-avatar-container {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    margin-bottom: 10px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid var(--primary-color);
                }
                #triggerAvatar {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .trigger-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.4);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    text-align: center;
                    opacity: 0;
                    transition: 0.3s;
                }
                .mobile-profile-trigger:hover .trigger-overlay { opacity: 1; }
                #triggerWelcome { font-size: 1.2rem; margin: 0; }
            }

            /* Profile Page Styles */
            .section-card {
                background: var(--card-bg);
                padding: 30px;
                border-radius: 15px;
                box-shadow: var(--shadow);
            }
            .section-desc {
                margin-bottom: 25px;
                opacity: 0.8;
                font-size: 0.95rem;
            }
            .profile-edit-grid {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .input-with-icon {
                position: relative;
                display: flex;
                align-items: center;
            }
            .input-icon {
                position: absolute;
                left: 12px;
                font-size: 1.1rem;
                pointer-events: none;
            }
            [dir="rtl"] .input-icon { left: auto; right: 12px; }
            .input-with-icon input, .input-with-icon textarea {
                width: 100%;
                padding: 12px 12px 12px 40px;
                border: 1px solid var(--border-color);
                border-radius: 10px;
                background: var(--nav-bg);
                color: var(--text-color);
                font-size: 1rem;
                transition: 0.3s;
            }
            [dir="rtl"] .input-with-icon input { padding: 12px 40px 12px 12px; }
            .input-with-icon input:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
                outline: none;
            }
            .input-with-icon.disabled input {
                opacity: 0.6;
                cursor: not-allowed;
                background: rgba(0,0,0,0.05);
            }
            .form-actions {
                margin-top: 10px;
                display: flex;
                justify-content: flex-end;
            }
            .profile-img-container {
                position: relative;
                width: 110px;
                height: 110px;
                margin-bottom: 15px;
            }
            #userAvatar {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid var(--primary-color);
                padding: 3px;
                background: white;
            }
            .edit-avatar-btn {
                position: absolute;
                bottom: 5px;
                right: 5px;
                background: var(--primary-color);
                color: white;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                font-size: 0.9rem;
                transition: 0.3s;
            }
            .edit-avatar-btn:hover { transform: scale(1.1); }
            .user-profile-header {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 10px;
                border-bottom: 1px solid var(--border-color);
                margin-bottom: 20px;
            }
            #profileBio {
                width: 100%;
                min-height: 100px;
                padding: 12px;
                border: 1px solid var(--border-color);
                border-radius: 10px;
                background: var(--nav-bg);
                color: var(--text-color);
                resize: vertical;
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.id = 'injectedStyles';
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }
}

// --- Dashboard Fixer ---
function fixDashboardDOM() {
    // If we are on dashboard.html and the favoritesModal is missing, inject it
    if (window.location.pathname.includes('dashboard.html')) {
        // 1. Favorites Modal (Existing)
        if (!document.getElementById('favoritesModal')) {
            const modalHTML = `
                <div id="favoritesModal" class="modal">
                    <div class="modal-content">
                        <span class="close-modal" id="closeFavorites">&times;</span>
                        <h2 data-i18n="favorites_modal_title">${translations[currentLang].favorites_modal_title || 'Your Favorites'}</h2>
                        <div id="favoritesList" class="favorites-list">
                            <!-- Favorited items will appear here -->
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            
            el.favoritesModal = document.getElementById('favoritesModal');
            el.closeFavorites = document.getElementById('closeFavorites');
            el.favoritesList = document.getElementById('favoritesList');
            
            if (el.closeFavorites) {
                el.closeFavorites.addEventListener('click', () => el.favoritesModal.style.display = 'none');
            }
        }

        // 2. Sidebar Toggle and Overlay for Mobile
        const sidebar = document.querySelector('.dashboard-sidebar');
        if (sidebar && !document.querySelector('.sidebar-toggle-btn')) {
            // Add toggle button
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'sidebar-toggle-btn mobile-only';
            
            // Use User Avatar if available, otherwise use a nice icon
            const userIcon = currentUser && currentUser.profile_image 
                ? `<img src="${currentUser.profile_image}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`
                : `<span style="font-size: 1.2rem;">👤</span>`;
            
            toggleBtn.innerHTML = `
                ${userIcon}
                <span class="toggle-badge"></span>
            `;
            toggleBtn.title = currentLang === 'ar' ? "الملف الشخصي" : "Profile Settings";
            document.body.appendChild(toggleBtn);

            // Add overlay
            const overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);

            const toggleMenu = () => {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
            };

            toggleBtn.addEventListener('click', toggleMenu);
            overlay.addEventListener('click', toggleMenu);

            // 3. Mobile Profile Header Trigger Logic
            const profileTrigger = document.getElementById('mobileProfileTrigger');
            if (profileTrigger) {
                profileTrigger.addEventListener('click', toggleMenu);
            }

            // Close sidebar when clicking any link inside it
            sidebar.querySelectorAll('a, button').forEach(item => {
                item.addEventListener('click', () => {
                    if (sidebar.classList.contains('active')) toggleMenu();
                });
            });
        }
    }
}

// --- Auth UI ---
function updateAuthUI() {
    const authContainers = document.querySelectorAll('.auth-buttons');
    
    if (currentUser) {
        // Logged In State
        authContainers.forEach(container => {
            container.innerHTML = `
                <a href="dashboard.html" class="btn btn-outline" title="Dashboard" data-i18n="dashboard"><i class="fas fa-user-circle"></i> <span>${translations[currentLang].dashboard || 'Dashboard'}</span></a>
                <button class="btn btn-primary" onclick="handleLogout()" title="Logout" data-i18n="logout"><i class="fas fa-sign-out-alt"></i> <span>${currentLang === 'en' ? 'Logout' : 'خروج'}</span></button>
            `;
        });

        if (el.welcomeUser) {
            el.welcomeUser.textContent = currentLang === 'en' 
                ? `Welcome, ${currentUser.full_name}!` 
                : `مرحباً، ${currentUser.full_name}!`;
        }
        
        if (el.userAvatar && currentUser.profile_image) {
            el.userAvatar.src = currentUser.profile_image;
        }

        // Update Mobile Profile Trigger elements if they exist
        const triggerAvatar = document.getElementById('triggerAvatar');
        const triggerWelcome = document.getElementById('triggerWelcome');
        if (triggerAvatar && currentUser.profile_image) triggerAvatar.src = currentUser.profile_image;
        if (triggerWelcome) triggerWelcome.textContent = currentLang === 'ar' ? `مرحباً، ${currentUser.full_name}!` : `Welcome, ${currentUser.full_name}!`;
        
        if (el.userEmailSub) {
            el.userEmailSub.textContent = currentUser.email;
        }

        // Update Sales Performance
        const totalSoldText = document.getElementById('totalSoldText');
        const salesArrowBoxes = document.querySelectorAll('.sales-arrow-box');
        
        if (currentUser.total_sold !== undefined) {
            const soldCount = currentUser.total_sold || 0;
            
            if (totalSoldText) {
                totalSoldText.textContent = `${soldCount} ${translations[currentLang].sales_count}`;
            }
            salesArrowBoxes.forEach(box => {
                const rotationValue = Math.max(90 - (soldCount * 10), 0); 
                box.style.transform = `rotate(${rotationValue}deg)`;
                if (soldCount >= 5) box.style.boxShadow = '0 0 15px rgba(9, 132, 227, 0.6)';
            });
        }

        // Populate Profile Form in Dashboard
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profilePhone = document.getElementById('profilePhone');
        const profileBio = document.getElementById('profileBio');
        
        if (profileName) profileName.value = currentUser.full_name || '';
        if (profileEmail) profileEmail.value = currentUser.email || '';
        if (profilePhone) {
            const phoneVal = currentUser.phone ? String(currentUser.phone).trim() : "";
            profilePhone.value = (phoneVal.toLowerCase() === "null") ? "" : phoneVal;
            
            // Lock phone number if it's already set (Trading Style Security)
            if (phoneVal !== "" && phoneVal.toLowerCase() !== "null") {
                profilePhone.disabled = true;
                const phoneContainer = profilePhone.closest('.input-with-icon');
                if (phoneContainer) {
                    phoneContainer.classList.add('disabled');
                    // Add lock icon if not already there
                    if (!phoneContainer.querySelector('.lock-badge')) {
                        const lock = document.createElement('span');
                        lock.className = 'lock-badge';
                        lock.innerHTML = `<i class="fas fa-lock"></i> ${currentLang === 'ar' ? 'مؤمن' : 'Secured'}`;
                        phoneContainer.appendChild(lock);
                    }
                }
            } else {
                profilePhone.disabled = false;
                const phoneContainer = profilePhone.closest('.input-with-icon');
                if (phoneContainer) {
                    phoneContainer.classList.remove('disabled');
                    const lock = phoneContainer.querySelector('.lock-badge');
                    if (lock) lock.remove();
                }
            }
        }
        
        if (profileBio) profileBio.value = currentUser.bio || '';

    } else {
        // Logged Out State - Reset to default
        authContainers.forEach(container => {
            container.innerHTML = `
                <a href="login.html" class="btn btn-outline" title="Login" data-i18n="login"><i class="fas fa-sign-in-alt"></i> <span>${translations[currentLang].login}</span></a>
                <a href="register.html" class="btn btn-primary" title="Register" data-i18n="register"><i class="fas fa-user-plus"></i> <span>${translations[currentLang].register}</span></a>
            `;
        });
    }
}

// --- Loading Logic ---
function showLoading() {
    const loader = document.getElementById('loaderOverlay');
    if (loader) loader.style.display = 'flex';
}

function hideLoading() {
    const loader = document.getElementById('loaderOverlay');
    if (loader) loader.style.display = 'none';
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
window.handleLogout = handleLogout;

// --- MySQL Fetch Products ---
async function fetchProducts() {
    isFetching = true;
    renderProducts(); // Show loader
    
    try {
        console.log('Fetching products from DB...');
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) throw new Error('Failed to fetch from MySQL');
        const dbProducts = await response.json();
        
        // MySQL is the ONLY source of truth
        products = dbProducts;
        console.log('✅ Products loaded from DB:', products.length);
        
        // Sync Favorites after products are loaded
        if (currentUser) {
            await syncFavoritesWithDB();
        }
    } catch (err) {
        console.error('❌ Database error:', err);
        // If DB fails, we show nothing or default, but NO localstorage fallback for products
        products = [];
        showToast(currentLang === 'en' ? 'Database connection failed!' : 'فشل الاتصال بقاعدة البيانات!', 'error');
    } finally {
        isFetching = false;
        renderProducts();
        renderDashboard();
        updateTradingIndicator(); // Update trading indicator after fetch
    }
}

// --- Theme & Language ---
function updateTheme() {
    document.body.className = currentTheme === 'light' ? 'light-mode' : 'dark-mode';
    if (el.themeIcon) {
        el.themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
    localStorage.setItem('theme', currentTheme);
}

function updateLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    if (el.langText) el.langText.textContent = currentLang === 'en' ? 'AR' : 'EN';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) element.textContent = translations[currentLang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) element.placeholder = translations[currentLang][key];
    });

    localStorage.setItem('lang', currentLang);
    renderProducts();
    updateFavoritesUI(); // Update count and modal content
}

// --- Image Compression ---
function compressImage(base64Str, maxWidth = 800, quality = 0.7) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Str;
        img.onerror = () => reject(new Error('Failed to load image for compression'));
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = (maxWidth / width) * height;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            } catch (err) {
                reject(err);
            }
        };
    });
}

// --- Product Rendering ---
function renderProducts(filterQuery = '', category = 'all') {
    if (!el.productsGrid) return;
    
    // Show loading state in grid only while fetching
    if (isFetching && products.length === 0 && !filterQuery) {
        el.productsGrid.innerHTML = `
            <div class="grid-loader">
                <div class="loader"></div>
                <p>${currentLang === 'en' ? 'Loading products...' : 'جاري تحميل المنتجات...'}</p>
            </div>
        `;
        return;
    }

    el.productsGrid.innerHTML = '';
    
    let filtered = products.filter(p => {
        const name = currentLang === 'en' ? p.name_en : p.name_ar;
        const matchesSearch = name.toLowerCase().includes(filterQuery.toLowerCase());
        const matchesCategory = category === 'all' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
        el.productsGrid.innerHTML = `<p class="no-results" data-i18n="no_results">${translations[currentLang].no_results}</p>`;
        if (el.showAllBtn) el.showAllBtn.style.display = 'none';
        return;
    }

    // Show/Hide "Show All" button based on count
    if (el.showAllBtn) {
        if (filtered.length > 9) {
            el.showAllBtn.style.display = 'inline-block';
            el.showAllBtn.textContent = showAllMode ? translations[currentLang].less_link : translations[currentLang].more_link;
            el.showAllBtn.setAttribute('data-i18n', showAllMode ? 'less_link' : 'more_link');
        } else {
            el.showAllBtn.style.display = 'none';
        }
    }

    const itemsToShow = showAllMode ? filtered : filtered.slice(0, 9);

    itemsToShow.forEach((p, index) => {
        const name = currentLang === 'en' ? p.name_en : p.name_ar;
        const card = document.createElement('div');
        card.className = `product-card ${p.isNew ? 'just-added' : ''}`;
        card.style.animationDelay = `${index * 0.1}s`; // Staggered animation
        
        const isFavorite = favorites.some(fav => fav.id === p.id);
        
        // Fallback for missing images
        const imageSrc = p.image || 'https://via.placeholder.com/400x300?text=No+Image';
        
        // Format date
        const productDate = p.date ? new Date(p.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-EG') : '';

        const conditionClass = p.condition.toLowerCase() === 'new' ? 'badge-new' : 'badge-used';
        const conditionText = currentLang === 'en' ? p.condition : (p.condition === 'New' ? 'جديد' : p.condition === 'Used' ? 'مستعمل' : 'استيراد');

        const isSold = p.status === 'sold';
        const soldBadge = isSold ? `<div class="product-badge badge-sold">${currentLang === 'en' ? 'SOLD' : 'تم البيع'}</div>` : '';

        card.innerHTML = `
            <div class="product-image-container" onclick="openProductDetail(${p.id})">
                <div class="product-badge ${conditionClass}">${conditionText}</div>
                ${soldBadge}
                <img src="${imageSrc}" alt="${sanitizeHTML(name)}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Error'">
            </div>
            <div class="product-info">
                <div class="product-header-new" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
                    <h3 class="product-name-new">${sanitizeHTML(name)}</h3>
                    <span class="product-category-new"><i class="fas fa-tag"></i> ${translations[currentLang][`cat_${p.category}`] || sanitizeHTML(p.category)}</span>
                </div>
                <div class="product-date-new">${productDate}</div>
                
                <div class="product-meta-extra">
                    <span class="seller-info"><i class="fas fa-user"></i> ${sanitizeHTML(p.seller_name) || 'Guest'}</span>
                </div>

                <div class="product-price-row">
                    <span class="product-price">$${p.price}</span>
                    <button class="btn-fav ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${p.id})">
                        ${isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}
                    </button>
                </div>
                <button class="btn btn-primary btn-buy btn-block ${isSold ? 'btn-disabled' : ''}" 
                    onclick="${isSold ? '' : `handleProductBuy('${p.contact}', '${sanitizeHTML(name)}')`}" 
                    data-i18n="btn_buy" 
                    ${isSold ? 'disabled' : ''}>
                    ${isSold ? (currentLang === 'en' ? 'SOLD OUT' : 'تم البيع') : translations[currentLang].btn_buy}
                </button>
            </div>
        `;
        el.productsGrid.appendChild(card);
        
        // Remove highlight class after animation
        if (p.isNew) {
            setTimeout(() => {
                p.isNew = false;
                card.classList.remove('just-added');
            }, 3000);
        }
    });
}

let salesChart = null;

async function renderDashboard() {
    if (!el.userListings) return;
    el.userListings.innerHTML = '<div class="loader-mini"></div>';
    if (el.userSoldListings) el.userSoldListings.innerHTML = '';

    if (!currentUser) {
        el.userListings.innerHTML = `<p data-i18n="no_listings">Please login to view your listings.</p>`;
        return;
    }

    // Populate profile form if on profile section
    if (el.profileForm) {
        document.getElementById('profileName').value = currentUser.full_name || '';
        document.getElementById('profilePhone').value = currentUser.phone || '';
        document.getElementById('profileBio').value = currentUser.bio || '';
        if (currentUser.profile_image) el.userAvatar.src = currentUser.profile_image;
    }

    try {
        // Fetch all user products (including old sold ones) from specialized endpoint
        const response = await fetch(`${API_URL}/products/user/${currentUser.id}`);
        if (!response.ok) throw new Error('Failed to fetch user listings');
        const userProducts = await response.json();

        el.userListings.innerHTML = '';
        if (el.userSoldListings) el.userSoldListings.innerHTML = '';

        const activeProducts = userProducts.filter(p => p.status !== 'sold');
        const soldProducts = userProducts.filter(p => p.status === 'sold');

        // Render Active Products
        if (activeProducts.length === 0) {
            el.userListings.innerHTML = `<p data-i18n="no_listings">${translations[currentLang].no_listings || 'No listings yet.'}</p>`;
        } else {
            activeProducts.forEach(p => {
                const name = currentLang === 'en' ? p.name_en : p.name_ar;
                const item = document.createElement('div');
                item.className = 'fav-item';
                item.innerHTML = `
                    <img src="${p.image}" alt="${sanitizeHTML(name)}" style="width:80px; height:80px; border-radius:8px; object-fit:cover;">
                    <div class="fav-item-info" style="flex:1; margin:0 15px;">
                        <h4 style="margin:0;">${sanitizeHTML(name)}</h4>
                        <p style="color:var(--accent-orange); font-weight:600; margin:5px 0;">$${p.price}</p>
                    </div>
                    <div class="dashboard-actions" style="display:flex; flex-direction:column; gap:8px;">
                        <button class="btn btn-primary btn-sm" onclick="openEditModal(${p.id})">${currentLang === 'ar' ? 'تعديل البيانات' : 'Edit Details'}</button>
                        <button class="btn btn-outline btn-sm" onclick="markAsSold(${p.id})">${currentLang === 'ar' ? 'تحديد كمباع' : 'Mark as Sold'}</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${p.id})">${currentLang === 'ar' ? 'حذف الإعلان' : 'Delete Listing'}</button>
                    </div>
                `;
                el.userListings.appendChild(item);
            });
        }

        // Render Sold Products
        if (el.userSoldListings) {
            if (soldProducts.length === 0) {
                el.userSoldListings.innerHTML = `<p style="opacity:0.6; text-align:center; padding:20px;">${currentLang === 'ar' ? 'لا توجد منتجات مباعة بعد.' : 'No sold products yet.'}</p>`;
            } else {
                soldProducts.forEach(p => {
                    const name = currentLang === 'en' ? p.name_en : p.name_ar;
                    const item = document.createElement('div');
                    item.className = 'fav-item sold-item';
                    
                    // Check if it's "expired" from public view
                    const isPubliclyHidden = p.sold_at && (new Date() - new Date(p.sold_at)) > (47 * 60 * 60 * 1000);

                    item.innerHTML = `
                        <img src="${p.image}" alt="${name}" style="width:80px; height:80px; border-radius:8px; object-fit:cover; filter: grayscale(1);">
                        <div class="fav-item-info" style="flex:1; margin:0 15px;">
                            <h4 style="margin:0; opacity:0.7;">${name}</h4>
                            <p style="color:var(--text-muted); font-weight:600; margin:5px 0;">$${p.price}</p>
                            <span class="sold-badge">${currentLang === 'ar' ? 'مباع' : 'Sold'}</span>
                            ${isPubliclyHidden ? `<span class="hidden-badge" style="font-size:0.7rem; color:var(--text-muted); display:block;">${currentLang === 'ar' ? '(مخفي من العرض العام)' : '(Hidden from public view)'}</span>` : ''}
                        </div>
                        <div class="dashboard-actions">
                            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${p.id})">${currentLang === 'ar' ? 'حذف من السجل' : 'Delete from History'}</button>
                        </div>
                    `;
                    el.userSoldListings.appendChild(item);
                });
            }
        }

        // --- Render Sales Chart ---
        renderSalesChart();

    } catch (err) {
        console.error('Error rendering dashboard:', err);
        el.userListings.innerHTML = '<p>Error loading listings.</p>';
    }
}

async function renderSalesChart() {
    const canvas = document.getElementById('salesChart');
    if (!canvas) return;

    console.log('[Analytics] Initializing Advanced Sales Analytics...');

    try {
        const response = await fetch(`${API_URL}/analytics/sales/${currentUser.id}`);
        const data = await response.json();
        
        console.log('[Analytics] Full Data Received:', data);

        // Update Stats Grid
        const { stats, monthly } = data;
        if (stats) {
            document.getElementById('statTotalRevenue').textContent = `$${Number(stats.total_revenue || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}`;
            document.getElementById('statItemsSold').textContent = stats.total_sold || 0;
            document.getElementById('statAvgPrice').textContent = `$${Number(stats.avg_price || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}`;
        }

        if (salesChart) salesChart.destroy();

        // Prepare chart data
        const labels = monthly && monthly.length ? monthly.map(d => {
            const date = new Date(d.month + '-01');
            return date.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', year: '2-digit' });
        }) : [currentLang === 'ar' ? 'لا توجد بيانات' : 'No Data'];

        const revenueData = monthly && monthly.length ? monthly.map(d => d.revenue) : [0];
        const countData = monthly && monthly.length ? monthly.map(d => d.count) : [0];

        const ctx = canvas.getContext('2d');
        
        // Create Gradient for Revenue Line
        const gradientRevenue = ctx.createLinearGradient(0, 0, 0, 400);
        gradientRevenue.addColorStop(0, 'rgba(9, 132, 227, 0.3)');
        gradientRevenue.addColorStop(1, 'rgba(9, 132, 227, 0)');

        salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: currentLang === 'ar' ? 'الأرباح ($)' : 'Revenue ($)',
                        data: revenueData,
                        borderColor: '#0984e3',
                        backgroundColor: gradientRevenue,
                        fill: true,
                        tension: 0.4,
                        borderWidth: 4,
                        pointRadius: 6,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: '#0984e3',
                        pointHoverRadius: 9,
                        yAxisID: 'yRevenue'
                    },
                    {
                        label: currentLang === 'ar' ? 'عدد المبيعات' : 'Sales Count',
                        data: countData,
                        borderColor: '#00b894',
                        backgroundColor: 'transparent',
                        borderDash: [5, 5],
                        borderWidth: 2,
                        pointRadius: 4,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: '#00b894',
                        tension: 0.4,
                        yAxisID: 'yCount'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        display: true,
                        position: 'top',
                        labels: {
                            font: { family: 'Cairo', size: 12 },
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        titleFont: { size: 14, family: 'Cairo', weight: 'bold' },
                        bodyFont: { size: 13, family: 'Cairo' },
                        padding: 15,
                        cornerRadius: 15,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) label += ': ';
                                if (context.datasetIndex === 0) {
                                    label += '$' + context.parsed.y.toLocaleString();
                                } else {
                                    label += context.parsed.y;
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    yRevenue: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'الأرباح' : 'Revenue',
                            font: { family: 'Cairo', weight: '700' }
                        },
                        ticks: { 
                            font: { family: 'Cairo' },
                            callback: value => '$' + value
                        },
                        grid: { color: 'rgba(0,0,0,0.05)' }
                    },
                    yCount: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'الكمية' : 'Count',
                            font: { family: 'Cairo', weight: '700' }
                        },
                        ticks: { 
                            stepSize: 1,
                            font: { family: 'Cairo' }
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { 
                            font: { family: 'Cairo' },
                            color: '#636e72'
                        },
                        grid: { display: false }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                }
            }
        });
        console.log('[Analytics] Advanced Sales Chart Rendered Successfully.');
    } catch (err) {
        console.error('[Analytics Error] Failed to render advanced sales chart:', err);
    }
}

async function deleteProduct(id) {
    if (!confirm(currentLang === 'en' ? 'Are you sure?' : 'هل أنت متأكد؟')) return;
    
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: currentUser.id })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Delete failed');
        
        // --- Sync MySQL: Re-fetch is safest ---
        await fetchProducts();
        
        // --- Sync Favorites ---
        favorites = favorites.filter(fav => fav.id !== id);
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        updateFavoritesUI();
        
        showToast(currentLang === 'en' ? 'Product deleted from Database!' : 'تم حذف المنتج من قاعدة البيانات!', 'success');
    } catch (err) {
        console.error('❌ MySQL Delete Error:', err);
        showToast(currentLang === 'en' ? 'Error deleting from MySQL' : 'خطأ في الحذف من قاعدة البيانات', 'error');
    }
}
window.deleteProduct = deleteProduct;

async function markAsSold(id) {
    if (!confirm(currentLang === 'en' ? 'Mark this product as sold? It will be hidden from the main page.' : 'هل أنت متأكد من تحديد هذا المنتج كمباع؟ سيتم إخفاؤه من الصفحة الرئيسية.')) return;
    
    try {
        const response = await fetch(`${API_URL}/products/${id}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'sold', userId: currentUser.id })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to update status');
        
        // Update local currentUser to reflect new sales count
        if (currentUser) {
            currentUser.total_sold = (currentUser.total_sold || 0) + 1;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateAuthUI(); // Refresh the UI (Arrow and Stats)
        }
        
        // --- Sync MySQL: Re-fetch to ensure consistency ---
        await fetchProducts();
        
        // Refresh Analytics specifically
        renderSalesChart();
        
        showToast(currentLang === 'en' ? 'Product marked as sold in Database!' : 'تم تحديد المنتج كمباع في قاعدة البيانات!', 'success');
    } catch (err) {
        console.error('❌ Error updating status:', err);
        showToast(currentLang === 'en' ? 'Error updating product status' : 'خطأ في تحديث حالة المنتج', 'error');
    }
}
window.markAsSold = markAsSold;

async function openEditModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('editProductId').value = product.id;
    document.getElementById('editPartName').value = currentLang === 'en' ? product.name_en : product.name_ar;
    document.getElementById('editPartPrice').value = product.price;
    document.getElementById('editPartCategory').value = product.category;
    document.getElementById('editPartCondition').value = product.condition;
    
    if (el.editImagePreview) {
        el.editImagePreview.innerHTML = `<img src="${product.image}" style="width:100%; height:100%; object-fit:cover; border-radius:10px;">`;
    }
    
    if (el.editModal) el.editModal.style.display = 'block';
}
window.openEditModal = openEditModal;

// Initialize Edit Modal Listeners
if (el.closeEdit) {
    el.closeEdit.onclick = () => el.editModal.style.display = 'none';
}

const editPartImage = document.getElementById('editPartImage');
if (editPartImage) {
    editPartImage.onchange = async function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const compressed = await compressImage(e.target.result);
                el.editImagePreview.innerHTML = `<img src="${compressed}" style="width:100%; height:100%; object-fit:cover; border-radius:10px;">`;
            };
            reader.readAsDataURL(file);
        }
    };
}

if (el.editForm) {
    el.editForm.onsubmit = async (e) => {
        e.preventDefault();
        const id = document.getElementById('editProductId').value;
        const submitBtn = el.editForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loader-mini"></span>';

        const updatedData = {
            userId: currentUser.id,
            name_en: document.getElementById('editPartName').value,
            name_ar: currentLang === 'ar' ? document.getElementById('editPartName').value : null,
            price: document.getElementById('editPartPrice').value,
            category: document.getElementById('editPartCategory').value,
            condition: document.getElementById('editPartCondition').value,
            image: el.editImagePreview.querySelector('img') ? el.editImagePreview.querySelector('img').src : null
        };

        try {
            const response = await fetch(`${API_URL}/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            });

            if (response.ok) {
                showToast(currentLang === 'en' ? 'Product updated!' : 'تم تحديث المنتج بنجاح!', 'success');
                el.editModal.style.display = 'none';
                await fetchProducts();
            } else {
                const err = await response.json();
                showToast(err.error || 'Update failed', 'error');
            }
        } catch (err) {
            showToast('Server error', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    };
}

// --- Article Data ---
const articles = {
    guide_1: {
        title_en: "Choosing the Right Oil Filter",
        title_ar: "كيفية اختيار فلتر الزيت المناسب",
        image: "./assets/guide1.png",
        content_en: "Your engine's health depends on clean oil. An oil filter removes contaminants from your car engine's oil that can accumulate over time. Choosing the right one means looking at the filter media quality, the bypass valve, and the build material. Always check your car's manual for the specific micron rating required.",
        content_ar: "تعتمد صحة محركك على نظافة الزيت. يقوم فلتر الزيت بإزالة الملوثات من زيت محرك سيارتك التي يمكن أن تتراكم بمرور الوقت. اختيار الفلتر الصحيح يعني النظر في جودة مادة الفلترة، وصمام الأمان، ومواد التصنيع. تحقق دائماً من دليل سيارتك لمعرفة تصنيف الميكرون المحدد المطلوب."
    },
    guide_2: {
        title_en: "AGM vs Lead-Acid Batteries",
        title_ar: "بطاريات AGM مقابل الرصاص",
        image: "./assets/guide2.png",
        content_en: "AGM (Absorbent Glass Mat) batteries are more expensive but offer higher performance, faster charging, and better vibration resistance compared to standard Lead-Acid batteries. If your car has a Start-Stop system, an AGM battery is almost always required to handle the high electrical demand.",
        content_ar: "تعد بطاريات AGM أكثر تكلفة ولكنها توفر أداءً أعلى وشحناً أسرع ومقاومة أفضل للاهتزاز مقارنة ببطاريات الرصاص القياسية. إذا كانت سيارتك تحتوي على نظام Start-Stop، فإن بطارية AGM مطلوبة دائماً تقريباً للتعامل مع الطلب الكهربائي العالي."
    },
    tips: {
        title_en: "Expert Maintenance Tips",
        title_ar: "نصائح صيانة الخبراء",
        image: "./assets/threa.png",
        content_en: "Maintaining your car doesn't have to be hard. Regularly check your engine oil, monitor tire pressure, and never ignore warning lights. Proper maintenance can increase your vehicle's lifespan by up to 50% and save you from costly breakdowns.",
        content_ar: "صيانة سيارتك لا يجب أن تكون صعبة. تحقق بانتظام من زيت المحرك، وراقب ضغط الإطارات، ولا تتجاهل أبداً أضواء التحذير. يمكن للصيانة المناسبة أن تزيد من عمر سيارتك بنسبة تصل إلى 50٪ وتوفر عليك من الأعطال المكلفة."
    }
};

// --- WhatsApp Logic ---
function buyOnWhatsApp(phone, productName) {
    const message = currentLang === 'en' 
        ? `Hello, I am interested in buying: ${productName}` 
        : `مرحباً، أنا مهتم بشراء: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function handleProductBuy(contact, name) {
    if (!currentUser) {
        showToast(currentLang === 'en' ? 'Please login to buy products!' : 'يرجى تسجيل الدخول لشراء المنتجات!', 'info');
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }
    buyOnWhatsApp(contact, name);
}
window.handleProductBuy = handleProductBuy;

// --- Article Logic ---
function showArticle(articleId) {
    const article = articles[articleId];
    if (!article) return;

    const title = currentLang === 'en' ? article.title_en : article.title_ar;
    const content = currentLang === 'en' ? article.content_en : article.content_ar;

    el.articleContent.innerHTML = `
        <img src="${article.image}" alt="${title}">
        <h2>${title}</h2>
        <p>${content}</p>
        <button class="btn btn-primary" onclick="el.articleModal.style.display='none'">
            ${currentLang === 'en' ? 'Close' : 'إغلاق'}
        </button>
    `;
    el.articleModal.style.display = 'block';
}
window.showArticle = showArticle;

// --- Favorites Logic ---
async function syncFavoritesWithDB() {
    if (!currentUser) {
        favorites = [];
        updateFavoritesUI();
        return;
    }
    
    try {
        console.log(`[Favorites] Syncing for user ${currentUser.id}...`);
        const response = await fetch(`${API_URL}/favorites/${currentUser.id}`);
        if (!response.ok) throw new Error('Failed to fetch favorites');
        const favoriteIds = await response.json();
        
        console.log(`[Favorites] IDs from DB:`, favoriteIds);
        
        // Map IDs to actual product objects from the global products list
        // Use Number() to ensure type matching
        favorites = favoriteIds.map(id => products.find(p => Number(p.id) === Number(id))).filter(p => p !== undefined);
        
        console.log(`[Favorites] Matched products:`, favorites.length);
        
        // Update LocalStorage for immediate use across tabs
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        updateFavoritesUI();
    } catch (err) {
        console.error('Error syncing favorites:', err);
        // Fallback to LocalStorage if DB fails
        favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`)) || [];
        updateFavoritesUI();
    }
}

async function toggleFavorite(id) {
    if (!currentUser) {
        showToast(currentLang === 'en' ? 'Please login to add to favorites!' : 'يرجى تسجيل الدخول لإضافة المنتجات للمفضلة!', 'info');
        setTimeout(() => {
            if (window.location.pathname.includes('login.html')) return;
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    // Ensure id is a number for comparison
    const targetId = Number(id);
    const index = favorites.findIndex(f => Number(f.id) === targetId);
    const isAdding = index === -1;
    
    console.log(`[Favorite] ${isAdding ? 'Adding' : 'Removing'} product ID: ${targetId} for user: ${currentUser.id}`);
    
    try {
        if (isAdding) {
            // Adding: Call API
            const response = await fetch(`${API_URL}/favorites`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: currentUser.id, productId: targetId })
            });
            if (!response.ok) throw new Error('Failed to add favorite');
            
            const product = products.find(p => Number(p.id) === targetId);
            if (product) favorites.push(product);
        } else {
            // Removing: Call API
            const response = await fetch(`${API_URL}/favorites/${currentUser.id}/${targetId}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to remove favorite');
            
            favorites.splice(index, 1);
        }

        // Update storage and refresh BOTH Grid and Modal UI
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        updateFavoritesUI();
        
        // Re-render current view to update heart icon state
        if (el.userListings && (window.location.pathname.includes('dashboard.html') || document.getElementById('userListings'))) {
            renderDashboard();
        } else if (el.productsGrid) {
            renderProducts(el.searchInput ? el.searchInput.value : '');
        }

        showToast(isAdding ? 
            (currentLang === 'en' ? 'Added to favorites' : 'تمت الإضافة للمفضلة') : 
            (currentLang === 'en' ? 'Removed from favorites' : 'تم الحذف من المفضلة'), 'success');

    } catch (err) {
        console.error('Error toggling favorite:', err);
        showToast(currentLang === 'en' ? 'Error updating favorites' : 'خطأ في تحديث المفضلات', 'error');
    }
}

// Make globally accessible for onclick events
window.toggleFavorite = toggleFavorite;
window.syncFavoritesWithDB = syncFavoritesWithDB;

function updateFavoritesUI() {
    if (el.favoritesCount) {
        const count = favorites.length;
        el.favoritesCount.textContent = count;
        // Make sure it's always flex and visible
        el.favoritesCount.style.display = 'flex';
        // Optional: add a class if count is 0 to style it differently
        if (count === 0) {
            el.favoritesCount.style.opacity = '0.7';
        } else {
            el.favoritesCount.style.opacity = '1';
        }
    }
    renderFavorites();
    updateTradingIndicator(); // Also update trading indicator
}

async function updateTradingIndicator() {
    const salesVal = document.getElementById('totalSalesCount');
    const arrow = document.getElementById('tradingArrow');
    if (!salesVal || !arrow) return;

    try {
        let total = 0;
        
        // If we are on dashboard, show user-specific sales
        if (window.location.pathname.includes('dashboard.html') && currentUser) {
            total = currentUser.total_sold || 0;
        } else {
            // Otherwise show global sales
            const response = await fetch(`${API_URL}/sales/total`);
            const data = await response.json();
            total = data.total || 0;
        }

        // Animate counter
        const current = parseInt(salesVal.textContent) || 0;
        if (total > current) {
            let start = current;
            const duration = 1500;
            const startTime = performance.now();

            function animate(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                const value = Math.floor(progress * (total - start) + start);
                salesVal.textContent = value;
                if (progress < 1) requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
        } else {
            salesVal.textContent = total;
        }

        // Update Arrow width: 1% per sale as requested ("point by point")
        const maxWidth = 100;
        const widthPerSale = 1; // 1% per sale
        const finalWidth = Math.min(total * widthPerSale, maxWidth);
        arrow.style.width = `${finalWidth}%`;

        // Update last sale time text
        const timeEl = document.getElementById('lastSaleTime');
        if (timeEl) {
            if (window.location.pathname.includes('dashboard.html')) {
                timeEl.textContent = currentLang === 'ar' ? 'تحديث تلقائي' : 'Real-time update';
            } else {
                timeEl.textContent = currentLang === 'ar' ? 'تم التحديث الآن' : 'Just updated';
            }
        }
    } catch (err) {
        console.error('Failed to update trading indicator:', err);
    }
}

function renderFavorites() {
    if (!el.favoritesList) return;
    el.favoritesList.innerHTML = '';

    if (favorites.length === 0) {
        el.favoritesList.innerHTML = `<p class="no-favorites" data-i18n="no_favorites">${translations[currentLang].no_favorites}</p>`;
        return;
    }

    favorites.forEach(f => {
        const name = currentLang === 'en' ? f.name_en : f.name_ar;
        const item = document.createElement('div');
        item.className = 'fav-item';
        item.innerHTML = `
            <img src="${f.image}" alt="${name}">
            <div class="fav-item-info">
                <h4>${name}</h4>
                <p class="product-price">$${f.price}</p>
                <div class="fav-item-meta">
                    <span>👤 ${f.seller_name || 'Guest'}</span>
                </div>
            </div>
            <div class="fav-item-actions">
                <button class="btn btn-primary btn-sm" onclick="buyOnWhatsApp('${f.contact}', '${name}')" data-i18n="btn_buy">
                    ${translations[currentLang].btn_buy}
                </button>
                <button class="btn-icon delete-fav" onclick="toggleFavorite(${f.id})">🗑️</button>
            </div>
        `;
        el.favoritesList.appendChild(item);
    });
}

// --- Search & Autocomplete ---
function handleSearch(input, suggestionsBox) {
    if (!input || !suggestionsBox) return;
    
    const query = input.value.trim();
    if (!query) {
        suggestionsBox.style.display = 'none';
        renderProducts();
        return;
    }

    const matches = products.filter(p => {
        const name = currentLang === 'en' ? p.name_en : p.name_ar;
        return name.toLowerCase().includes(query.toLowerCase());
    }).slice(0, 5);

    if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(p => {
            const name = currentLang === 'en' ? p.name_en : p.name_ar;
            return `<div class="suggestion-item" onclick="selectSuggestion('${name}', '${input.id}')">${name}</div>`;
        }).join('');
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
    renderProducts(query);
}

window.selectSuggestion = (name, inputId) => {
    const input = document.getElementById(inputId);
    if (input) input.value = name;
    
    if (el.searchSuggestions) el.searchSuggestions.style.display = 'none';
    if (el.mobileSearchSuggestions) el.mobileSearchSuggestions.style.display = 'none';
    
    renderProducts(name);
};

function updateUploadCounter() {
    return;
}

// --- Chatbot Logic ---
function initChatbot() {
    let lastTopic = null;

    const chatbotData = {
        welcomeMessage: `أهلاً بك في مساعد AutoParts Hub! 👋<br>عايزني أساعدك في إيه؟ اكتب الرقم المناسب:<br><br>
            1️⃣ - إزاي أرفع منتج للبيع؟<br>
            2️⃣ - إزاي أشتري قطعة أو أكلم البائع؟<br>
            3️⃣ - إزاي أبحث عن قطع غيار؟<br>
            4️⃣ - الدعم الفني وتواصل مع الإدارة.<br>
            5️⃣ - الأمان وسياسة الموقع.<br>
            6️⃣ - طرق الدفع المتوفرة.`,
        
        menuOptions: {
            "1": {
                answer: "لرفع منتج، سجل دخولك أولاً، ثم اضغط على زر 'رفع منتج جديد' في الصفحة الرئيسية أو لوحة التحكم، واملاً بيانات القطعة وصورتها.",
                detail: "تأكد من اختيار صورة واضحة وكتابة سعر مناسب ورقم واتساب صحيح لسهولة التواصل. سيظهر منتجك في الصفحة الرئيسية فوراً بعد الرفع."
            },
            "2": {
                answer: "عند الضغط على 'شراء الآن'، سيتم فتح محادثة واتساب مباشرة مع البائع مع رسالة مجهزة باسم القطعة.",
                detail: "هذه الميزة تسهل عليك التفاوض المباشر مع صاحب المنتج دون وسيط. تأكد من وجود تطبيق واتساب مثبت على جهازك."
            },
            "3": {
                answer: "استخدم شريط البحث في الأعلى واكتب اسم القطعة، أو يمكنك سؤالي هنا مباشرة بكتابة 'بحث عن' وبعدها اسم القطعة.",
                detail: "نظام البحث لدينا ذكي ويقترح عليك الكلمات بمجرد البدء في الكتابة. جرب كتابة اسم القطعة باللغة العربية أو الإنجليزية."
            },
            "4": {
                answer: "يمكنك التواصل مع إدارة الموقع مباشرة عبر البريد الإلكتروني mahmoud.hosni.24114@gmail.com أو الاتصال بنا على 01093496054.",
                detail: "تواصل مع محمود حسني للحصول على أي دعم فني أو استفسارات. نحن متاحون للرد على استفساراتكم على مدار الساعة."
            },
            "5": {
                answer: "نحن نولي أهمية قصوى للأمان. جميع بياناتك مشفرة، وكلمات المرور لا تُخزن بشكل نصي، واتصالك بالموقع محمي بالكامل.",
                detail: "نستخدم بروتوكولات حماية متطورة (Helmet & Bcrypt) لضمان عدم وصول أي شخص لبياناتك الشخصية."
            },
            "6": {
                answer: "الدفع يتم بالاتفاق المباشر بينك وبين البائع (غالباً كاش عند الاستلام). الموقع لا يتدخل في عملية الدفع حالياً.",
                detail: "نحن مجرد وسيط يربط البائع بالمشتري. ننصح دائماً بمعاينة القطعة جيداً قبل دفع ثمنها لضمان حقك."
            }
        },

        greetings: ["اهلا", "مرحبا", "سلام", "hi", "hello", "hey", "صباح الخير", "مساء الخير", "يا بوت", "يا ذكي"],
        followups: ["وضح", "اكتر", "explain", "more", "عيد", "تاني", "اعدها", "عدها"],
        fallbacks: [
            "أنا متخصص في الرد بالأرقام لتسهيل الخدمة! اختر رقم من القائمة أو اسألني سؤالاً واضحاً.",
            "عذراً، لم أفهم ذلك. هل تود رؤية القائمة الرئيسية مرة أخرى؟ اكتب 'قائمة'.",
        ]
    };

    const chatWindow = document.getElementById('chatbotWindow');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const sendBtn = document.getElementById('chatSend');
    const toggleBtn = document.getElementById('chatbotToggle');

    const closeChatBtn = document.getElementById('closeChat');

    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const isVisible = chatWindow.style.display === 'flex';
        chatWindow.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
            chatInput.focus();
            if (chatBody.children.length <= 1) {
                addMessage(chatbotData.welcomeMessage, 'bot', true);
            }
        }
    });

    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWindow.style.display = 'none';
        });
    }

    function addMessage(text, type, isHtml = false) {
        const msg = document.createElement('div');
        msg.className = `chat-msg ${type}`;
        if (isHtml) msg.innerHTML = text;
        else msg.textContent = text;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'chat-msg bot typing';
        typing.id = 'typingIndicator';
        typing.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        chatBody.appendChild(typing);
        chatBody.scrollTop = chatBody.scrollHeight;
        return typing;
    }

    async function handleChat() {
        const rawText = chatInput.value.trim();
        if (!rawText) return;
        const text = rawText.toLowerCase();

        addMessage(rawText, 'user');
        chatInput.value = '';

        const indicator = showTypingIndicator();

        setTimeout(async () => {
            indicator.remove();
            let response = "";

            // 1. Check for Number-based Menu Input
            if (chatbotData.menuOptions[text]) {
                response = chatbotData.menuOptions[text].answer;
                lastTopic = text;
            } 
            // 2. Check for Greetings or Menu Request
            else if (chatbotData.greetings.some(g => text.includes(g)) || text.includes("قائمة") || text.includes("menu")) {
                response = chatbotData.welcomeMessage;
            }
            // 3. Product Search Integration (Live Search)
            else if (text.includes("بحث عن") || text.includes("search for") || text.includes("عندكم") || text.includes("فين")) {
                const query = text.replace(/بحث عن|search for|عندكم|فين|عايز|موجود/g, "").trim();
                if (query.length > 2) {
                    try {
                        const res = await fetch(`${API_URL}/products`);
                        const products = await res.json();
                        const found = products.filter(p => 
                            p.name_en.toLowerCase().includes(query) || 
                            p.name_ar.toLowerCase().includes(query)
                        );
                        if (found.length > 0) {
                            const count = found.length;
                            const items = found.slice(0, 2).map(p => `• ${currentLang === 'ar' ? p.name_ar : p.name_en} (${p.price}$)`).join('<br>');
                            response = `لقد وجدت ${count} منتجاً يطابق بحثك لـ "${query}":<br>${items}${count > 2 ? '<br>...والمزيد متوفر في الموقع' : ''}`;
                        } else {
                            response = `عذراً، لم أجد قطع غيار مطابقة لـ "${query}". هل تريد رؤية القائمة؟`;
                        }
                    } catch (e) { response = "حدث خطأ أثناء البحث. جرب مرة أخرى."; }
                } else {
                    response = "اكتب اسم القطعة التي تبحث عنها بعد كلمة 'بحث عن'.";
                }
            }
            // 4. Follow-up Logic
            else if (chatbotData.followups.some(f => text.includes(f)) && lastTopic) {
                const topic = chatbotData.menuOptions[lastTopic];
                response = `بالتأكيد! إليك توضيح أكثر: ${topic.detail}`;
            }
            // 5. Default Fallback + Show Menu
            else {
                response = chatbotData.fallbacks[Math.floor(Math.random() * chatbotData.fallbacks.length)] + "<br><br>" + chatbotData.welcomeMessage;
            }

            addMessage(response, 'bot', true);
        }, 800);
    }

    sendBtn.addEventListener('click', handleChat);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChat();
    });
}

// --- Event Listeners ---
function setupEventListeners() {
    console.log('--- Setting up Event Listeners ---');
    
    if (el.langToggle) {
        el.langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguage();
        });
    }

    if (el.themeToggle) {
        el.themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            updateTheme();
        });
    }

    if (el.searchInput) {
        el.searchInput.addEventListener('input', () => handleSearch(el.searchInput, el.searchSuggestions));
    }
    
    if (el.mobileSearchInput) {
        el.mobileSearchInput.addEventListener('input', () => handleSearch(el.mobileSearchInput, el.mobileSearchSuggestions));
    }

    if (el.openFavorites) el.openFavorites.addEventListener('click', () => el.favoritesModal.style.display = 'block');
    if (el.closeFavorites) el.closeFavorites.addEventListener('click', () => el.favoritesModal.style.display = 'none');
    if (el.closeArticle) el.closeArticle.addEventListener('click', () => el.articleModal.style.display = 'none');

    // Open Upload Modal Buttons (Unified)
    const attachOpenUpload = () => {
        const btns = document.querySelectorAll('#openUploadBtn, #openUploadBtnHome, .open-upload-btn');
        btns.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                console.log('Open Upload Clicked');
                if (!currentUser) {
                    showToast(translations[currentLang].please_login_upload, 'info');
                    setTimeout(() => window.location.href = 'login.html', 1500);
                    return;
                }

                // Check Daily Limit before opening
                const today = new Date().toLocaleDateString('en-CA');
                const lastDate = currentUser.last_upload_date ? new Date(currentUser.last_upload_date).toLocaleDateString('en-CA') : '';
                const count = (lastDate === today) ? (currentUser.upload_count_today || 0) : 0;

                if (count >= 5) {
                    showToast(translations[currentLang].daily_limit_reached, 'error');
                    return;
                }

                if (el.uploadModal) {
                    el.uploadModal.style.display = 'block';
                    updateUploadCounter();
                }
            };
        });
    };
    attachOpenUpload();

    if (el.closeUpload) {
        el.closeUpload.addEventListener('click', () => {
            el.uploadModal.style.display = 'none';
            const preview = document.getElementById('imagePreview');
            if (preview) {
                preview.style.display = 'none';
                preview.innerHTML = '';
            }
        });
    }

    // Dashboard Tabs
    if (el.showProfileBtn) {
        el.showProfileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            el.profileSection.style.display = 'block';
            el.listingsSection.style.display = 'none';
            if (el.requestsSection) el.requestsSection.style.display = 'none';
            el.showProfileBtn.classList.add('active');
            el.showListingsBtn.classList.remove('active');
            if (el.showRequestsBtn) el.showRequestsBtn.classList.remove('active');
        });
    }

    if (el.showListingsBtn) {
        el.showListingsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            el.profileSection.style.display = 'none';
            el.listingsSection.style.display = 'block';
            if (el.requestsSection) el.requestsSection.style.display = 'none';
            el.showListingsBtn.classList.add('active');
            el.showProfileBtn.classList.remove('active');
            if (el.showRequestsBtn) el.showRequestsBtn.classList.remove('active');
        });
    }

    if (el.showRequestsBtn) {
        el.showRequestsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (el.requestsSection) el.requestsSection.style.display = 'block';
            el.listingsSection.style.display = 'none';
            el.profileSection.style.display = 'none';
            el.showRequestsBtn.classList.add('active');
            el.showListingsBtn.classList.remove('active');
            el.showProfileBtn.classList.remove('active');
            renderUserRequests();
        });
    }

    async function renderUserRequests() {
        if (!el.userRequestsList) return;
        el.userRequestsList.innerHTML = '<div class="loader-mini"></div>';
        
        try {
            const response = await fetch(`${API_URL}/requests`);
            const allRequests = await response.json();
            const userRequests = allRequests.filter(r => r.user_id === currentUser.id);
            
            el.userRequestsList.innerHTML = '';
            if (userRequests.length === 0) {
                el.userRequestsList.innerHTML = `<p style="padding:20px; text-align:center; opacity:0.7;">${translations[currentLang].no_requests}</p>`;
                return;
            }

            userRequests.forEach(r => {
                const item = document.createElement('div');
                item.className = 'fav-item';
                item.innerHTML = `
                    <div class="fav-item-info" style="flex:1;">
                        <h4 style="margin:0;">${r.part_name}</h4>
                        <p style="color:var(--primary-color); font-size:0.8rem; margin:5px 0;">${translations[currentLang][`cat_${r.category}`] || r.category}</p>
                        <p style="font-size:0.9rem; color:var(--text-muted); margin:0;">${r.details}</p>
                    </div>
                    <div class="dashboard-actions">
                        <button class="btn btn-danger btn-sm" onclick="deleteUserRequest(${r.id})">${currentLang === 'ar' ? 'حذف الطلب' : 'Delete Request'}</button>
                    </div>
                `;
                el.userRequestsList.appendChild(item);
            });
        } catch (err) {
            console.error('Error rendering user requests:', err);
            el.userRequestsList.innerHTML = '<p>Error loading requests.</p>';
        }
    }

    window.deleteUserRequest = async (id) => {
        if (!confirm(currentLang === 'ar' ? 'هل تريد حذف هذا الطلب؟' : 'Delete this request?')) return;
        try {
            const response = await fetch(`${API_URL}/requests/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: currentUser.id })
            });
            if (response.ok) {
                showToast(currentLang === 'ar' ? 'تم الحذف' : 'Deleted', 'success');
                renderUserRequests();
            }
        } catch (err) {
            showToast('Error deleting', 'error');
        }
    };

    // Profile Image Update
    if (el.profileImgInput) {
        el.profileImgInput.addEventListener('change', async function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    try {
                        showLoading();
                        const compressed = await compressImage(e.target.result, 400, 0.7);
                        if (el.userAvatar) el.userAvatar.src = compressed;
                        await saveProfile(compressed);
                    } catch (err) {
                        console.error('Avatar update error:', err);
                    } finally {
                        hideLoading();
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Profile Form Submit
    if (el.profileForm) {
        el.profileForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await saveProfile();
        });
    }

    // Auth Forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        console.log('[Auth] Login form found and listener attached.');
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('[Auth] Login form submitted.');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            
            const email = emailInput ? emailInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value : "";

            try {
                showLoading();
                const payload = { email, password };
                console.log('[Auth] Attempting login with:', email);
                
                const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                console.log(`[Auth] Login status: ${response.status}`);
                
                const contentType = response.headers.get("content-type");
                let data;
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    data = await response.json();
                } else {
                    const text = await response.text();
                    console.error('[Auth] Server returned non-JSON response:', text);
                    throw new Error(currentLang === 'ar' ? 'حدث خطأ في السيرفر (رد غير صالح)' : 'Server error (Invalid response)');
                }
                
                if (!response.ok) {
                    console.error('[Auth] Login failed:', data.error);
                    throw new Error(data.error || 'Login failed');
                }

                console.log('[Auth] Login successful. Saving user data.');
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                showToast(currentLang === 'en' ? 'Login successful!' : 'تم تسجيل الدخول بنجاح!', 'success');
                setTimeout(() => window.location.href = 'index.html', 1000);
            } catch (err) {
                console.error('[Auth] Login error caught:', err);
                showToast(err.message, 'error');
            } finally {
                hideLoading();
            }
        });
    }

    if (registerForm) {
        console.log('[Auth] Register form found and listener attached.');
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('[Auth] Register form submitted.');
            const nameInput = document.getElementById('regName');
            const emailInput = document.getElementById('regEmail');
            const phoneInput = document.getElementById('regPhone');
            const passwordInput = document.getElementById('regPassword');
            const confirmInput = document.getElementById('confirmPassword');

            const full_name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const phone = phoneInput ? phoneInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value : "";
            const confirm = confirmInput ? confirmInput.value : "";

            console.log(`[Auth] Register attempt: Name="${full_name}", Email="${email}", Phone="${phone}"`);

            if (!full_name || !email || !password) {
                showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة!' : 'Please fill all required fields!', 'error');
                return;
            }

            if (password !== confirm) {
                showToast(translations[currentLang]?.pass_mismatch || 'Passwords do not match', 'error');
                return;
            }

            try {
                showLoading();
                const payload = { full_name, email, phone, password };
                console.log('[Auth] Sending registration payload:', payload);
                
                const response = await fetch(`${API_URL}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                console.log(`[Auth] Register status: ${response.status}`);
                
                const contentType = response.headers.get("content-type");
                let data;
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    data = await response.json();
                } else {
                    const text = await response.text();
                    console.error('[Auth] Server returned non-JSON response during registration:', text);
                    throw new Error(currentLang === 'ar' ? 'حدث خطأ في السيرفر أثناء التسجيل' : 'Server error during registration');
                }
                
                if (!response.ok) {
                    console.error('[Auth] Registration failed:', data.error);
                    throw new Error(data.error || 'Registration failed');
                }

                console.log('[Auth] Registration successful.');
                showToast(currentLang === 'en' ? 'Registration successful! Redirecting...' : 'تم التسجيل بنجاح! جاري التحويل...', 'success');
                setTimeout(() => window.location.href = 'login.html', 1500);
            } catch (err) {
                console.error('[Auth] Register error caught:', err);
                showToast(err.message, 'error');
            } finally {
                hideLoading();
            }
        });
    }


    if (el.showAllBtn) {
        el.showAllBtn.addEventListener('click', () => {
            showAllMode = !showAllMode;
            renderProducts();
            if (!showAllMode) {
                document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    window.addEventListener('click', (e) => {
        if (el.favoritesModal && e.target === el.favoritesModal) el.favoritesModal.style.display = 'none';
        if (el.uploadModal && e.target === el.uploadModal) el.uploadModal.style.display = 'none';
    });
}

// --- Profile Update ---
async function saveProfile(newImg = null) {
    if (!currentUser) return;
    
    const nameEl = document.getElementById('profileName');
    const phoneEl = document.getElementById('profilePhone');
    const bioEl = document.getElementById('profileBio');
    
    const updatedData = {
        userId: currentUser.id,
        full_name: nameEl ? nameEl.value.trim() : currentUser.full_name,
        phone: phoneEl ? phoneEl.value.trim() : currentUser.phone,
        address: currentUser.address, // Keep existing address from DB
        bio: bioEl ? bioEl.value.trim() : (currentUser.bio || ""),
        profile_image: newImg || (el.userAvatar ? el.userAvatar.src : currentUser.profile_image)
    };

    try {
        showLoading();
        const response = await fetch(`${API_URL}/users/${currentUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Update failed');

        // Update state with verified data from server
        currentUser = { ...data.user };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Re-lock fields if they were updated
        const profilePhone = document.getElementById('profilePhone');
        if (profilePhone && profilePhone.value.trim() !== "") profilePhone.disabled = true;

        updateAuthUI();
        if (el.userListings) renderDashboard();
        syncUserLimit();
        
        showToast(translations[currentLang].profile_updated, 'success');
    } catch (err) {
        console.error('Profile update error:', err);
        showToast(translations[currentLang].update_failed, 'error');
    } finally {
        hideLoading();
    }
}

// --- Upload Logic ---
// --- Scroll Reveal & Navbar Logic ---
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.section-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// --- Upload Logic ---
function initUploadLogic() {
    console.log('--- Initializing Upload Logic ---');
    const partImageInput = document.getElementById('partImage');
    const uploadForm = document.getElementById('uploadForm');
    const imagePreview = document.getElementById('imagePreview');

    if (partImageInput) {
        partImageInput.onchange = function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (imagePreview) {
                        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                        imagePreview.style.display = 'block';
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    }

    if (uploadForm) {
        console.log('✅ Upload Form Found, Attaching Listener');
        uploadForm.onsubmit = async (e) => {
            e.preventDefault();
            console.log('--- Upload Form Submitted ---');
            
            if (!currentUser) {
                console.error('Upload Error: No current user found');
                showToast(translations[currentLang].please_login_upload, 'error');
                return;
            }

            // Final check for Daily Limit
            const today = new Date().toLocaleDateString('en-CA');
            const lastDate = currentUser.last_upload_date ? new Date(currentUser.last_upload_date).toLocaleDateString('en-CA') : '';
            const count = (lastDate === today) ? (currentUser.upload_count_today || 0) : 0;

            if (count >= 5) {
                showToast(translations[currentLang].daily_limit_reached, 'error');
                if (el.uploadModal) el.uploadModal.style.display = 'none';
                return;
            }

            const name = document.getElementById('partName').value.trim();
            const price = parseFloat(document.getElementById('partPrice').value);
            const category = document.getElementById('partCategory').value;
            const conditionEl = document.getElementById('partCondition');
            const condition = conditionEl ? conditionEl.value : 'New';

            console.log('Form Data:', { name, price, category, condition });

            if (!name || isNaN(price)) {
                showToast(currentLang === 'en' ? 'Please fill all fields!' : 'يرجى ملء جميع الحقول!', 'error');
                return;
            }

            const submitBtn = uploadForm.querySelector('button[type="submit"]');
            const fileInput = document.getElementById('partImage');
            const file = fileInput.files[0];
            
            if (!file) {
                showToast(currentLang === 'en' ? 'Please select an image!' : 'يرجى اختيار صورة!', 'error');
                return;
            }

            if (submitBtn.disabled) return;
            submitBtn.disabled = true;
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = currentLang === 'en' ? 'Uploading...' : 'جاري الرفع...';

            const reader = new FileReader();
            reader.onload = async function(event) {
                showLoading();
                try {
                    let finalImage = event.target.result;
                    if (!finalImage) {
                        showToast(currentLang === 'en' ? 'Please select an image!' : 'يرجى اختيار صورة!', 'error');
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                        hideLoading();
                        return;
                    }
                    try {
                        console.log('Compressing image...');
                        finalImage = await compressImage(finalImage, 800, 0.6);
                    } catch (compError) {
                        console.warn("Compression failed", compError);
                    }
                    
                    const newProduct = {
                        user_id: currentUser.id,
                        name_en: name,
                        name_ar: name,
                        price: price,
                        contact: currentUser.phone, // Auto-take from user account
                        category: category,
                        condition: condition,
                        location: currentUser.address, // Auto-take from user account
                        seller_name: currentUser.full_name, // Auto-take from user account
                        date: new Date().toISOString().split('T')[0],
                        image: finalImage, 
                        isNew: true 
                    };

                    console.log('Sending product with user data:', { 
                        seller: newProduct.seller_name, 
                        phone: newProduct.contact, 
                        loc: newProduct.location 
                    });

                    try {
                        const response = await fetch(`${API_URL}/products`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newProduct)
                        });

                        const resData = await response.json();
                        if (!response.ok) {
                            if (response.status === 403) {
                                showToast(resData.message, 'error');
                            } else {
                                console.error('Server Error:', resData);
                                throw new Error(resData.error || 'Database failed to save product');
                            }
                            return;
                        }
                        
                        console.log('✅ Product saved successfully in DB');
                        await fetchProducts();
                        
                        // Sync limit after success
                        await syncUserLimit();
                        
                        showToast(currentLang === 'en' ? 'Product added successfully!' : 'تم إضافة المنتج بنجاح!', 'success');
                        
                        if (el.uploadModal) el.uploadModal.style.display = 'none';
                        uploadForm.reset();
                        if (imagePreview) {
                            imagePreview.style.display = 'none';
                            imagePreview.innerHTML = '';
                        }
                    } catch (dbError) {
                        console.error('❌ MySQL Save Failed:', dbError);
                        showToast(dbError.message || 'Error saving to database', 'error');
                    }
                } catch (error) {
                    console.error("Upload Error:", error);
                    showToast(currentLang === 'en' ? 'Error processing upload.' : 'خطأ في معالجة الرفع.', 'error');
                } finally {
                    hideLoading();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            };
            reader.readAsDataURL(file);
        };
    }
}

// Ensure init runs on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('--- DOMContentLoaded ---');
    init().catch(err => console.error('Init Error:', err));
});
