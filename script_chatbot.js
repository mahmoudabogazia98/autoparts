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
                answer: "يمكنك التواصل مع إدارة الموقع مباشرة عبر البريد الإلكتروني support@autoparts.com أو الاتصال بنا على +123 456 7890.",
                detail: "ستجد أيضاً كافة وسائل التواصل الاجتماعي ومقرنا في أسفل الصفحة (الفوتر). نحن متاحون للرد على استفساراتكم على مدار الساعة."
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
