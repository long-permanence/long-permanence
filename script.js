
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
            aboutText.textContent = 'A passionate developer and designer, constantly seeking new challenges and opportunities to grow.';
            projectsTitle.textContent = 'Projects';
            projectsText.textContent = 'Check out some of my recent work below:';
            contactTitle.textContent = 'Contact';
            contactText.textContent = 'Feel free to reach out to me via email.';
        } else {
            name.textContent = '傅寒川';
            slogan.textContent = '"我在空中不留下翅膀的痕跡，但我很高興曾經飛過。" - 泰戈爾';
            aboutTitle.textContent = '關於我';
            aboutText.textContent = '一位熱愛技術與設計的開發者，不斷尋求新的挑戰與機會成長。';
            projectsTitle.textContent = '專案';
            projectsText.textContent = '以下是我最近的工作：';
            contactTitle.textContent = '聯絡我';
            contactText.textContent = '隨時可以通過電子郵件聯絡我。';
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
