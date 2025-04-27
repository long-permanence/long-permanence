
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const name = document.getElementById('name');
    const slogan = document.getElementById('slogan');
    const aboutTitle = document.getElementById('about-title');
    const aboutText = document.getElementById('about-text');
    const projectsTitle = document.getElementById('projects-title');
    const projectsText = document.getElementById('projects-text');
    const contactTitle = document.getElementById('contact-title');
    const contactText = document.getElementById('contact-text');
    
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    let language = localStorage.getItem('language') || 'en';

    // Set initial theme and language
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    languageToggle.textContent = language === 'en' ? '中文' : 'English';

    // Set language based on selection
const updateLanguage = (lang) => {
    if (lang === 'en') {
        name.textContent = 'Lucian';
        slogan.textContent = '"I leave no trace of wings in the air, but I’m glad I have had my flight." - Rabindranath Tagore';
        aboutTitle.textContent = 'About Me';
        aboutText.innerHTML = `
            <ul>
                <li>Name: Lucian</li>
                <li>Games & Characters I like: HSR, Dan Heng, Dan Heng IL.</li>
                <li>I'm not super into socializing (but I'm easy to get along with!). Once we're familiar, I might get pretty chatty and joke around a lot. Feel free to reach out if we share similar interests!</li>
                <li>DNI list: Snowflakes, bad attitudes, and scams.</li>
                <li>Things that might annoy you: I often react with Messenger emojis.</li>
            </ul>
        `;
        projectsTitle.textContent = 'Reminders';
        projectsText.innerHTML = `
            <ul>
                <li>Please introduce yourself before any interaction.</li>
                <li>Mutual respect is appreciated.</li>
            </ul>
        `;
        contactTitle.textContent = 'Contact';
        contactText.textContent = 'To be updated.';
    } else {
        name.textContent = '傅寒川';
        slogan.textContent = '"I leave no trace of wings in the air, but I’m glad I have had my flight." - Rabindranath Tagore';
        aboutTitle.textContent = '關於我';
        aboutText.innerHTML = `
            <ul>
                <li>姓名：傅寒川，可叫我寒川。</li>
                <li>坑 & 推角：星鐵，推丹恆和飲月。</li>
                <li>不太熱衷社交（但我很好相處啦），熟了幹話可能會很多，歡迎同好戳友認識。</li>
                <li>雷點：玻璃心、爛態度、詐騙。</li>
                <li>可能雷到你的地方：會按messenger表情回覆、會用部分小黃臉（常用哭笑不得的臉表達自己覺得好笑）。</li>
            </ul>
        `;
        projectsTitle.textContent = '提醒';
        projectsText.innerHTML = `
            <ul>
                <li>加好友前，請簡單自我介紹，讓彼此更了解對方。</li>
                <li>請尊重彼此。</li>
            </ul>
        `;
        contactTitle.textContent = '聯絡方式';
        contactText.textContent = '待更新';
    }
};

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    });

    // Language toggle
    languageToggle.addEventListener('click', () => {
        language = language === 'en' ? 'zh' : 'en';
        localStorage.setItem('language', language);
        updateLanguage(language);
    });

    updateLanguage(language);
});
