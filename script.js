
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
            aboutText.textContent = 'A human.';
            projectsTitle.textContent = 'Projects';
            projectsText.textContent = 'Please read this website before any interaction.';
            contactTitle.textContent = 'Contact';
            contactText.textContent = 'To be updated.';
        } else {
            name.textContent = '傅寒川';
            slogan.textContent = '"I leave no trace of wings in the air, but I’m glad I have had my flight." - Rabindranath Tagore';
            aboutTitle.textContent = '關於我';
            aboutText.textContent = '人類。';
            projectsTitle.textContent = '提醒';
            projectsText.textContent = '加友提醒：加好友前可以簡單自我介紹，讓彼此更了解對方。';
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
