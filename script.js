function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translation-id]');
    
    elements.forEach(element => {
        const translationId = element.getAttribute('data-translation-id');
        element.textContent = translations[language][translationId];
    });
}




